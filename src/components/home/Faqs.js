"use client";
import Image from "next/image";

const Faqs = ({ en, faqs, title }) => {
  const handleFaq = (selectFaqIndex) => {
    document.querySelectorAll(".faq").forEach((faq, index) => {
      if (selectFaqIndex == index) {
        faq.classList.toggle("active");
      } else {
        faq.classList.remove("active");
      }
    });
  };
  return (
    <section className="py-[80px] md:py-[9.29166666667vw]">
      <h2 data-aos="fade-up" className="heading2 text-center">
        {title}
      </h2>
      <div className="w-[90vw] md:w-[70vw] mx-[auto] mt-[24px] md:mt-[3vw]">
        {faqs.map((faq, index) => (
          <div key={index} data-aos="fade-up">
            <div
              className={`w-full py-[16px] md:py-[2vw] border-b ${
                index == 0 && " border-t a"
              } border-[#666464] faq overflow-hidden transition-all duration-[800ms]`}
            >
              <div
                onClick={() => handleFaq(index)}
                className={`${
                  en
                    ? "gap-x-[6px] md:gap-x-[0.6vw]"
                    : "gap-x-[4px] md:gap-x-[0.2vw]"
                } flex items-center  cursor-pointer`}
              >
                <div className="relative min-w-[12px] w-[12px] h-[12px] md:w-[1.25vw] md:min-w-[1.25vw] md:h-[1.25vw]">
                  <Image
                    src="/images/icons/faqChevron.svg"
                    fill
                    alt="chevron"
                  />
                </div>
                <h4 className="text-[16px] leading-[25px] md:text-[1.66666666667vw] md:leading-[3vw] font-[700] line-clamp-1">
                  {faq?.question_text}
                </h4>
              </div>
              <div
                className={`para24 dropdown-item mt-[12px] md:mt-[1.5vw] flex flex-col gap-y-[14px]  md:gap-y-[0.8vw] `}
                dangerouslySetInnerHTML={{ __html: faq.answer_text }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
