import { Route, Routes } from "react-router-dom";
import Init from "./pages/init/Init"
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <div className="w-screen h-screen mx-auto p-0 m-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
