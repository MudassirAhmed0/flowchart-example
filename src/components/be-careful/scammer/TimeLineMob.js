import React from "react";
import ScammerInfo from "./ScammerInfo";

const TimeLineMob = ({ en, data }) => {
  return (
    <div className="flex flex-col  md:hidden">
      <div className="flex flex-col  ">
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <img
            src="/images/be-careful/scammer-icons/1.svg"
            alt="icons"
            className=" w-[60px] flipped "
          />
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="1" paragraph={data?.step1} />
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div data-aos="fade-up" className="flex flex-col gap-y-[16px]">
          <div className="flex-col flex gap-y-[12px] items-start">
            <img
              src="/images/be-careful/scammer-icons/2.svg"
              alt="icons"
              className=" w-[60px] flipped "
            />
            <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
              <ScammerInfo number="2" paragraph={data?.step2} />
            </div>
          </div>
          <div className="md:w-[17.1875vw] bg-[#89191B1A] ">
            <span className="block  p-[18px] text-[16px]  font-[500] text-[#333333]">
              {data?.step1message}
            </span>
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div data-aos="fade-up" className="flex flex-col gap-y-[16px]">
          <div className="flex-col flex gap-y-[12px] items-start">
            <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
              <ScammerInfo number="3" paragraph={data?.step3} />
            </div>
          </div>
          <div className="md:w-[17.1875vw] bg-[#89191B1A] ">
            <div className="flex flex-col gap-y-[12px] p-[18px] ">
              <div className="flex gap-x-[12px]  ">
                <div className="flex gap-x-[4px] ">
                  <span className="block w-[150px] ">
                    {en ? "Scammer's IBAN number:" : "رقم آيبان المحتال"}
                  </span>
                  <span>:</span>
                </div>
                <span className="ltr">SA ****</span>
              </div>
              <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block w-[150px] ">
                    {" "}
                    {en ? "Beneficiary Name" : "اسم المستفيد"}
                  </span>
                  <span>:</span>
                </div>
                <span>{en ? "Official Name" : "جهة رسمية"}</span>
              </div>
              <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block w-[150px] ">
                    {en ? "Beneficiary Activation" : "تفعيل المستفيد"}
                  </span>
                  <span>:</span>
                </div>
                <img
                  src="/images/be-careful/scammer-icons/arrows/tick.svg"
                  alt="timeline icon"
                  className="flipped md:w-[1.61458333333vw] w-[24px]"
                />
              </div>
              <div className="flex md:gap-x-[0.83333333333vw] gap-x-[12px]  ">
                <div className="flex gap-x-[4px] md:gap-x-[unset]">
                  <span className="block w-[150px] ">
                    {" "}
                    {en ? "Transferring fee" : "تحويل مبلغ الرسوم"}
                  </span>
                  <span>:</span>
                </div>
                <span>{en ? "10 SAR" : "10 ريال"}</span>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div data-aos="fade-up" className="flex flex-col gap-y-[16px]">
          <div className="flex-col flex gap-y-[12px] items-start">
            <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
              <ScammerInfo number="4" paragraph={data?.step4} />
            </div>
          </div>
          <div className="md:w-[17.1875vw] bg-[#89191B1A] ">
            <div className="flex flex-col gap-y-[12px] p-[18px] ">
              <div className="flex gap-x-[12px]  ">
                <div className="flex gap-x-[4px] ">
                  <span className="block w-[150px] ">
                    {en ? "Bank name" : "اسم البنك"}
                  </span>
                  <span>:</span>
                </div>
                <span>XYZ</span>
              </div>
              <div className="flex gap-x-[12px]  ">
                <div className="flex gap-x-[4px] ">
                  <span className="block w-[150px] ">
                    {" "}
                    {en ? "Username" : "اسم المستخدم"}
                  </span>
                  <span>:</span>
                </div>
                <span>******</span>
              </div>
              <div className="flex gap-x-[12px]  ">
                <div className="flex gap-x-[4px] ">
                  <span className="block w-[150px] ">
                    {" "}
                    {en ? "Password" : "كلمة المرور"}
                  </span>
                  <span>:</span>
                </div>
                <span>******</span>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="5" paragraph={data?.step5} />
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="6" paragraph={data?.step6} />
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="7" paragraph={data?.step7} />
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div data-aos="fade-up" className="flex flex-col ">
          <img
            src="/images/be-careful/scammer-icons/3.svg"
            alt="icons"
            className={` w-[55px] flipped`}
          />
          <div className="flex-col flex gap-y-[12px] items-start">
            <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
              <ScammerInfo number="8" paragraph={data?.step8} />
            </div>
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <img
            src="/images/be-careful/scammer-icons/4.svg"
            alt="icons"
            className=" w-[55px] flipped "
          />
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="9" paragraph={data?.step9} />
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <img
            src="/images/be-careful/scammer-icons/6.svg"
            alt="icons"
            className=" w-[55px] flipped "
          />
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="10" paragraph={data?.step10} />
          </div>
        </div>
        <img
          data-aos="fade"
          src="/images/be-careful/scammer-icons/arrows/3.svg"
          alt="timeline icon"
          className=" h-[80px] w-[14.6666666667vw] md:block  scaler my-[10px] tran "
        />
        <div
          data-aos="fade-up"
          className="flex-col flex gap-y-[12px] items-start"
        >
          <img
            src="/images/be-careful/scammer-icons/7.svg"
            alt="icons"
            className=" w-[55px]  "
          />
          <div className={`${en ? "ml-[18px]" : "mr-[18px]"}`}>
            <ScammerInfo number="11" paragraph={data?.step11} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineMob;
