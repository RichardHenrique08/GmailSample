import AsideBar from "./Components/Asidebar/AsideBar";
import Navbar from "./Components/NavBar/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <AsideBar />
        </div>
      </div>
    </>
  );
}
