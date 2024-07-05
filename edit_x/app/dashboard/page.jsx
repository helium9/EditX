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
import { LineChart } from "../../components/sub-components/LineChart.jsx";
import { PieChartComponent } from "../../components/sub-components/PieChart.jsx";

const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      data: [86, 114, 106, 106, 107, 111, 133],
      label: "Applied",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    },
    {
      data: [70, 90, 44, 60, 83, 90, 100],
      label: "Accepted",
      borderColor: "#3cba9f",
      backgroundColor: "#71d1bd",
      fill: false,
    },
    {
      data: [10, 21, 60, 44, 17, 21, 17],
      label: "Pending",
      borderColor: "#ffa500",
      backgroundColor: "#ffc04d",
      fill: false,
    },
    {
      data: [6, 3, 2, 2, 7, 0, 16],
      label: "Rejected",
      borderColor: "#c45850",
      backgroundColor: "#d78f89",
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function Page() {
  return (
    <main className="bg-zinc-800 min-h-screen flex flex-col">
      <Sheet>
        <NavigationBar>
          <SheetTrigger asChild>
            <Button variant="secondary">Button</Button>
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
          <LineChart data={data} options={options} />
        </div>
        <div className="bg-zinc-700 rounded-lg p-4 shadow-lg lg:w-1/3 mr-4 flex justify-center items-center">
          <PieChartComponent />
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
