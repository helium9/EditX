import React from "react";
import NavigationBar from "../../components/sub-components/navbar.jsx";
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
import { Button } from "../../components/ui/button.jsx";
import { SideBaroptions } from "../../components/sub-components/SideBarOptions.jsx";
// import { PieChartComponent } from "../../components/sub-components/PieChart.jsx";
import { DailyActivityChart } from "./components/AreaChart.jsx";
import { LanguageUsed } from "./components/PieChart.jsx";

export default function Page() {
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

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg lg:w-2/3 aspect-video ml-4">
          <DailyActivityChart />
        </div>
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg lg:w-1/3 mr-4 flex justify-center items-center">
          <LanguageUsed />
        </div>
      </div>

      <div className="bg-zinc-700 rounded-lg p-4 shadow-lg flex-grow m-4">
        Large Card
      </div>
      {/* <LineChart data={data} options={options} />
          <PieChartComponent /> */}
    </main>
  );
}
