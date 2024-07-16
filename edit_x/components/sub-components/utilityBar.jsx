import React from "react";
import { useState, useRef, useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Link  from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarGroup } from "@nextui-org/react";
<<<<<<< HEAD

export default function UlilityBar({ room, setRoom, handleSubmitCode }) {
=======
import Chat from "../chat";
export default function UlilityBar({ room, setRoom, handleSubmitCode,ChatOpen,setChatOpen}) {
>>>>>>> 60066c2f5dbb61b87c11474fe923efc288cd49b6
  const roomRef = useRef(room);
  const chatRef=useRef(ChatOpen);
  // const [chatopened,setchatopened]=useState(false);
  const handleRoomChange = (e) => {
    roomRef.current = e.target.value;
  };
  const handleChat = () => {

    chatRef.current==true?chatRef.current=false:chatRef.current=true;
    setChatOpen(chatRef.current);
    
  };
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-x-6 h-16 bg-zinc-800 text-slate-200">
      <div className="flex flex-col md:flex-row justify-start w-full gap-x-6 h-16 bg-zinc-800 p-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center rounded-md">
            Font
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
            Language
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
        <Button
          variant="link"
          className="text-slate-200"
          onClick={handleSubmitCode}
        >
          Run
        </Button>
        <Button variant="link" className="text-slate-200">
          Share
        </Button>
        <Button variant="link" className="text-slate-200">
          Export
        </Button>
        <Button onClick={handleChat} variant="link" className="text-slate-200">
          chat
        </Button>
       

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="text-slate-200">
              Join Room
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                Room ID:
                <Input
                  id="link"
                  defaultValue={room}
                  onChange={handleRoomChange}
                />
              </div>
              <Button
                type="submit"
                size="sm"
                className="px-3"
                onClick={() => {
                  setRoom(roomRef.current);
                  //it would be wise to send the user data to DB that they are successfully in the room for displaying participants.
                }}
              >
                Submit
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="hidden md:flex flex-col md:flex-row w-full justify-end pr-12">
        {/* <AvatarGroup isBordered size="sm" max={5}>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e2902670</AvatarGroup>8c" />
        </AvatarGroup> */}
      </div>
    </div>
  );
}
