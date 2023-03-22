// import React from "react";

// import { Tooltip, Position } from "@blueprintjs/core";
// // import { Tooltip2 } from "@blueprintjs/popover2";
// // import { Popover2, Tooltip2 } from "@blueprintjs/popover2";

// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import Calendar from "@fullcalendar/react";
// import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
// import interaction from "@fullcalendar/interaction";

// export const Calendar2 = () => {
//   return (
//     <FullCalendar
//       plugins={[timeGridPlugin, interaction]}
//       initialView="timeGridWeek"
//       weekends={false}
//       slotMinTime="08:00:00"
//       slotMaxTime="19:00:00"
//       slotDuration="00:15:00"
//       slotLabelInterval="01:00"
//       eventMaxStack={3}
//       editable={true}
//       slotEventOverlap={false}
//       events={[
//         {
//           title: "Session1 - 001",
//           start: "2023-03-21T12:30:00Z",
//           end: "2023-03-21T14:30:00Z",
//           description: "tooltip content!",
//         },
//         {
//           title: "Classic Session - 21/03",
//           start: "2023-03-21T12:30:00Z",
//           end: "2023-03-21T14:30:00Z",
//           description: "tooltip content!",
//         },
//         {
//           display: "background",
//           start: "2023-03-22T12:30:00Z",
//           end: "2023-03-22T14:30:00Z",
//           color: "#f58c67",
//           borderColor: "#1b1c1a",
//           description: "tooltip content!",
//         },
//       ]}
//       eventContent={(info) => {
//         // console.log("hover");
//         const tooltip = (
//           <Tooltip
//             content={"info.description"}
//             usePortal={true}
//             onInteraction={() => console.log("HOVERED!")}
//             isOpen={true}
//           >
//             {
//               <div className="fc-event-main">
//                 <p>{info.event.title}</p>
//               </div>
//             }
//           </Tooltip>
//         );
//         return tooltip;
//       }}
//     />
//   );
// };
