import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest,
    {params}: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    // Fetch data from a db
    // If not found, return 404 error
    // Else return data
    if (!user) {
        return NextResponse.json({error: 'User not found', status: 404});
    }
    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    const body = await request.json();
    // This does not yell at us if there is a validation error
    // it just returns an object that contains the result of validation
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});
    // Fetch the user with the given id
    // if it doesn't exist, return 404
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    })
    if (!user)
        return NextResponse.json({error: 'User not found', status: 404});

    const updatedUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            name: body.name,
            email: body.email,
        }
    })
    return NextResponse.json(updatedUser);
}

export async function DELETE(
    request: NextRequest,
    {params}: { params: { id: string } }
) {
    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });
    // Fetch user from db. If not found, return 404
    if (!user) {
        return NextResponse.json({error: 'User not found', status: 404});
    }
    // Delete the user
    // Return 200 response
    await prisma.user.delete({where:{id: user.id}})
    return NextResponse.json({});
}