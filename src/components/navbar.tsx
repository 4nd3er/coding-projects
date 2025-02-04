import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 py-4">
      <ul className="flex justify-center space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
