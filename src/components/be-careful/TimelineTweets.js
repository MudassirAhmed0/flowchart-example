"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";

const TimelineTweets = () => {
  const [tweet, setTweet] = useState(null);
  const [show, setShow] = useState(false);
  const twitterTimeline = useRef(null);
  // Send a GET request
  useEffect(() => {
    const width = (window.innerWidth / 100) * 22.0833333333;
    Number.parseFloat();
    // const url = `https://publish.twitter.com/oembed?url=https://twitter.com/SaudiBanks&maxwidth=${Math.round(
    //   width
    // )}`;
    const url = `https://saudi-banks-frontend.vercel.app/api/twitter`;
    axios
      .get(url)
      .then((response) => {
        // Handle the response here
        setTweet(response.data.html);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set the script's async attribute
    script.async = true;

    // Set the script's source and charset
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";

    // Append the script to the document's head
    document.head.appendChild(script);
    setShow(true);
    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
      setShow(false);
    };
  }, []);
  //   useEffect(() => {
  //     if (twitterTimeline.current) {
  //       console.log(twitterTimeline.current);
  //       setTimeout(() => {
  //         console.log(
  //           twitterTimeline.current.querySelector("iframe").contentWindow.document
  //         );
  //       }, 5000);
  //     }
  //   });
  return (
    <div className="w-[90vw] md:w-[75vw] mx-auto   md:py-[9.375vw] py-[80px]">
      {show && tweet && (
        <div
          ref={twitterTimeline}
          dangerouslySetInnerHTML={{ __html: tweet }}
        ></div>
      )}
    </div>
  );
};

export default TimelineTweets;
