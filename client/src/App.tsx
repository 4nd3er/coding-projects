import { Route, Routes } from "react-router-dom";
import Init from "./pages/init/Init";
import Home from "./pages/home";
import LogIn from "./pages/logIn/LogIn"
import SignUp from "./pages/signUp/SignUp";
import { Layout } from "./layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Init />} />
        <Route path="/home" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
