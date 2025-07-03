import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Weekly/Hourly View
import listPlugin from "@fullcalendar/list"; // List View
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const Calendar = () => {

    const initialView = "timeGridWeek"
    const headerMenu =  {
                            left: "title",
                            center: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                            right: "prev,next today",
                        }
    const allEvents =   [
                            { title: "Meeting", start: "2025-02-27T10:00:00", end: "2025-02-27T12:00:00" },
                            { title: "Conference", start: "2024-02-24", allDay: true },
                            { title: "Meeting", start: "2024-02-28", allDay: true },
                            { title: "Meeting", start: "2025-03-02T08:00:00", end: "2025-03-02T11:00:00" },
                        ]
    return (
        <div className="px-6 py-10">
            <div className="flex items-center justify-between py-5 mb-6">
                <h2 className="text-4xl">My Schedule</h2>
                <span className="text-base font-medium border-1 border-[#D5D7DA] px-3 py-1 rounded-lg shadow-[0px_1px_2px_1px__#1018280D]">
                    <QuestionMarkCircleIcon className="w-6 h-6 inline-block pr-1" />
                    Help
                </span>
            </div>
            <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView={initialView} // Default view
                headerToolbar={headerMenu}
                events={allEvents}
            />
            </div>
        </div>
    )
}

export default Calendar;