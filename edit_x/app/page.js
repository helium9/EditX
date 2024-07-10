"use client";

import dynamic from 'next/dynamic';
import NavigationBar from "../components/sub-components/navbar";
import UlilityBar from "../components/sub-components/utilityBar";
import InputOutput from "../components/sub-components/textarea";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState, useRef, useCallback } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { Button } from "../components/ui/button";
// import CollabEditor from "../components/CollabEditor";
const MonacoEditor = dynamic(() => import('../components/CollaborativeEditor'), { ssr: false });
import { useClerk } from "@clerk/nextjs";

import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [editorHeight, setEditorHeight] = useState("100%");
  const [consoleHeight, setConsoleHeight] = useState(0);
  const [showConsole, setShowConsole] = useState(false);
  const consolePanelRef = useRef(null);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();
  const clerk = useClerk();
  const [room, setRoom] = useState(uuidv4());
  // console.log("main", room);
  // if (!isLoaded || !userId) {
  //   return null;
  // }

  const handleResize = useCallback((_, __, ___, delta) => {
    setEditorHeight((prevHeight) => {
      const newHeight = parseFloat(prevHeight) + delta.height;
      return `${Math.max(10, Math.min(90, newHeight))}%`;
    });
    setConsoleHeight((prevHeight) => {
      const newHeight = parseFloat(prevHeight) - delta.height;
      return `${Math.max(10, Math.min(90, newHeight))}%`;
    });
  }, []);

  const toggleConsole = () => {
    setShowConsole(!showConsole);
    if (consolePanelRef.current) {
      if (showConsole) {
        setEditorHeight("100%");
        setConsoleHeight(0);
      } else {
        setEditorHeight("80%");
        setConsoleHeight("20%");
      }
    }
  };

  return (
    <main className="text-foreground flex flex-col h-screen">
      {user && (
        <div className="text-black ">
          Hello, {userId} your current active session is {sessionId}
          {getToken}
          <br></br>
          {console.log(user, "yup ")}
          the user is {user.username} and your email is{" "}
          {user.emailAddresses[0].emailAddress}
        </div>
      )}
      <NavigationBar />
      <UlilityBar room = {room} setRoom={setRoom}/>
      <ResizablePanelGroup className="flex-1" direction="vertical">
        <ResizablePanel
          defaultSize={70}
          minSize={50}
          className="overflow-hidden"
          size={editorHeight}
          onResizeStop={handleResize}
        >
          {clerk.loaded && room != undefined && <MonacoEditor room = {room}/>}
        </ResizablePanel>
        {showConsole && ( // Conditionally render the console
          <>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={30}
              minSize={15}
              ref={consolePanelRef}
              size={consoleHeight}
              onResizeStop={handleResize}
              className="overflow-auto relative bg-zinc-800"
            >
              <div className="overflow-auto">
                <Button
                  onClick={toggleConsole}
                  className="absolute top-2 right-2"
                  size="sm"
                >
                  Close Console
                </Button>
                <InputOutput />
              </div>
            </ResizablePanel>
          </>
        )}
      </ResizablePanelGroup>

      {!showConsole && (
        <div className="h-14 flex items-center justify-center bg-zinc-800">
          <Button variant="ghost" onClick={toggleConsole}>
            Open Console
          </Button>
        </div>
      )}
    </main>
  );
}
