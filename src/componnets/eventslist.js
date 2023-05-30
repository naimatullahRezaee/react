import React from "react";

export default function Eventslist(props) {
  return (
    <div>
      {props.events.map((events, index) => (
        <React.Fragment key={events.id}>
          <h2>
            {index + 1} - {events.title}
            <button onClick={() => props.handleclick(events.id)}>Delete</button>
          </h2>
        </React.Fragment>
      ))}
    </div>
  );
}
