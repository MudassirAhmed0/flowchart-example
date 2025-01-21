import React from "react";

const NewsGridActions = ({
  currentPage,
  lastPage,
  setPageNumbers,
  category,
  setLastFetchedPageNumbers,
  handleScroll,
}) => {
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

  const pageNumbers = [];
  const numPageButtonsToShow = 5; // Number of page buttons to show

  for (
    let i = Math.max(currentPage - 2, 1);
    i <= Math.min(currentPage + 2, lastPage);
    i++
  ) {
    pageNumbers.push(i);
  }

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
  const hanldePageChange = (newPageNumber) => {
    changeUrl(newPageNumber);
    setPageNumbers((prev) => {
      setLastFetchedPageNumbers(prev);
      return {
        ...prev,
        [category + "Page"]: newPageNumber,
      };
    });
    handleScroll();
  };
  return (
    <div className="mt-[30px] text-[#999] md:mt-[3.75vw] flex gap-x-[8px] md:gap-x-[0.41666666666vw] myContainer">
      {currentPage > 1 && (
        <button
          className={` md:h-[2.5vw] border-[#999] cursor-pointer   md:hover:opacity-[0.6]  transition-all duration-300 flex text-center items-center justify-center px-[8px] py-[8px] md:px-[0.625vw] md:py-[0.41666666666vw] border-[1px] whitespace-nowrap ${
            currentPage == 1 ? "pointer-events-none opacity-[0.5]" : ""
          }`}
          onClick={handlePrev}
        >
          <div className="flex items-center">
            <img
              src="/images/icons/greyChevron.svg"
              className="transform scale-x-[-1] w-[16px] md:w-[1.66666666667vw] transition duration-500 flipped"
              alt="chevron"
            />
            <span className="font-[400] text-[#999] hidden md:block">
              السابق
            </span>
          </div>
        </button>
      )}
      {currentPage > numPageButtonsToShow && (
        <div
          onClick={() => hanldePageChange(1)}
          className="md:h-[2.5vw]  border-[#999] cursor-pointer   md:hover:opacity-[0.6] flex text-center items-center justify-center py-[8px] md:py-[0.41666666666vw] px-[8px] md:px-[0.83333333333vw] border-[1px] whitespace-nowrap"
        >
          <div className="flex items-center">
            <span className="font-[400]">..</span>
          </div>
        </div>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => hanldePageChange(page)}
          className={
            currentPage === page ? "pointer-events-none opacity-[0.5]" : ""
          }
        >
          <div className="md:h-[2.5vw]  border-[#999] cursor-pointer   md:hover:opacity-[0.6] flex text-center items-center justify-center py-[8px] md:py-[0.41666666666vw] px-[8px] md:px-[0.83333333333vw] border-[1px] whitespace-nowrap">
            <div className="flex items-center">
              <span className="font-[400]">{page}</span>
            </div>
          </div>
        </button>
      ))}

      {currentPage < lastPage - numPageButtonsToShow && (
        <div
          onClick={() => hanldePageChange(lastPage)}
          className="md:h-[2.5vw]  border-[#999] cursor-pointer   md:hover:opacity-[0.6] flex text-center items-center justify-center py-[8px] md:py-[0.41666666666vw] px-[8px] md:px-[0.83333333333vw] border-[1px] whitespace-nowrap"
        >
          <div className="flex items-center">
            <span className="font-[400] ">..</span>
          </div>
        </div>
      )}
      {currentPage < lastPage && (
        <button
          onClick={handleNext}
          className={`md:h-[2.5vw]  border-[#999] cursor-pointer  transition-all duration-300 md:hover:opacity-[0.6] flex text-center items-center justify-center px-[8px] py-[8px] md:px-[0.625vw] md:py-[0.41666666666vw] border-[1px] whitespace-nowrap 
${currentPage == lastPage ? "pointer-events-none opacity-[0.5]" : ""}
`}
        >
          <div className="flex items-center">
            <span className="font-[400] hidden md:block">التالي </span>
            <img
              src="/images/icons/greyChevron.svg"
              className="w-[16px] md:w-[1.66666666667vw] transition duration-500 flipped"
              alt="chevron"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default NewsGridActions;
