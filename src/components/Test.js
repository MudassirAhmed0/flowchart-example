"use client";
import React, { useEffect, useRef, useState } from "react";
import FsLightbox from "fslightbox-react";
import Lottie from "react-lottie-player";
import json from "../../public/json/good.json";
import noJson from "../../public/json/No.json";
import yesJson from "../../public/json/yes.json";
import axios from "axios";
import TestTimeline from "./TestTimeline";

function Test() {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  // const [tweet, setTweet] = useState(null);
  // const [show, setShow] = useState(false);
  // const twitterTimeline = useRef(null);
  // // Send a GET request
  // useEffect(() => {
  //   const width = (window.innerWidth / 100) * 22.0833333333;
  //   Number.parseFloat();
  //   const url = `https://publish.twitter.com/oembed?url=https://twitter.com/SaudiBanks&maxwidth=${Math.round(
  //     width
  //   )}`;
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       // Handle the response here
  //       setTweet(response.data.html);
  //     })
  //     .catch((error) => {
  //       // Handle errors here
  //       console.error("Error:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   // Create a script element
  //   const script = document.createElement("script");

  //   // Set the script's async attribute
  //   script.async = true;

  //   // Set the script's source and charset
  //   script.src = "https://platform.twitter.com/widgets.js";
  //   script.charset = "utf-8";

  //   // Append the script to the document's head
  //   document.head.appendChild(script);
  //   setShow(true);
  //   // Clean up the script when the component unmounts
  //   return () => {
  //     document.head.removeChild(script);
  //     setShow(false);
  //   };
  // }, []);
  // useEffect(() => {
  //   if (twitterTimeline.current) {
  //     console.log(twitterTimeline.current);
  //     setTimeout(() => {
  //       console.log(
  //         twitterTimeline.current.querySelector("iframe").contentWindow.document
  //       );
  //     }, 5000);
  //   }
  // });

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Open the lightbox.</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://i.imgur.com/fsyrScY.jpg",
          "https://www.youtube.com/watch?v=xshEZzpS4CQ",
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        ]}
        // key={productIndex}
      />
      <Lottie
        loop
        animationData={json}
        play
        style={{ width: 150, height: 150 }}
      />
      <Lottie
        loop
        animationData={noJson}
        play
        style={{ width: 150, height: 150 }}
      />
      <Lottie
        loop
        animationData={yesJson}
        play
        style={{ width: 150, height: 150 }}
      />
      {/* {show && tweet && (
        <div
          ref={twitterTimeline}
          dangerouslySetInnerHTML={{ __html: tweet }}
        ></div>
      )} */}
      <TestTimeline />
    </>
  );
}

export default Test;
