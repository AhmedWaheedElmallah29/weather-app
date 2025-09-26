import { useState } from "react";
import Btn from "../ui/Btn";

function Data() {
  const [name, setName] = useState("");
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=cc7a91945c8c394886a52a1b65e593fb&units=metric`;
  function handleName() {
    setName("");
  }
  async function handleWeather() {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    handleName();
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Btn name="Search" handleWeather={handleWeather} />
    </div>
  );
}

export default Data;
