import "./App.css";
import React from "react";
import { useState } from "react";
import Modal from "./componnets/Modal";
import Eventslist from "./componnets/eventslist";
import NewMovieForm from "./componnets/Newmovieform";
function App() {
  // let name = "Rezaie";
  const [name, setName] = useState("Rezaie");
  const [events, setEvents] = useState([
    { title: "Greeting is good", id: 1 },
    { title: "hi how are you", id: 2 },
    { title: "I am fine and you", id: 3 },
    { title: "Where is he from ", id: 4 },
    { title: "He is from Afghanistan", id: 5 },
    { title: "Have a good day", id: 6 },
  ]);

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
        <Modal close={handleClose}>
          <NewMovieForm />
        </Modal>
      )}
      <button onClick={handleOpen}>Add Movie</button>
    </div>
  );
}

export default App;
