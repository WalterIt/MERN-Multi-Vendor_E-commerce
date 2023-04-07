import React from "react";
import Header from "../components/layout/Header";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  return (
    <div>
      <EventCard active={true} />
      <EventCard active={true} />
    </div>
  );
};

export default EventsPage;
