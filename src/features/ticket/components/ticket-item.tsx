import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/types";
import { ticketPath } from "@/paths";

const TicketItem = ({ ticket }: { ticket: Ticket }) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  )
  return (
    <div className="w-full max-w-[420px] flex-1 flex gap-x-1">
      <Card
        className="w-full"
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
      </Card>
      <div className="flex flex-col gap-y-1">
        {detailButton}
      </div>
    </div>
  )
}

export { TicketItem };
