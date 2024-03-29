import React from "react";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h3 className="text-2xl text-teal-800 font-bold">KEstate</h3>
          <p >Find your dream home</p>
        </Link>
        {/* <div className="flex items-center gap-6">
          <Link className="hover:text-teal-900 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
