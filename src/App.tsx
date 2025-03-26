import { Route, Routes } from "react-router-dom";
import Init from "./pages/init/Init";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import  LogIn  from "./pages/logIn/LogIn"
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="w-screen h-screen mx-auto p-0 m-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Init />} />
        <Route path="/home" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
