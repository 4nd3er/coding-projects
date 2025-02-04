import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import CharacterDetail from "./pages/character-detail";

function App() {
  return (
    <div className="w-screen h-screen mx-auto py-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="character-detail/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
