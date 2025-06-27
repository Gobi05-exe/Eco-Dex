import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging MongoDB URI

await connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log("Received request body:", reqBody); // Log the request body

        const collectionName = `${username}.botids`;

        // Get list of collections

        const db = mongoose.connection.db;

        if (!db) {
            return NextResponse.json({ error: "Database not connected" }, { status: 500 });
        }

        const collections = await db.listCollections().toArray();

        const exists = collections.some(col => col.name === collectionName);

        if (!exists) {
            console.log(`Required collection '${collectionName}' does not exist.`)
            return NextResponse.json({ error: `Required collection '${collectionName}' does not exist.` }, { status: 400 });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists"); // Log user existence
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email: email.trim().toLowerCase(), // Normalize email
            password: hashedPassword,
            isVerified: true,
            isAdmin: false,
        });

        const savedUser = await newUser.save();
        console.log("User saved to DB:", savedUser); // Log saved user details

        // Create a unique collection for the user
        const userWasteCollection = mongoose.connection.collection(`${username}_waste_records`);
        await userWasteCollection.createIndex({ _id: 1 });

        const userKeys = mongoose.connection.collection(`${username}_keys`);
        await userKeys.createIndex({ _id: 1 });

        // Respond with success message
        return NextResponse.json({
            message: "User Registration Successful",
            success: true,
            savedUser,
        });
    } catch (error: unknown) {
        console.error("Error in signup process:", error); // Log the error

        // Ensure proper error handling
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
