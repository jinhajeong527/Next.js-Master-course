import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";
import error from "@/app/error";

// To prevent Caching, we need request as parameter
export function GET(request: NextRequest) {
    // fetch users from a db
    return NextResponse.json([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Mosh'}
    ]);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});
    return NextResponse.json({id: 1, name: body.name}, {status: 201});
}