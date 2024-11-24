import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/path";

const TicketsPage = () => {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id} className="text-lg">
          <h2>{ticket.title}</h2>

          <Link href={ticketPath(ticket.id)} className="text-sm underline">
            View Details
          </Link>
        </div>
      ))}
    </div>    
  );
}

export default TicketsPage;