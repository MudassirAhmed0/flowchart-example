"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons3 from "../common/SwiperButtons3";
import { Autoplay } from "swiper/modules";

const AvoidFraud = ({ en, title, desc, cards }) => {
  const [swiper, setSwiper] = useState(null);
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 768 ? (window.innerWidth / 100) * 1.66666666667 : 24
    );
  }, []);
  const AvoidFraudCards = [
    {
      img: "/images/be-careful/avoid-fraud/1.jpg",
      text: en
        ? "Check the links of official websites"
        : "التأكد من روابط المواقع الرسمية",
    },
    {
      img: "/images/be-careful/avoid-fraud/2.jpg",
      text: en ? "Scan websites thoroughly" : "تفحّص المواقع الإلكترونية بدقّة",
    },
    {
      img: "/images/be-careful/avoid-fraud/3.jpg",
      text: en
        ? "Do not transfer money to unknown sources"
        : "عدم تحويل مبالغ مالية لمصادر مجهولة",
    },
    {
      img: "/images/be-careful/avoid-fraud/4.jpg",
      text: en ? "Determine the caller's identity" : "التأكد من هوية المتصل",
    },
    {
      img: "/images/be-careful/avoid-fraud/5.jpg",
      text: en
        ? "Personal information should be kept private and not shared on social media"
        : "الاحتفاظ بالمعلومات الشخصية وعدم مشاركتها في مواقع التواصل الإجتماعي",
    },
    {
      img: "/images/be-careful/avoid-fraud/6.jpg",
      text: en
        ? "Use of antivirus and espionage software"
        : "استخدام برامج مكافحة الفيروسات والتجسس",
    },
    {
      img: "/images/be-careful/avoid-fraud/7.jpg",
      text: en
        ? "Update the PIN code for devices and bank cards to contain letters, numbers, and symbols"
        : "تحديث الرمز السري للأجهزة والبطاقات المصرفية لتحتوي على حروف وأرقام ورموز",
    },
    {
      img: "/images/be-careful/avoid-fraud/8.jpg",
      text: en
        ? "Do not share anonymous sites via mobile"
        : "عدم نشر المواقع مجهولة المصدر عبر الهاتف",
    },
    {
      img: "/images/be-careful/avoid-fraud/9.jpg",
      text: en
        ? "Keep track of your banking activities"
        : "احرص على متابعة العمليات البنكية الخاصة بك",
    },
    // {
    //   img: "/images/be-careful/avoid-fraud/2.png",
    //   text: en
    //     ? "Use of antivirus and espionage software"
    //     : `استخدام برامج مكافحة الفيروسات والتجسس
    //   `,
    // },
  ];
  return (
    <div
      className={`md:w-[85.4166666667vw] mx-[auto]
     
    md:pb-[9.375vw] pb-[80px]`}
    >
      <div className="w-[90%] md:w-[53%] mx-[auto] flex flex-col md:items-center">
        <h3 data-aos="fade-up" className="text-[#000] heading2 md:text-center ">
          {title}
        </h3>
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          data-aos="fade-down"
          className="para24 font-[500] text-[#333333]  mt-[16px] md:mt-[1.40625vw] md:text-center"
        ></div>
      </div>
      <div className={` w-full md:pt-[3.75vw] pt-[40px]`}>
        {swiperGap == 0 || (
          <div
            data-aos="fade-up"
            className="relative  mx-auto md:w-[85.4166666667vw] flex justify-center becarfeul__Swipers swiper-rtl"
          >
            <Swiper
              onSwiper={(s) => setSwiper(s)}
              className="becarfeul__Swipers w-[80vw] md:w-[69.5833333333vw]"
              // modules={[Autoplay]}
              // autoplay={{
              //   delay: 6000,
              //   disableOnInteraction: false,
              // }}
              spaceBetween={swiperGap}
              slidesPerView={"auto"}
            >
              {cards.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="md:w-[22.0833333333vw] md:h-[28.6458333333vw] h-[250px] w-[80vw] bg-[#244A54] flex items-end md:pb-[1.5625vw] pb-[18px]"
                >
                  <img
                    src={card?.avoid_fraud_carousal_image?.src}
                    alt={
                      card?.avoid_fraud_carousal_image?.alt
                        ? card?.avoid_fraud_carousal_image?.alt
                        : card?.avoid_fraud_carousal_title
                    }
                    loading="lazy"
                    className="absolute top-0 leftRightFixer1 w-full h-full object-cover "
                  />
                  <span className="avoid__Fraud"></span>
                  <h5 className="para24 font-[500] text-[#FFFFFF] md:w-[75%] w-[90%] mx-[auto] relative z-[2] text-center">
                    {card?.avoid_fraud_carousal_title}
                  </h5>
                </SwiperSlide>
              ))}
            </Swiper>
            {swiper && <SwiperButtons3 disable swiper={swiper} en={en} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvoidFraud;
