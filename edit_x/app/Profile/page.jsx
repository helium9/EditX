import React from "react";
import NavigationBar from "../../components/sub-components/navbar.jsx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet.jsx";
import { Button } from "../../components/ui/button.jsx";
import { SideBaroptions } from "../../components/sub-components/SideBarOptions.jsx";

export default function Dashboard() {
  return (
    <main className="bg-zinc-800 min-h-screen flex flex-col">
      <Sheet>
        <NavigationBar>
          <SheetTrigger asChild>
            <Button variant="secondary">Button</Button>
          </SheetTrigger>
        </NavigationBar>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Explore features and view data</SheetDescription>
            <SideBaroptions />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </main>
  );
}
