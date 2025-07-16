import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  DONE: "🎉",
  OPEN: "🚧",
  IN_PROGRESS: "🚨",
}

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2>{TICKET_ICONS[ticket.status]}</h2>
          <h2>{ticket.title}</h2>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">View Ticket</Link>
        </div>
      ))}
    </div>
  )
}

export default TicketsPage;
