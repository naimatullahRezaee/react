import { useState } from "react";
import "./Newmovieform.css";

export default function NewMovieForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  const restForm = () => {
    setTitle("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 1000),
    };
    props.addMovie(event);

    restForm();
  };

  return (
    <form action="" className="new-event-form" onSubmit={handleSubmit}>
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
    </form>
  );
}
