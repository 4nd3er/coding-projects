import React from "react";
import descarga from "/descarga.jpg";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white py-4 px-10 w-full border border-b-black">
      <ul className="flex justify-between items-center text-black">
        <div className="flex items-center">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              {" "}
              <img
                src={descarga}
                className=" w-10 rounded-full justify-center items-center"
              ></img>{" "}
            </Link>
          </li>
          <h2 className="ml-4 font-bold from-neutral-600 font-20 ">
            Coding Web
          </h2>
        </div>

        <div className="flex gap-4 ">
          <Button color="default" variant="ghost">
            <Link to="/LogIn" className=" text-black">
              Log In
            </Link>
          </Button>
          <Button color="primary" variant="ghost">
            <Link
              to="/contact"
              className=" justify-items-end pl-4 pr-4 pt-1 pb-1 rounded-sm text-center"
            >
              Sign Up
            </Link>
          </Button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
