import "./App.css";
import { useState } from "react";
function App() {
  // let name = "Rezaie";
  const [name, setName] = useState("Rezaie");

  const handleclick = () => {
    // name = "Niamatullah";
    setName("Niamatullah");
    console.log(name);
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleclick}>Change Name</button>
    </div>
  );
}

export default App;
