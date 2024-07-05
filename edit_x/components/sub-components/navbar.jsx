import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

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
        <NavbarItem className="hidden lg:flex">
          <div className="flex items-center justify-center gap-3">
            {children}
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
