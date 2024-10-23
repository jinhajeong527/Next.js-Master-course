import {NextRequest, NextResponse} from "next/server";

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
    // If false -> empty string or does not exist
    if (!body.name)
        return NextResponse.json({error: 'Name is required'}, {status: 400});
    return NextResponse.json({id: 1, name: body.name}, {status: 201});
}