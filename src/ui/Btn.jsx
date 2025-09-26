function Btn({ name, handleWeather }) {
  return (
    <div>
      <button onClick={handleWeather}>{name}</button>
    </div>
  );
}

export default Btn;
