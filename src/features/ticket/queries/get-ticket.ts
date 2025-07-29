import { initialTickets } from "@/data";
import { Ticket } from "@/features/ticket/types";

export const getTicket = async (id: number): Promise<Ticket | null> => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return initialTickets.find(ticket => ticket.id === id) || null;
};
