"use client";
import React from "react";
import { useState } from "react";
import { SignIn } from "@clerk/nextjs";
import { Button } from "../../components/ui/button.jsx";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function NavigationBar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-800 p-4">
      <div className="flex items-center justify-between">
        <p className="font-poppins italic font-bold text-2xl text-slate-200">
          EDIT-X
        </p>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className="hidden lg:flex gap-2 items-center justify-center">
          <Button variant="secondary">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <SignedOut>
            <Button variant="secondary">
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <Button className="w-full mb-2" variant="secondary">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <SignedOut>
            <Button className="w-full mb-2" variant="secondary">
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </div>
      )}
    </nav>
  );
}
