"use client"

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mr-4">
        Register
      
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mr-4"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return (
    <Link href="/profile" className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
        Profile
    </Link>
  );
};