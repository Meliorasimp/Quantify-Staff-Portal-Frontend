import Navbar from "../components/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import type { View } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Team Meeting",
    start: new Date(2025, 10, 30, 10, 0), // November 30, 2025, 10:00 AM
    end: new Date(2025, 10, 30, 11, 0), // November 30, 2025, 11:00 AM
    allDay: false,
  },
  {
    title: "Delivery Deadline",
    start: new Date(2025, 10, 30, 15, 0), // November 30, 2025, 3:00 PM
    end: new Date(2025, 10, 30, 16, 0), // November 30, 2025, 4:00 PM
    allDay: false,
  },
  {
    title: "Inventory Audit",
    start: new Date(2025, 11, 2), // December 2, 2025
    end: new Date(2025, 11, 5), // December 5, 2025
    allDay: true,
  },
];

import { useState } from "react";

const Schedule = () => {
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState<Date>(new Date());

  // Temporary click handlers for debugging
  const handleSelectEvent = (event: unknown) => {
    console.log("Selected event ->", event);
  };

  const handleSelectSlot = (slotInfo: unknown) => {
    console.log("Selected slot ->", slotInfo);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          <section className="mb-6">
            <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Schedule
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Manage your events and deadlines effectively
            </p>
          </section>
          <section className="bg-white shadow-lg rounded-lg p-6">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 700 }}
              className="rounded-lg"
              toolbar={true}
              components={{
                // small custom event renderer so clicking an event triggers our handler
                event: ({ event }: { event: unknown }) => (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectEvent(event);
                    }}
                    className="cursor-pointer px-1 py-0.5"
                  >
                    {/* event is unknown; render title if present */}
                    {(event as { title?: string }).title ?? "Event"}
                  </div>
                ),
              }}
              views={["month", "week", "day", "agenda"]}
              defaultView={view}
              view={view}
              onView={(nextView) => {
                console.log("Schedule onView -> view:", nextView);
                setView(nextView);
              }}
              date={date}
              onNavigate={(newDate, action) => {
                console.log(
                  "Schedule onNavigate -> action:",
                  action,
                  "date:",
                  newDate
                );
                setDate(newDate as Date);
              }}
              defaultDate={new Date()}
              popup={true}
              selectable={true}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Schedule;
