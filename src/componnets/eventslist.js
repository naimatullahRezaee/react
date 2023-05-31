import React from "react";

export default function Eventslist(props) {
  return (
    <div>
      {props.events.map((events, index) => (
        <React.Fragment key={events.id}>
          <h2>
            {index + 1} - {events.title}
          </h2>
          <button className="btn" onClick={() => props.handleclick(events.id)}>
            Delete
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
