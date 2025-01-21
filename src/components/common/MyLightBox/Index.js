"use client";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

const MyLightBox = ({
  isAr,
  sources,
  autoPlay,
  slideNo,
  showNow,
  setShowNow,
  alt,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const main = useRef(null);
  const [players, setPlayers] = useState([]);
  const container = useRef(null);
  const totalSlides = sources.length - 1;
  useEffect(() => {
    setCurrentSlide(slideNo);
    handleSlides(slideNo);
    console.log(slideNo);
  }, [slideNo]);

  const stopPlayingVideos = () => {
    document.querySelectorAll(".lightboxSlideVideo").forEach((slide) => {
      slide.querySelector("video").pause();
    });
  };

  const handleClose = () => {
    main.current.classList.add("opacity-0");
    main.current.classList.add("pointer-events-none");
    stopPlayingVideos();
    setShowNow(false);
    stopYoutubeVideos();
  };

  const playCurrentVideo = (slideNumber) => {
    document.querySelectorAll(".lightboxSlide").forEach((slide, index) => {
      if (
        index == slideNumber &&
        slide.classList.contains("lightboxSlideVideo")
      ) {
        slide.querySelector("video").play();
      }
    });
  };
  const stopYoutubeVideos = () => {
    players?.forEach((player) => {
      if (player?.getPlayerState() === 1) {
        // Call the pauseVideo() method on the player.
        player?.pauseVideo();
      }
    });
  };
  const handleSlides = (slideNumber) => {
    const newTranslate = isAr ? slideNumber * 100 : "-" + slideNumber * 100;
    container.current.style.transform = `translateX(${newTranslate}vw)`;
    stopPlayingVideos();
    playCurrentVideo(slideNumber);
  };

  const handlePrevSlide = () => {
    const newSlide = currentSlide != 0 ? currentSlide - 1 : currentSlide;
    setCurrentSlide(newSlide);
    handleSlides(newSlide);
    stopYoutubeVideos();
  };
  const handleNextSlide = () => {
    const newSlide =
      currentSlide != totalSlides ? currentSlide + 1 : currentSlide;
    setCurrentSlide(newSlide);
    handleSlides(newSlide);
    stopYoutubeVideos();
  };
  return (
    <div
      ref={main}
      className="w-full h-full top-0 left-0 fixed lightboxContainer opacity-0 transition-all duration-500 z-[555]"
    >
      <div className="lightboxNavigation w-full h-full top-0 left-0">
        <div
          onClick={handleClose}
          className="lightboxNavigationTop cursor-pointer z-[5] absolute  w-[32px] h-[32px] p-[8px]  md:w-[5vw] md:h-[5vw] bg-[#232323a6] md:p-[1vw]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {sources.length > 1 && (
          <div className="lightboxSlideNavigation">
            <button
              onClick={handleNextSlide}
              className={`lightboxNextButton z-[5] cursor-pointer absolute top-[50%] transform translate-y-[-50%] bg-[#232323a6] p-[1vw] md:p-[1vw] w-[32px] h-[32px] p-[8px]  md:w-[5vw] md:h-[5vw] ${
                currentSlide != totalSlides
                  ? ""
                  : "opacity-[0.5] pointer-events-none"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"100%"}
                height={"100%"}
                viewBox="0 0 25 25"
              >
                <path
                  style={{ fill: "#fff" }}
                  d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                  data-name="Left"
                />
              </svg>
            </button>
            <button
              onClick={handlePrevSlide}
              className={`lightboxPrevButton z-[5] cursor-pointer absolute top-[50%] transform translate-y-[-50%] bg-[#232323a6] p-[1vw] md:p-[1vw] w-[32px] h-[32px] p-[8px]  md:w-[5vw] md:h-[5vw] ${
                currentSlide != 0 ? "" : "opacity-[0.5] pointer-events-none"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"100%"}
                height={"100%"}
                viewBox="0 0 25 25"
              >
                <path
                  style={{ fill: "#fff" }}
                  d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                  data-name="Left"
                />
              </svg>
            </button>
          </div>
        )}
        <div
          ref={container}
          className="lightboxSlidesContainer transition-all duration-[800ms] z-[4] absolute w-full h-full flex"
        >
          {showNow &&
            sources.map((source, index) => {
              let isVideo = source.type == "video";
              const isYoutube = source.type == "youtube";
              return (
                <div
                  key={index}
                  className={`lightboxSlide ${
                    isVideo ? "lightboxSlideVideo" : ""
                  } relative min-w-[100vw] w-[100vw] h-full flex items-center justify-center`}
                >
                  <span
                    className="w-full h-full top-0 left-0 absolute"
                    onClick={handleClose}
                  ></span>
                  {isVideo ? (
                    <video
                      key={index}
                      src={source.source}
                      className="w-full object-cover   relative z-[2]  max-w-[90vw] md:max-w-[80vw]"
                      controls
                      autoPlay={index == currentSlide && autoPlay}
                      loop
                    ></video>
                  ) : isYoutube ? (
                    // <iframe
                    //   src={source}
                    //   frameborder="0"
                    //   className="w-full object-cover  h-[400px] md:h-[40vw] relative z-[2]  max-w-[90vw] md:max-w-[80vw]"
                    // ></iframe>
                    <YouTube
                      videoId={source.source}
                      onReady={(el) => setPlayers([...players, el.target])}
                      className="w-full object-cover  h-[400px] md:h-[40vw] relative z-[2]  max-w-[90vw] md:max-w-[80vw]"
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                          // autoplay: 1,
                        },
                      }}
                    />
                  ) : (
                    <img
                      src={source.source}
                      alt={alt ? alt : "lightboxSlide"}
                      className="w-full object-cover relative z-[2]  max-w-[90vw] md:max-w-[80vw]"
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyLightBox;
