// import Home from "./pages/Home";

import { useEffect, useState } from "react";
import Btn from "./ui/Btn";
import Nav from "./ui/Nav";

function App() {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${name1}&appid=cc7a91945c8c394886a52a1b65e593fb&units=metric`;

  const weather = useEffect(
    () =>
      async function () {
        try {
          const res = await fetch(API);
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    [API]
  );

  function handleClick() {
    setName1(name);
    weather();
    setName("");
  }

  return (
    <div>
      <Nav />
      <h1>Enter The city: </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button>
    </div>
  );
}

export default App;
