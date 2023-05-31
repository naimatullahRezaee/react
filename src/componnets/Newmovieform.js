import { useState } from "react";
import "./Newmovieform.css";

export default function NewMovieForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("action");
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  const restForm = () => {
    setTitle("");
    setDate("");
    setGenre("action");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      genre: genre,
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
      <label htmlFor="">
        <span>Movie</span>
        <select name="" id="" onChange={(e) => setGenre(e.target.value)}>
          <option value="herro">Herro</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="thriller">Thriller</option>
          <option value="adventure">Adventure</option>
          <option value="romantic">Romantic</option>
          <option value="fantasy">Fantasy</option>
          <option value="western">Western</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
