"use client";

import dynamic from "next/dynamic";
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
const MonacoEditor = dynamic(
  () => import("../components/CollaborativeEditor"),
  { ssr: false }
);
import { useClerk } from "@clerk/nextjs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
  const editorRef = useRef(null);

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
  const handleSubmitCode = () => {
    // console.log(editorRef.current.getValue());
    axios
      .post(
        "http://localhost:2358/submissions",
        {
          source_code: editorRef.current.getValue(),
          language_id: 54,
          number_of_runs: null,
          stdin: null, //Input stream
          expected_output: null,
          cpu_time_limit: 2,
          cpu_extra_time: 1,
          wall_time_limit: null,
          memory_limit: null,
          stack_limit: null,
          max_processes_and_or_threads: null,
          enable_per_process_and_thread_time_limit: null,
          enable_per_process_and_thread_memory_limit: null,
          max_file_size: null,
          enable_network: null,
        },
        { params: { wait: true } }// look at colon (:), its not recognizing need to encode in base64.
      ) //wait params is set to true which synchronously waits for the output directly and not give a tracking token instead. This however is not recommended as per docs due to scaling issues.
      .then((res) => {
        console.log(res.data); //currently getting output directly as wait=true.
        // return res.data.token;
      });
    // .then((res) => {
    //   // console.log(editorRef.current.getPosition());
    //   setTimeout(() => {
    //     axios.get(`http://localhost:2358/submissions/${res}`).then((res) => {
    //       console.log(res.data.stdout); //currently output is displayed in the console.
    //     });
    //   }, 5000);
    // });
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
      <UlilityBar
        room={room}
        setRoom={setRoom}
        handleSubmitCode={handleSubmitCode}
      />
      <ResizablePanelGroup className="flex-1" direction="vertical">
        <ResizablePanel
          defaultSize={70}
          minSize={50}
          className="overflow-hidden"
          size={editorHeight}
          onResizeStop={handleResize}
        >
          {clerk.loaded && room != undefined && (
            <MonacoEditor room={room} editorRef={editorRef} />
          )}
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
