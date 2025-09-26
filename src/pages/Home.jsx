import Data from "../data/Data";
import Btn from "../ui/Btn";
import Nav from "../ui/Nav";
import Search from "../ui/Search";

function Home() {
  return (
    <div>
      <Nav />
      <h1>Enter The city: </h1>
      <Search />
      <Data />
    </div>
  );
}

export default Home;
