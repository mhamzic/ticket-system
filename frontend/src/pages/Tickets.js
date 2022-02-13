import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";

const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());

    // cleanup
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
};

export default Tickets;
