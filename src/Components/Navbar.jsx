import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav_bar flex justify-between items-center w-[80%] py-3 px-5 rounded-xl">
      <div className="hompage text-white font-semibold">Homepage</div>
      <div className="button flex gap-3 items-center">
        <div className="login text-white font-semibold">Log in</div>
        <div className="create border rounded-lg py-1 px-4 text-white border-slate-100 font-semibold">
          Create an account
        </div>
      </div>
    </div>
  );
};

export default Navbar;
