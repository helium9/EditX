import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Button } from "../ui/button";
import { Avatar, AvatarGroup } from "@nextui-org/react";

export default function UlilityBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-x-6 h-16 bg-zinc-800 text-slate-200">
      <div className="flex flex-col md:flex-row justify-start w-full gap-x-6 h-16 bg-zinc-800 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center rounded-md">
            <Button variant="link" className="text-slate-200">
              Font
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-36">
            <DropdownMenuItem>10px</DropdownMenuItem>
            <DropdownMenuItem>12px</DropdownMenuItem>
            <DropdownMenuItem>14px</DropdownMenuItem>
            <DropdownMenuItem>16px</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center rounded-md">
            <Button variant="link" className="text-slate-200">
              Langauge
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-72 overflow-auto">
            <DropdownMenuItem>ABAP</DropdownMenuItem>
            <DropdownMenuItem>ActionScript</DropdownMenuItem>
            <DropdownMenuItem>Ada</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="link" className="text-slate-200">
          Push
        </Button>
        <Button variant="link" className="text-slate-200">
          Pull
        </Button>
        <Button variant="link" className="text-slate-200">
          Run
        </Button>
        <Button variant="link" className="text-slate-200">
          Share
        </Button>
        <Button variant="link" className="text-slate-200">
          Export
        </Button>
      </div>
      <div className="hidden md:flex flex-col md:flex-row w-full justify-end pr-12">
        <AvatarGroup isBordered size="sm" max={5}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e2902670</AvatarGroup>8c" />
        </AvatarGroup>
      </div>
    </div>
  );
}
