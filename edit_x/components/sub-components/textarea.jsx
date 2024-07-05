import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function InputOutput() {
  return (
    <div className="flex flex-row gap-x-4 overflow-auto">
      <div className="flex flex-col w-full gap-y-4">  
        <Label htmlFor="input" className="m-2">
          Inputs
        </Label>
        <div className="ml-2 overflow-auto max-h-48">
          <Textarea placeholder="Inputs" id="input" />
        </div>
        <Button className="ml-2">Run</Button>
      </div>
      <div className="flex flex-col w-full gap-y-4">
        <Label htmlFor="output" className="m-2">
          outputs
        </Label>
        <div className="mr-2 overflow-auto max-h-48">
          <Textarea placeholder="Outputs" id="output" disabled />
        </div>
        <Button className="mr-2">Copy</Button>
      </div>
    </div>
  );
}
