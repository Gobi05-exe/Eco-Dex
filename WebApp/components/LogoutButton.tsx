import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { LogoutIcon } from '@heroicons/react/outline';

const LogoutButton = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      sessionStorage.removeItem("auth_token");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to logout");
      }

      // Ensure this runs only on client
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token");
        sessionStorage.removeItem("auth_token");
      }

      router.push("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button onClick={handleLogout} className="w-full mb-4 flex items-center justify-center transition-transform duration-200 transform hover:scale-105 bg-gradient-to-r from-[#388e3c] to-[#47b44c] text-white font-medium rounded-lg py-3 hover:opacity-80">
      <LogoutIcon className="h-5 w-5 mr-2" />
      Logout
    </Button>
  );
};

export default LogoutButton;
