import React from 'react';
import descarga from '/descarga.jpg'
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white py-4 md:px-10 px-5 w-full border border-b-black">
      <ul className="flex justify-between items-center text-black">
        <div className='flex items-center'>
        <li>
          <Link to="/" className="hover:text-yellow-300"> <img src={descarga} className=' w-10 rounded-full justify-center items-center'></img> </Link>
        </li>
        <h2 className='ml-4 font-bold from-neutral-600 font-20 ' >Coding Web</h2>
        </div>
        
        <div className='flex gap-4'>
        <li>
          <Link to="/about" className=" md:text-base text-sm text-black  underline">Log In</Link>
        </li>
        <li>
          <Link to="/contact" className="bg-black md:text-base text-sm text-white justify-items-end pl-4 pr-4 pt-1 pb-1 rounded-sm text-center">Sign Up</Link>
        </li>
        </div>
        
      </ul>
    </nav>
  );
};

export default NavBar;
