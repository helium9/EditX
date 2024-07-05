import {
  BarChart4,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  List,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function SideBaroptions() {
  return (
    <Command>
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Insights">
          <CommandItem>
            <List className="mr-2 h-4 w-4" />
            <span>Sessions</span>
          </CommandItem>
          <CommandItem>
            <BarChart4 className="mr-2 h-4 w-4" />
            <span>Statics</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
