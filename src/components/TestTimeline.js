import React, { useEffect, useState } from "react";
import axios from "axios";

const TestTimeline = () => {
  const [tweets, setTweets] = useState([]);

  const userId = 1234567890; // The ID of the user whose tweets you want to display

  useEffect(() => {
    async function fetchTweets() {
      //   const tweets = await getTweets(userId);
      //   setTweets(tweets);
      try {
        const response = await axios.get(
          `https://api.twitter.com/2/users/${userId}/tweets`,
          {
            headers: {
              Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAFG1qAEAAAAAhJUduTxiUzJzG3U4AHvqCHh1lxk%3D976y0lxRAAVEk0JEl2AZmiDTxe9U0D7WRbspkutkVwfOb1Gdis`,
            },
          }
        );
      } catch (error) {
        // console.log(error);
      }
    }

    fetchTweets();
  }, [userId]);

  return (
    <ul>
      {/* {tweets.map((tweet) => (
        <li key={tweet.id}>{tweet.text}</li>
      ))} */}
    </ul>
  );
};

export default TestTimeline;
