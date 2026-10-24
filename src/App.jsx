import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievers from "./pages/Achievers";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/achievers" element={<Achievers/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;
