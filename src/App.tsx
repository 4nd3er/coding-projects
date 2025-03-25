import { Route, Routes } from "react-router-dom";
import Init from "./pages/init/Init";
import LogIn from "./pages/logIn/login";
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
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
