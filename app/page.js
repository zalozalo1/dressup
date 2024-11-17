import ByItems from "./components/ByItems/byitems";
import Mainpage from "./components/mainpage/mainpage";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <ByItems />

    </div>
  );
}
