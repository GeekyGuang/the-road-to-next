export type Ticket = {
  id: number;
  title: string;
  content: string;
  status: "DONE" | "OPEN" | "IN_PROGRESS";
}
