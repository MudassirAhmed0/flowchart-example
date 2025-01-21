import React from "react";

const NewsCarouselNavigation = ({
  currentPage,
  lastPage,
  category,
  setPageNumbers,
  setLastFetchedPageNumbers,
  handleScroll,
  en,
  isLoading,
}) => {
  if (lastPage != 1) {
    const changeUrl = (newPageNumber) => {
      const query = window.location.href.split("?")[1];
      let newQuery = "";
      if (query) {
        const splittedQuery = query.split("&");

        splittedQuery.forEach((item, index) => {
          if (item.includes(category + "Page")) {
            newQuery +=
              index != splittedQuery.length - 1
                ? category + "Page=" + newPageNumber + "&"
                : category + "Page=" + newPageNumber;
          } else {
            newQuery += index != splittedQuery.length - 1 ? item + "&" : item;
          }
        });

        if (!query.includes(category + "Page")) {
          newQuery += "&" + category + "Page=" + newPageNumber;
        }
      } else {
        newQuery = category + "Page=" + newPageNumber;
      }
      history.pushState(
        null,
        null,
        window.location.origin + window.location.pathname + "?" + newQuery
      );
    };

    const handlePrev = () => {
      changeUrl(currentPage - 1);
      setPageNumbers((prev) => {
        setLastFetchedPageNumbers(prev);

        return {
          ...prev,
          [category + "Page"]: currentPage - 1,
        };
      });
      handleScroll();
    };
    const handleNext = () => {
      changeUrl(currentPage + 1);
      setPageNumbers((prev) => {
        setLastFetchedPageNumbers(prev);

        return {
          ...prev,
          [category + "Page"]: currentPage + 1,
        };
      });
      handleScroll();
    };

    return (
      <div className="mt-[30px] md:mt-[3.75vw] flex gap-x-[8px] md:gap-x-[0.41666666666vw] myContainer">
        <button
          className={` border-[#999] cursor-pointer   md:hover:opacity-[0.6]  transition-all duration-300 flex text-center items-center justify-center px-[14px] py-[8px] md:px-[0.625vw] md:py-[0.41666666666vw] border-[1px] whitespace-nowrap ${
            currentPage == 1 || isLoading
              ? "pointer-events-none opacity-[0.5]"
              : ""
          }`}
          onClick={handlePrev}
        >
          <div className="flex items-center">
            <img
              src="/images/icons/greyChevron.svg"
              className={`${
                en ? "" : "transform scale-x-[-1]"
              } w-[16px] md:w-[1.66666666667vw] transition duration-500`}
              alt="chevron"
            />
            <span className="font-[400] text-[#999]">السابق</span>
          </div>
        </button>
        <button
          className={` border-[#999] cursor-pointer   md:hover:opacity-[0.6]  transition-all duration-300 flex text-center items-center justify-center px-[14px] py-[8px] md:px-[0.625vw] md:py-[0.41666666666vw] border-[1px] whitespace-nowrap ${
            currentPage == lastPage || isLoading
              ? "pointer-events-none opacity-[0.5]"
              : ""
          }`}
          onClick={handleNext}
        >
          <div className="flex items-center">
            <span className="font-[400] text-[#999]">التالي </span>
            <img
              src="/images/icons/greyChevron.svg"
              className="flipped w-[16px] md:w-[1.66666666667vw] transition duration-500"
              alt="chevron"
            />
          </div>
        </button>
        <div className=" cursor-pointer flex text-center items-center justify-center ">
          <div className="flex items-center gap-x-[4px]">
            <span className="font-[400]">{currentPage} </span>
            <span className="font-[400]">التالي </span>
            <span className="font-[400]">{lastPage} </span>
          </div>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default NewsCarouselNavigation;
