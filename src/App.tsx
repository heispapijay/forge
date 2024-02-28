import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { Carousel } from "./components/Carousel/Carousel";
import { Navbar } from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
    </>
  );
}

export default App;
