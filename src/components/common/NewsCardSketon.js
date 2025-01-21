const NewsCardSkelton = ({ grid }) => {
  return (
    <div
      href={"/single-news"}
      className={`${
        grid ? "w-full" : "md:w-[41.40625vw] w-full"
      } flex md:gap-[1.25vw] animate-pulse flex-wrap gap-[16px] `}
    >
      <div
        className={`${
          grid
            ? "w-full h-[270px] relative md:w-[16.6666666667vw] md:h-[11.4583333333vw]"
            : "min- w-[170px] relative w-full h-[270px] md:min-w-[10.9375vw] md:w-[10.9375vw] md:h-[7.03125vw]"
        }`}
      >
        <span className="absolute w-full h-full bg-[#dddddd]"></span>
      </div>
      <div className={`${grid ? "w-[100%] md:w-[65%] " : "md:w-[29.0625vw]"}`}>
        <div className="rounded-full bg-[#dddddd] ">
          <h5
            className={`   w-[5]  opacity-0 md:text-[1.35416666667vw]  md:leading-[2.03125vw] text-[18px] leading-[28px] text-[#000000] font-[700] line-clamp-2`}
          >
            ارتفاع أرباح بنك أبوظبي التجاري 23% في الوائد
          </h5>
        </div>
        <div className="rounded-full bg-[#dddddd] w-[50%] md:w-[15vw] mt-[10px] md:mt-[0.5vw]">
          <span className="text20 text-[#999999] opacity-0">Jan 25,2015</span>
        </div>

        {grid && (
          <>
            <div className="rounded-full bg-[#dddddd] hidden md:block">
              <p className="para24 opacity-0 text-[#999999] line-clamp-3  font-[400] md:mt-[0.88541666666vw] mt-[12px]">
                ارتفاع أرباح بنك أبوظبي التجاري 23% في الوائد
              </p>
            </div>
            <div className="rounded-full bg-[#dddddd] hidden md:block">
              <p className="para24 opacity-0 text-[#999999] line-clamp-3  font-[400] md:mt-[0.88541666666vw] mt-[12px]">
                ارتفاع أرباح بنك أبوظبي التجاري 23% في الوائد
              </p>
            </div>
          </>
        )}
      </div>
    </div>
    // <div
    //   role="status"
    //   class="space-y-8  md:space-y-0 md:space-x-8 md:flex md:items-center"
    // >
    //   <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 ">
    //     <svg
    //       class="w-10 h-10 text-gray-500 "
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 20 18"
    //     >
    //       <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
    //     </svg>
    //   </div>
    //   <div class="w-full">
    //     <div class="h-2.5 bg-gray-500 rounded-full  w-48 mb-4"></div>
    //     <div class="h-2 bg-gray-500 rounded-full  max-w-[480px] mb-2.5"></div>
    //     <div class="h-2 bg-gray-500 rounded-full  mb-2.5"></div>
    //     <div class="h-2 bg-gray-500 rounded-full  max-w-[440px] mb-2.5"></div>
    //     <div class="h-2 bg-gray-500 rounded-full  max-w-[460px] mb-2.5"></div>
    //     <div class="h-2 bg-gray-500 rounded-full  max-w-[360px]"></div>
    //   </div>
    //   <span class="sr-only">Loading...</span>
    // </div>
  );
};

export default NewsCardSkelton;
