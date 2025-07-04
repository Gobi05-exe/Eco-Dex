"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/button";
import Image from "next/image";

export default function Signup() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/signin");
        } catch (error) {
            const err = error as AxiosError<{ message: string }>;
            console.log("Signup failed", err.response?.data?.message || err.message);
            toast.error(err.response?.data?.message || "Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setButtonDisabled(!(user.email && user.password && user.username));
    }, [user]);

    return (
        <>
            <div className="signUpWrapper">
                <div className="formWrapper">
                    <div className="left">
                        <h3 className="title">Hey There!</h3>
                        <p>Sign up to unlock the full potential of RAG-ED.</p>
                        <Link href="/signin">
                            <Button className='border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8'>Sign In</Button>
                        </Link>
                    </div>
                    <div className="right flex flex-col justify-center items-center">
                        <div className="flex items-center border-gray-300 pb-4">
                            <Image src="/icons/logo_main.svg" width={50} height={50} alt="logo" />
                            <span className="ml-2 text-2xl font-stacker font-bold">Eco-Dex</span>
                        </div>
                        <h3 className='text-center text-2xl font-poppins font-semibold mb-4'>{loading ? "Processing" : "Register Here"}</h3>
                        
                        <div className="flex flex-col justify-start">
                            <label htmlFor="username">Username</label>
                            <input
                                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                id="username"
                                type="text"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                                placeholder="username"
                            />
                        </div>

                        <div className="flex flex-col justify-start">
                            <label htmlFor="email">Email</label>
                            <input
                                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                id="email"
                                type="text"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="email"
                            />
                        </div>

                        <div className="flex flex-col justify-start">
                            <label htmlFor="password">Password</label>
                            <input
                                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                placeholder="password"
                            />
                        </div>
                        
                        <Button
                            type="submit"
                            onClick={onSignup}
                            className='w-full relative'
                            disabled={loading || buttonDisabled}
                        >
                            {loading ? (
                                <>
                                    <span className="loader"></span>
                                    Loading...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .loader {
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    border-top: 2px solid white;
                    width: 16px;
                    height: 16px;
                    animation: spin 1s linear infinite;
                    margin-right: 8px;
                    display: inline-block;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
}
