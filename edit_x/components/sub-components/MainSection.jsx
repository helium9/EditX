"use client";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../ui/resizable";
import React, { useState, useEffect, useRef } from "react";
import InputOutput from "./textarea";
import { Editor } from "@monaco-editor/react";
import Chat from "../chat";

const MainLayout = ({ defaultLayout = [320, 420, 200], roomId }) => {
  const [layout, setLayout] = useState([15, 85]);
  const [layout1, setLayout1] = useState([80, 20]);
  const collapsedContent = <InputOutput />;
  return (
    <ResizablePanelGroup direction="horizontal" className="bg-zinc-600">
      <ResizablePanel
        defaultSize={15}
        showResetSize={layout[0]}
        minSize={5}
        buttonStyle="w-[72px]"
        buttonContent={"Reset"}
      >
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">
            <Chat room={roomId} />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle className="bg-slate-100" />
      <ResizablePanel defaultSize={80} minSize={10}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={80} minSize={20}>
            <Editor />
          </ResizablePanel>
          <ResizableHandle className="bg-slate-50" />
          <ResizablePanel
            defaultSize={20}
            showResetSize={layout1[1]}
            minSize={7}
            buttonContent={"Open console"}
            contentWhenExpanded={collapsedContent}
          ></ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MainLayout;
