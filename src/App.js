import "./App.css";
import React from "react";
import { useState } from "react";
import Modal from "./componnets/Modal";
import Eventslist from "./componnets/eventslist";
import NewMovieForm from "./componnets/Newmovieform";
function App() {
  // let name = "Rezaie";
  const [name, setName] = useState("Rezaie");
  const [events, setEvents] = useState([]);

  const [showEvents, setShowEvents] = useState(true);
  const [closemodal, setCloseModal] = useState(false);
  const handleclick = (id) => {
    // // name = "Niamatullah";
    // setName("Niamatullah");
    // console.log(name);
    setEvents((preEvents) => {
      return preEvents.filter((events) => {
        return id !== events.id;
      });
    });
  };

  const addMovie = (event) => {
    setEvents((preEvents) => {
      return [...preEvents, event];
    });
    setCloseModal(false);
  };
  const handleClose = () => {
    setCloseModal(false);
  };

  const handleOpen = () => {
    setCloseModal(true);
  };
  return (
    <div className="App">
      {/* <h1>{name}</h1>
      <button onClick={handleclick}>Change Name</button> */}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show</button>
        </div>
      )}
      {showEvents && <Eventslist events={events} handleclick={handleclick} />}
      {/* {showEvents && <eventslist events={events} handleclick={handleclick} />} */}

      {closemodal && (
        <Modal>
          <NewMovieForm addMovie={addMovie} />
        </Modal>
      )}
      <button onClick={handleOpen}>Add Movie</button>
    </div>
  );
}

export default App;
