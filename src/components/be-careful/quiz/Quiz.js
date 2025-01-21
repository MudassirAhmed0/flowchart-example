"use client";
import { useEffect, useRef, useState } from "react";
import QuizCarousel from "./QuizCarousel";
import QuizForm from "./QuizForm";
import getPublicIP from "@/lib/data-hooks/getPublicIp";
import ThankYou from "./ThankYou";

const Quiz = ({ en, title, data, global }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [formStates, setFormStates] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [socialName, setSocialName] = useState();
  const sectionRef = useRef(null);

  // Handle IP-based submission check
  useEffect(() => {
    const checkSubmission = async () => {
      try {
        const ip = await getPublicIP();
        const submittedIP = localStorage.getItem("submitIP");

        if (submittedIP && ip && submittedIP === ip) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error("Error checking submission status:", error);
        setIsSubmitted(false);
      }
    };

    checkSubmission();

    const handleStorageChange = (e) => {
      if (e.key === "submitIP") {
        checkSubmission();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Handle hash-based navigation and scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#quiz" && sectionRef.current) {
        setTimeout(() => {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Handle quiz show scrolling
  useEffect(() => {
    if (showQuiz && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showQuiz]);

  // Handle dropdown close
  useEffect(() => {
    const handleDropdownClose = (e) => {
      if (!e.target.classList.contains("formSubDropdownContainer")) {
        document
          .querySelectorAll(".formDropdownContainer")
          .forEach((dropdown) => {
            dropdown.classList.remove("show");
          });
      }
    };

    document.addEventListener("click", handleDropdownClose);
    return () => {
      document.removeEventListener("click", handleDropdownClose);
    };
  }, []);

  useEffect(() => {
    const name = localStorage.getItem("socialName");
    if (formStates.socialName) {
      return;
    } else {
      if (name) {
        setSocialName(name);
      }
    }
  }, [formStates]);

  return (
    <section id="quiz" ref={sectionRef} className="py-[80px] md:py-[5.375vw]">
      {isSubmitted ? (
        <ThankYou
          en={en}
          shareTitle={global?.globel?.response_title}
          shareMessage={global?.globel?.response_share_message}
          msgHead={global?.globel?.response_title}
          socialName={formStates?.socialName || socialName}
          msgDes={global?.globel?.response_message}
          onShare={() => {}}
        />
      ) : (
        <>
          <h2
            data-aos="fade-up"
            className="heading2 text-[#000] text-center mb-[32px] md:mb-[3.75vw] capitalize"
          >
            {title}
          </h2>
          {showQuiz ? (
            <QuizCarousel
              en={en}
              formStates={formStates}
              setShowQuiz={setShowQuiz}
              setFormStates={setFormStates}
              data={data}
              global={global}
              setIsSubmitted={setIsSubmitted}
            />
          ) : (
            <QuizForm
              setQuizShow={setShowQuiz}
              en={en}
              setFormStates={setFormStates}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Quiz;
