"use client";

import dynamic from "next/dynamic";
import NavigationBar from "../components/sub-components/navbar";
import UlilityBar from "../components/sub-components/utilityBar";
import InputOutput from "../components/sub-components/textarea";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "../components/ui/button";
import Chat from "../components/chat";
// import CollabEditor from "../components/CollabEditor";
const MonacoEditor = dynamic(
  () => import("../components/CollaborativeEditor"),
  { ssr: false }
);
import { useClerk } from "@clerk/nextjs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import MainLayout from "../components/sub-components/MainSection";


export default function Home() {
  const [showConsole, setShowConsole] = useState(false);
  const consolePanelRef = useRef(null);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn, user } = useUser();
  const clerk = useClerk();
  const [room, setRoom] = useState(uuidv4());
<<<<<<< HEAD

=======
  const [ChatOpen, setChatOpen] = useState(false);
>>>>>>> 60066c2f5dbb61b87c11474fe923efc288cd49b6
  // console.log("main", room);
  // if (!isLoaded || !userId) {
  //   return null;
  // }
  const editorRef = useRef(null);

  const toggleConsole = () => {
    setShowConsole(!showConsole);
  };

  const [defaultLayout, setDefaultLayout] = useState([300, 400]); // Default layout

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
        { params: { wait: true } } // look at colon (:), its not recognizing need to encode in base64.
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
          <br />
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
        ChatOpen={false}
        setChatOpen={setChatOpen}
      />

      <div className="flex h-screen flex-col items-center justify-center">
        <MainLayout defaultLayout={defaultLayout} />
      </div>

      {/* <div className="flex-grow overflow-hidden">
        {clerk.loaded && room && (
          <MonacoEditor room={room} editorRef={editorRef} />
        )}
      </div>
      {showConsole && (
        <div className="bg-zinc-800 p-2">
          <div className="flex justify-end items-center">
            <Button onClick={toggleConsole} size="sm" variant="secondary">
              Close Console
            </Button>
          </div>
          <InputOutput />
        </div>
      )}

      {!showConsole && (
        <div className="h-14 flex items-center justify-center bg-zinc-800">
          <Button variant="secondary" onClick={toggleConsole}>
            Open Console
          </Button>
        </div>
<<<<<<< HEAD
      )} */}
=======
      )}
      {console.log("ChatOpen", ChatOpen)}
      {
        ChatOpen && 
        <div><Chat room={room} /></div>
      }
>>>>>>> 60066c2f5dbb61b87c11474fe923efc288cd49b6
    </main>
  );
}
