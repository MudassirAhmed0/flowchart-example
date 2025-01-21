"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButtons2 from "../common/SwiperButtons2";
import SwiperButtons3 from "../common/SwiperButtons3";

const FraudSwiper = ({ en, title, cards }) => {
  const [swiper, setSwiper] = useState(null);
  const [swiperGap, setSwiperGap] = useState(0);
  useEffect(() => {
    setSwiperGap(
      window.innerWidth > 768 ? (window.innerWidth / 100) * 1.66666666667 : 24
    );
  }, []);
  const FraudSwiperCards = [
    {
      img: "/images/be-careful/fraud-cards-icons/1.svg",
      heading: en ? "Identity Theft" : "انتحال الشخصية ",
      paragraph: en
        ? "Identity theft or identity piracy is a common way for scammers to obtain sensitive information."
        : "أحد أهم طرق الهندسة الاجتماعية الاحتيال بانتحال شخصية أخرى",
      span: en
        ? " Pretend to be a bank employee to tempt customers and steal their personal and confidential information, such as bank account numbers."
        : "انتحال صفة موظف بنك موظف وزارة ، موظف شركة اتصالات موظف صحة و غيرها لاستدراج العميل و حصوله على المعلومات من رمز توثيق أو معلومات شخصية و مصرفية.",
    },
    {
      img: "/images/be-careful/fraud-cards-icons/2.svg",
      heading: en ? "Employment Fraud" : "التوظيف الوهمي ",
      paragraph: en
        ? "The attempt to defraud people seeking employment by giving them false hope of better employment and requesting their bank account information or directly asking for money."
        : "استخدام شبكات التوظيف لعرض وظائف وهمية واستدراج الضحايا وطلب الحسابات البنكية الخاصة بهم لتجميع الأموال وتحويلها إلى خارج المملكة.",
      span: en
        ? "Fake job offer requiring a certificate, which requires a certain amount of money to be transferred."
        : "وصول عرض وظيفي وهمي للضحية واشتراط الحصول على شهادة من دورة تدريبية تتطلب تحويل مبلغ معيّن",
    },
    {
      img: "/images/be-careful/fraud-cards-icons/3.svg",
      heading: en ? "Driving Schools" : "مدارس تعليم القيادة  ",
      paragraph: en
        ? "Mimicking driving school websites to whether to formally obtain the license or to pay fees and obtain it untrained."
        : "انتحال مواقع مدارس تعليم القيادة  سواءً لاستخراج الرخصة بشكل رسمي أو دفع رسوم واستخراجها بدون تدريب.",
      span: en
        ? " Twitter accounts claiming to be able to extract a women's driver's license without the need for training and at a nominal charge."
        : " حسابات في تويتر تدّعي قدرتها على استخراج رخصة القيادة للنساء دون الحاجة للتدريب وبمبلغ رمزي.",
    },
    {
      img: "/images/be-careful/fraud-cards-icons/4.svg",
      heading: en ? "Cryptocurrency Trading" : "العملات والشركات الاستثمارية",
      paragraph: en
        ? "Post misleading offers to buy cryptocurrency."
        : "نشر عروض مضللة بالعملات وانتحال صفات شركات استثمارية",
      span: en
        ? " Promise quick profits from unlicensed phony businesses using a financial market term, like Forex."
        : " استخدام مسمى سوق مالي مثل (الفوركس) والوعد بالربح السريع من شركات وهمية غير مرخصة.",
    },
    {
      img: "/images/be-careful/fraud-cards-icons/5.svg",
      heading: en ? "Fake Websites" : "المنصات الإلكترونية الوهمية",
      paragraph: en
        ? "Making fake websites to sell or impersonating brand websites to steal personal and confidential information."
        : "تصميم منصات إلكترونية وهمية للبيع أو تقليد مواقع العلامات التجارية لسرقة معلومات الدخول ومعلومات الحساب البنكي والبطاقة.",
      span: en
        ? " Creating fake pages for banks, shopping sites, or government agencies in order for the client to enter his financial or personal information and communicate with him."
        : " تطوير صفحات وهمية للبنوك أو مواقع شراء أو مواقع لجهات حكومية بهدف كتابة العميل لمعلوماته المصرفية أو الشخصية و التواصل معه.",
    },
    {
      img: "/images/be-careful/fraud-cards-icons/6.svg",
      heading: en ? "Fake Offers" : "عروض وهمية",
      paragraph: en
        ? "Fraudulent advertisements for products, services, and reservations use the logos of well-known companies that contain fake links. To trick people into giving them their bank card information so it can be stolen."
        : "إعلانات ترويجية وهمية لسلع وخدمات وحجوزات تحمل شعارات شركات معروفة تحوي روابط مزيّفة، بهدف استدراج والحصول على بيانات البطاقات البنكية لسرقتها.",
      span: en
        ? " An email confirming your 70% discount on travel tickets. You will be asked to enter your bank card details to complete the purchase or technically the scam."
        : " رسالة تبلغك بحصولك على خصم بنسبة 70% على تذاكر سفر ويطلب كتابة تفاصيل البطاقة البنكية لإتمام عملية شراء التذاكر.",
    },
  ];
  return (
    <div className="md:pb-[9.375vw] pb-[80px]">
      <div className="w-[90vw] md:w-[39.3229166667vw] mx-[auto] text-center ">
        <h3 data-aos="fade-up" className="text-[#000] heading2 ">
          {title}
        </h3>
      </div>
      <div className={`  md:pt-[3.75vw] pt-[40px]`}>
        {swiperGap == 0 || (
          <div
            data-aos="fade"
            className="relative  becarfeul__Swipers swiper-rtl mx-[auto] md:w-[85.4166666667vw]"
          >
            <Swiper
              onSwiper={(s) => setSwiper(s)}
              spaceBetween={swiperGap}
              slidesPerView={"auto"}
              className={`becarfeul__Swipers  w-[80vw] md:w-[69.5833333333vw]`}
            >
              {cards?.map((card, index) => (
                <SwiperSlide
                  key={index}
                  className="md:w-[22.0833333333vw]  w-[80vw] bg-[#89191B] "
                >
                  <div className="mx-[auto] w-[88%] text-center  md:pt-[3.33333333333vw] md:pb-[1.66666666667vw] py-[40px]">
                    <div className="flex flex-col items-center md:gap-y-[0.41666666666vw] gap-y-[8px] ">
                      <img
                        src={card?.typical_ways_icon?.permalink}
                        alt={card?.typical_ways_title_text}
                        loading="lazy"
                        className="md:w-[2.5vw] md:h-[2.5vw] w-[30px] h-[30px] "
                      />
                      <h5 className="text-[#FFFFFF] para24 font-[700]">
                        {card?.typical_ways_title_text}
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: card?.typical_ways_first_text,
                        }}
                        className="md:mt-[0.3125vw] mt-[10px] h-[120px] md:h-[12.3958333333vw] para24 text-[#F0F6F5] font-[500]"
                      ></div>
                    </div>
                    <div className="mx-[auto] md:mb-[0.72916666666vw] md:mt-[1.35416666667vw] my-[10px] md:w-[1.66666666667vw] w-[24px]">
                      <img
                        src="/images/icons/chevron-down.svg"
                        alt="Chevron"
                        className="down__Chevron w-full"
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: card?.typical_ways_second_text,
                      }}
                      className=" md:h-[11.71875vw] h-[130px] block md:mt-[0.83333333333vw] mt-[24px] para24 text-[#F0F6F5] font-[500]"
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {swiper && <SwiperButtons3 swiper={swiper} en />}
          </div>
        )}
      </div>
    </div>
  );
};

export default FraudSwiper;
