import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import search from "../assets/search.svg";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const onsubmithandler = (e) => {
    e.preventDefault();
    navigate(`/results/${text}`);
  };
  return (
    <div className="homepage_section flex flex-col">
      <div className="navbar_section flex justify-center items-center p-7">
        <Navbar />
      </div>
      <div className="search_section flex flex-col justify-center items-center">
        <div className="search_content mt-28">
          <div className="title text-6xl font-semibold text-white text-center">
            Discover over 2,000,000 <br /> free Stock Images
          </div>
        </div>
        <div className="input_section flex justify-center items-center w-[45%] mt-10 rounded-xl py-1 px-3 border-none bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div
            className="navigate_section text-white font-semibold py-3 cursor-pointer text-xl"
            onClick={() => navigate("/results")}
          >
            Navigate to Search
          </div>
        </div>
        <div className="trending_section flex justify-center items-center gap-1 mt-6 text-white text-sm py-1 px-3 rounded-lg">
          <span className="font-semibold">Trending:</span> Flowers, Dogs,
          Nature, ....
        </div>
      </div>
    </div>
  );
};

export default Homepage;
