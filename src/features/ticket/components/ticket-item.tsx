import clsx from "clsx";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/types";
import { ticketPath } from "@/paths";

const TicketItem = ({ ticket }: { ticket: Ticket }) => {
  return (
    <Card
      className="w-full max-w-[420px]"
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-x-2">
          <span>{TICKET_ICONS[ticket.status]}</span>
          <span className="truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className={clsx("line-clamp-3 whitespace-break-spaces", {
          "line-through": ticket.status === "DONE",
        })}>{ticket.content}</span>
      </CardContent>
      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
      </CardFooter>
    </Card>
  )
}

export { TicketItem };
