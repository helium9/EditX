import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar position="static" className="bg-zinc-800">
      <NavbarContent>
        <p justify="start" className="font-poppins italic font-bold text-2xl">
          EDIT-X
        </p>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button color="#E6F1FE" variant="ghost">
            log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
