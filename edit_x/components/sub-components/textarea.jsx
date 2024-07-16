import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../ui/resizable";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function InputOutput() {
  return (
    <ResizablePanelGroup direction="horizontal" className="bg-zinc-600">
      <ResizablePanel
        defaultSize={50}
        minSize={20}
        className="flex flex-col p-4"
      >
        <Label text="Input" className="mb-2 text-white">
          Input
        </Label>
        <textarea
          className="flex-grow bg-white border-none rounded-md p-2 resize-none shadow-inner"
          placeholder="Enter input here..."
        />
      </ResizablePanel>
      <ResizableHandle className="bg-slate-100 cursor-row-resize" />
      <ResizablePanel
        defaultSize={50}
        minSize={20}
        className="flex flex-col p-4"
      >
        <Label text="Output" className="mb-2 text-white">
          Output
        </Label>
        <textarea
          className="flex-grow bg-white border-none rounded-md p-2 resize-none shadow-inner"
          placeholder="Output will be displayed here..."
          readOnly // Typically, output fields are read-only
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
