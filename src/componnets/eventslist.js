import React from "react";
import styles from "./events.module.css";
export default function Eventslist(props) {
  return (
    <div>
      {props.events.map((events, index) => (
        <div className={styles.card} key={events.id}>
          <h2>
            {index + 1} - {events.title}
          </h2>
          <p>
            {events.genre} - {events.date}
          </p>
          <button className="btn" onClick={() => props.handleclick(events.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
