import { useState } from "react";
import "./Newmovieform.css";

export default function NewMovieForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  const restForm = () => {
    setTitle("");
    setDate("");
  };
  return (
    <form action="" className="new-event-form">
      {/* <label htmlFor=""></label>
      <input type="text" /> */}
      <label>
        <span>Movie Title</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label htmlFor="">
        <span>Movie Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button>Submit</button>
      <p>
        Title - {title}, Date - {date}
      </p>
      <p onClick={restForm}>Rest the Form</p>
    </form>
  );
}
