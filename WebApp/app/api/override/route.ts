import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { command } = await req.json();
        
        // Replace with your Ngrok or Flask backend URL
        const flaskApiUrl = "https://your-ngrok-url.ngrok-free.app/api/override";

        const response = await fetch(flaskApiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ command }),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) { // Renamed 'error' to 'err' to avoid linting issues
        console.error("Error sending override command:", err); // Logs the error for debugging
        return NextResponse.json({ error: "Failed to send override command" }, { status: 500 });
    }
}
