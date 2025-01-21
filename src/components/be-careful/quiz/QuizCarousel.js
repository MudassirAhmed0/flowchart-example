"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import QuizButtons from "./QuizButtons";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import QuizRadio from "./QuizRadio";
import QuizSlide from "./QuizSlide";
import { useState } from "react";
import good from "../../../../public/json/good.json";
import no from "../../../../public/json/No.json";
import yes from "../../../../public/json/yes.json";
import Status from "./Status";
import postQuiz from "@/lib/data-hooks/postQuiz";
import CorrectNote from "./correctNote";
import { useRouter } from "next/navigation";

const QuizCarousel = ({
  en,
  data,
  formStates,
  setFormStates,
  setShowQuiz,
  global,
  setIsSubmitted,
}) => {
  const [swiperInstance, setSwiperInstance] = useState({});
  const [showSatus, setShowStatus] = useState(false);
  const [showCorrectNote, setShowCorrectNote] = useState(false);
  const [statusContent, setStatusContent] = useState({});
  const [marks, setMarks] = useState({});
  const [quizStatus, setQuizStatus] = useState(null);
  const [correctiveNote, setCorrectiveNote] = useState(null);
  const [quiz, setQuiz] = useState([]);
  // console.log(formStates);

  const statusData = [
    {
      color: "#1F9E37",
      msgHead: en ? "Well done, you're aware!" : "احسنت انت واعي!",
      msgDes: en
        ? "Participate in raising awareness among others to protect society from financial fraud."
        : "شارك في توعية غيرك لحماية المجتمع من الاحتيال المالي",
      json: yes,
    },
    {
      color: "#871A1D",
      msgHead: en ? "Good!" : "جيد!",
      msgDes: en
        ? "We advise you to pay more attention to your financial and personal information!"
        : "ننصحك بالاهتمام بمعلوماتك المالية والشخصية أكثر!",
      json: good,
    },
    {
      color: "#881A18",
      msgHead: en ? "You are in danger!" : "انت في دائرة الخطر!",
      msgDes: en
        ? "Be careful and do not share your information with anyone."
        : "خلك حريص ولا تشارك معلوماتك مع اي شخص",
      json: no,
    },
  ];

  const submitForm = async (updatedQuiz, result) => {
    postQuiz(updatedQuiz, result, formStates);
  };

  const translateToArabic = (answer) => {
    switch (answer) {
      case "Yes":
        return "نعم";
      case "No":
        return "لا";
      case "Sometimes":
        return "احياناً";
      default:
        return answer;
    }
  };

  const handleCheckChange = (id, obtainedMarks, answer, question, index) => {
    // console.log(data);
    const fullQuesData = data.find((e) => e.question == question);

    const newMarks = {
      ...marks,
      [id]: obtainedMarks,
    };
    const newEntry = {
      type: "quiz",
      answer,
      question,
    };

    const existingIndex = quiz.findIndex((entry) => entry.index === index);
    let uQ = [];
    if (existingIndex !== -1) {
      // Replace the existing entry at the same index
      const updatedQuiz = [...quiz];
      updatedQuiz[existingIndex] = newEntry;
      setQuiz(updatedQuiz);
      uQ = [...updatedQuiz];
    } else {
      // Add the new entry to the quiz array
      setQuiz([...quiz, { ...newEntry, index }]);
      uQ = [...quiz, { ...newEntry, index }];
    }

    setMarks(newMarks);

    setTimeout(() => {
      if (swiperInstance) {
        if (swiperInstance.slides.length - 1 == swiperInstance.activeIndex) {
          let finalMarks = 0;
          let stts;
          Object.keys(newMarks).forEach((ent) => {
            finalMarks += newMarks[ent];
          });
          let arrayIndexOfStatus;
          finalMarks < 13 ? 0 : finalMarks < 25 ? 1 : 2;
          if (finalMarks < 12) {
            arrayIndexOfStatus = 0;
            stts = "Good";
            setQuizStatus();
          } else if (finalMarks < 22) {
            arrayIndexOfStatus = 1;
            stts = "Okay";
            setQuizStatus(stts);
          } else {
            arrayIndexOfStatus = 2;
            stts = "Danger";
            setQuizStatus(stts);
          }
          setShowStatus(true);
          setStatusContent({ ...statusData[arrayIndexOfStatus] });
          submitForm(uQ, stts);
        } else {
          if (!en) {
            if (
              translateToArabic(fullQuesData.correct_answer.value) !== answer
            ) {
              setCorrectiveNote(fullQuesData.corrective_note);
              if (fullQuesData.show_corrective_note) {
                setShowCorrectNote(true);
              }
            }
          } else {
            if (fullQuesData.correct_answer.value !== answer) {
              setCorrectiveNote(fullQuesData.corrective_note);
              if (fullQuesData.show_corrective_note) {
                setShowCorrectNote(true);
              }
            }
          }

          swiperInstance.slideNext();
        }
      }
    }, 500);
  };

  const handleReset = () => {
    document.querySelectorAll(".quizCheckbox").forEach((radio) => {
      radio.checked = false;
    });
    setShowStatus(false);
    setShowCorrectNote(false);
    setStatusContent({});
    setIsSubmitted(true);
    setMarks({});
    swiperInstance.slideTo(0);
    setQuiz([]);
    setShowQuiz(false);
    setFormStates({});
  };
  const handleoneQuestionReset = () => {
    setShowCorrectNote(false);
    // swiperInstance.slideTo(0);
  };
  // console.log(global?.globel?.response_share_message);

  return (
    <>
      <Swiper
        onSwiper={(s) => setSwiperInstance(s)}
        // navigation={true}
        modules={[Pagination]}
        simulateTouch={false}
        draggable={false}
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
        allowTouchMove={false}
        pagination={{
          type: "fraction",
        }}
        className="swiper quizSwiper  md:w-[85.4166666667vw] "
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="min-h-fit  px-[10vw]">
            <QuizSlide
              handleCheckChange={handleCheckChange}
              index={index}
              en={en}
              question={item?.question}
              radioButtons={item?.show_radio_buttons}
              yes_label={item?.yes_label}
              sometimes_label={item?.maybe_label}
              no_label={item?.no_label}
            />
          </SwiperSlide>
        ))}

        {/* <QuizButtons /> */}
      </Swiper>

      <CorrectNote
        msgDes={correctiveNote}
        json={no}
        msgHead={en ? "Please Note!" : "يرجى الملاحظة!"}
        color={"#881A18"}
        showStatus={showCorrectNote}
        handleReset={handleoneQuestionReset}
        setShowCorrectNote={setShowCorrectNote}
      />

      <Status
        msgDes={global?.globel?.response_message}
        json={yes}
        socialName={formStates?.socialName}
        msgHead={global?.globel?.response_title}
        shareMessage={global?.globel?.response_share_message}
        color={"#1F9E37"}
        showStatus={showSatus}
        handleReset={handleReset}
        en={en}
      />
    </>
  );
};

export default QuizCarousel;
