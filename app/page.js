import ByItems from "./components/ByItems/byitems";
import Mainpage from "./components/mainpage/mainpage";
import Navbar from "./components/navbar/navbar";
import TopProducts from "./components/Products/TopProducts";
import Timer from "./components/Timer/timer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Mainpage />
      <ByItems />
      <TopProducts />
      <Timer />

    </div>
  );
}
