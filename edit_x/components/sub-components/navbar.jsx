import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  
  Button,
} from "@nextui-org/react";
import { SignIn } from "@clerk/nextjs";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from "next/link";

export default function NavigationBar({ children }) {
  return (
    <Navbar position="static" className="bg-zinc-800">
      <NavbarContent>
        <p
          justify="start"
          className="font-poppins italic font-bold text-2xl text-slate-200"
        >
          EDIT-X
        </p>
      </NavbarContent>
      <NavbarContent justify="end">
<<<<<<< HEAD
        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center justify-center gap-3">
            {children}
          </div>
=======
        <NavbarItem className="hidden lg:flex gap-2">
          <Button color="#E6F1FE" variant="ghost">
            <Link href="/sign-up">Sign Up</Link>
            
          </Button>
          
          <SignedOut>
            <Button color="#E6F1FE" variant="ghost">
                <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
            
          
          
>>>>>>> bffbf4f1fd0704536f912d2c747da6229424c9bf
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
