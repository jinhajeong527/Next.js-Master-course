import {NextRequest, NextResponse} from "next/server";

// To prevent Caching, we need request as parameter
export function GET(request: NextRequest) {
    // fetch users from a db
    return NextResponse.json([
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Mosh'}
    ]);
}