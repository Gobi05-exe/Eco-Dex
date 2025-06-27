import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });

        // Clear authentication and session cookies
        response.cookies.set("auth_token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(0),
            path: "/", // Ensure it's removed for all routes
        });

        response.cookies.set("username", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(0),
            path: "/",
        });

        return response;
    } catch (error: unknown) { // Use 'unknown' instead of 'any'
        console.error("Logout error:", error);
        
        // Ensure error is an instance of Error before accessing 'message'
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
