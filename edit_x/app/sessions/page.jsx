import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet.jsx";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table.jsx";
import { Button } from "../../components/ui/button.jsx";
import NavigationBar from "../../components/sub-components/navbar.jsx";
import { SideBaroptions } from "../../components/sub-components/SideBarOptions.jsx";
import { fromTheme } from "tailwind-merge";

const invoices = [
  {
    index: 1,
    session: "1b9d6bcd-4b9e-4f0b-842d-7dcec14a4740", // Random UUID
    startTime: "10:35",
    endTime: "12:12",
    roomsJoined: 3,
  },
  {
    index: 2,
    session: "3f847e4a-ac10-4baa-a82d-9e3b7e8e7cdc", // Random UUID
    startTime: "14:00",
    endTime: "15:45",
    roomsJoined: 2,
  },
  {
    index: 3,
    session: "9b1df01c-237e-4c29-b82a-8c3e219a45b3", // Random UUID
    startTime: "08:10",
    endTime: "09:20",
    roomsJoined: 4,
  },
  // ... add more invoices as needed
];

export default function Sessions() {
  return (
    <main className="bg-zinc-800 min-h-screen flex flex-col">
      <Sheet>
        <NavigationBar>
          <SheetTrigger asChild>
            <Button variant="link" className="text-slate-200">
              Button
            </Button>
          </SheetTrigger>
        </NavigationBar>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Explore features and view data</SheetDescription>
            <SideBaroptions />
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg h-40 ml-4">
          Card 1
        </div>
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg h-40">Card 2</div>
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg h-40">Card 3</div>
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg h-40 mr-4">
          Card 4
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-11/12 text-slate-200">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">index</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Stat Time</TableHead>
                <TableHead>End Time</TableHead>
                <TableHead>Rooms Joined</TableHead>
                <TableHead>Insights</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.session}>
                  <TableCell className="font-medium">{invoice.index}</TableCell>
                  <TableCell>{invoice.session}</TableCell>
                  <TableCell>{invoice.startTime}</TableCell>
                  <TableCell>{invoice.endTime}</TableCell>
                  <TableCell>{invoice.roomsJoined}</TableCell>
                  <TableCell>
                    <Button variant="secondary">Insights</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
