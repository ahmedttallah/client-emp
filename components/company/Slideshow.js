import React from "react";
import Image from "next/image";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "/img/logo.png",
  "/img/towebia_logo.png",
  "/img/notsey_logo.png",
];

const Slideshow = () => {
  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: "10px", marginRight: "-30px", cursor: "pointer", visibility: "hidden"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "10px", marginLeft: "-30px", cursor: "pointer", visibility: "hidden" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <div className="m-10">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <Image
              className="w-3/4 object-cover rounded-lg shadow-xl"
              src={each}
              width={128}
              height={128}
              alt="logos"
            />
          </div>
        ))}
      </Zoom>
      {/* <button
        title="Add more logos"
        className="bg-gray-300 hover:bg-gray-400 font-bold p-1 rounded inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button> */}
    </div>
  );
};

export default Slideshow;
