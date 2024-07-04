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

export default function NavigationBar() {
  return (
    <Navbar position="static" className="bg-zinc-800">
      <NavbarContent>
        <p justify="start" className="font-poppins italic font-bold text-2xl">
          EDIT-X
        </p>
      </NavbarContent>
      <NavbarContent justify="end">
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
            
          
          
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
