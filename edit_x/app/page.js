"use client";

import NavigationBar from "../components/sub-components/navbar";
import UlilityBar from "../components/sub-components/utilityBar";
import Editor from "@monaco-editor/react";
import InputOutput from "../components/sub-components/textarea";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState, useRef, useCallback } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { Button } from "../components/ui/button";

export default function Home() {
  const [editorHeight, setEditorHeight] = useState("100%");
  const [consoleHeight, setConsoleHeight] = useState(0);
  const [showConsole, setShowConsole] = useState(false);
  const consolePanelRef = useRef(null);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();

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
      <UlilityBar />
      <ResizablePanelGroup className="flex-1" direction="vertical">
        <ResizablePanel
          defaultSize={70}
          minSize={50}
          className="overflow-hidden"
          size={editorHeight}
          onResizeStop={handleResize}
        >
          <Editor
            height="100%"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue="// some comment"
          />
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
