import { useEffect, useState } from "react";
import "./Resultspage.css";
import Navbar from "../Components/Navbar";
import search from "../assets/search.svg";
import axios from "axios";
import ImageModel from "../Modals/ImageModel";
import { useParams } from "react-router-dom";
const Resultspage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState();
  var key = "11090067-ffdb02bcc83ad8fdaa213312f";
  var first = [];
  let second = [];
  let third = [];

  var text = useParams();
  // if (text) setSearchText(text);

  searchResults?.length &&
    searchResults.forEach((i) => {
      if (searchResults.indexOf(i) % 3 === 0) {
        first = [...first, i];
      } else if (searchResults.indexOf(i) % 3 === 1) {
        second.push(i);
      } else {
        third.push(i);
      }
    });

  const recommendTags = (first) => {
    let tagData = [];

    first?.forEach((item) => {
      let tag = item.tags.split(", ");
      tagData.push(tag);
    });
    let tagData1 = tagData.flat();
    let finaltags = tagData1.filter(
      (value, index) => tagData1.indexOf(value) === index
    );
    return finaltags;
  };
  var RecommendTags = first ? recommendTags(first) : [];
  //   console.log(first, second, third);
  var apiurl = (key, searchText) => {
    return `https://pixabay.com/api/?key=${key}&q=${searchText
      .trim()
      .split(" ")
      .join("+")}&image_type=photo&per_page=33`;
  };
  const fetchData = async () => {
    await axios
      .get(apiurl(key, searchText))
      .then((response) => setSearchResults(response.data.hits));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onsubmithandler = (e) => {
    e.preventDefault();
    fetchData();
  };
  console.log(RecommendTags);
  return (
    <div className="results_section flex flex-col items-center justify-center">
      <div className="navbar_section flex justify-center items-center p-7 w-full">
        <Navbar />
      </div>
      <div className="input_section flex justify-between items-center w-[45%] mt-10 rounded-xl py-1 px-3 focus-within:border-white">
        <img src={search} alt="" className="w-10 p-1" />
        <form action="" className="w-[85%]" onSubmit={onsubmithandler}>
          <input
            type="text"
            placeholder="Search.."
            className="py-1 px-4 w-full bg-transparent outline-none text-white border-l-slate-300 border-l-2 "
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>

        <div
          className="go border-2 rounded-lg p-1 flex justify-center items-center text-white"
          onClick={onsubmithandler}
        >
          GO!
        </div>
      </div>
      <div className="results_title my-10 text-4xl font-semibold text-white">
        Resuts:{searchText}
      </div>
      <div className="content_view_section w-full ">
        <div className="tags_section p-3 flex gap-2 items-center bg-orange-50 overflow-x-scroll ">
          {RecommendTags?.map((tag, idx) => (
            <div
              key={idx}
              className="py-1 px-3 border rounded-sm border-black text-sm text-ellipsis w-full text-nowrap"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="images w-full bg-white flex  gap-2 justify-around p-3 ">
          <div className="column1 w-[33%] gap-3">
            {first?.map((i, index) => (
              <div
                key={index}
                className="individual_image flex flex-col gap-1  rounded-lg object-cover"
              >
                <div className="image relative mb-2 cursor-pointer ">
                  <img src={i.largeImageURL} alt="" className=" rounded-lg" />
                  <div className="view absolute text-black top-4 right-4 bg-white rounded-full opacity-70 ">
                    <ImageModel imag={i} imagename={searchText} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="column2 w-[33%] gap-3">
            {second?.map((i, index) => (
              <div
                key={index}
                className="individual_image flex flex-col gap-1  rounded-lg object-cover "
              >
                <div className="image relative mb-2  cursor-pointer">
                  <img src={i.largeImageURL} alt="" className=" rounded-lg" />
                  <div className="view absolute text-black top-4 right-4 bg-white rounded-full opacity-70 ">
                    <ImageModel imag={i} />
                  </div>
                </div>
              </div>
            ))}
          </div>{" "}
          <div className="column3 w-[33%] gap-3">
            {third?.map((i, index) => (
              <div
                key={index}
                className="individual_image flex flex-col gap-3 rounded-lg object-cover "
              >
                <div className="image relative mb-2 cursor-pointer">
                  <img src={i.largeImageURL} alt="" className=" rounded-lg" />
                  <div className="view absolute text-black top-4 right-4 bg-white rounded-full opacity-70 ">
                    <ImageModel imag={i} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultspage;
