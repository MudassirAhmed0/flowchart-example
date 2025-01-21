"use client";
import Link from "next/link";

const CategoriesBtns = ({
  categoryBtns,
  currentCategory,
  setCurrentCategory,
  setDate,
  updateDataForDate,
  en,
  setPageNumbers,
  setLastFetchedPageNumbers,
}) => {
  const handleClick = (index) => {
    if (index != 4) {
      if (currentCategory != "c4") {
        const query = window.location.href.split("?")[1];
        let newQuery = "";
        if (query) {
          const splittedQuery = query.split("&");

          splittedQuery.forEach((item, i) => {
            if (item.includes("category=c")) {
              newQuery +=
                i == splittedQuery.length - 1
                  ? "?category=c" + index
                  : "?category=c" + index + "&";
            } else {
              newQuery += i == splittedQuery.length - 1 ? item : item + "&";
            }
          });
          if (!query.includes("category=c")) {
            newQuery = "?category=c" + index + "&" + newQuery;
          }
        } else {
          newQuery = "?category=c" + index;
        }

        if (newQuery.includes("&date=")) {
          setDate(null);
          const keyValuePairs = newQuery.split("&");

          const filteredKeyValuePairs = [];

          // Iterate through the key-value pairs
          for (const pair of keyValuePairs) {
            // Check if the key is not equal to "date"
            const [key] = pair.split("=");
            if (key !== "date") {
              // If the key is not "date", add it to the filtered array
              filteredKeyValuePairs.push(pair);
            }
          }

          // Join the filtered key-value pairs back into a string with "&" as the separator
          const resultStr = filteredKeyValuePairs.join("&");
          setDate(null);

          updateDataForDate("nullbhejo");
          history.pushState(
            null,
            null,
            window.location.origin + window.location.pathname + resultStr
          );
        } else {
          history.pushState(
            null,
            null,
            window.location.origin + window.location.pathname + newQuery
          );
        }
      } else {
        setDate(null);

        history.pushState(
          null,
          null,
          window.location.origin +
            window.location.pathname +
            "?category=c" +
            index
        );
        setLastFetchedPageNumbers({
          c1Page: 5,
          c2Page: 5,
          c3Page: 5,
        });
        setPageNumbers({
          c1Page: 1,
          c2Page: 1,
          c3Page: 1,
        });
      }
    } else {
      history.pushState(
        null,
        null,
        window.location.origin + window.location.pathname + "?category=c4"
      );
      setLastFetchedPageNumbers({
        c1Page: 5,
        c2Page: 5,
        c3Page: 5,
      });
      setPageNumbers({
        c1Page: 1,
        c2Page: 1,
        c3Page: 1,
      });
      setDate(null);
    }
    setCurrentCategory("c" + index);
  };
  return (
    <div
      className={`w-[95vw] md:w-[85.4166666667vw]  ${
        en ? " ml-auto " : " mr-auto "
      }  md:mx-auto md:pt-[9.375vw] pt-[80px]`}
    >
      <div
        className={`${
          en ? "pr-[5vw] md:pr-[unset]" : "pl-[5vw] md:pl-[unset]"
        } text-[#333333] para22 flex md:gap-x-[2.86458333333vw] gap-[16px] overflow-auto hideScroll `}
      >
        {categoryBtns.map((categoryBtn, index) => (
          <span
            key={categoryBtn.slug}
            onClick={() => handleClick(index)}
            className={`${
              currentCategory == "c" + index
                ? "pointer-events-none border-[#4FE0A3]  bg-[#4FE0A3] text-white"
                : currentCategory == " border-[#999]"
                ? "pointer-events-none border-[#4FE0A3]  bg-[#4FE0A3] text-white"
                : " border-[#999]"
            } cursor-pointer hover:border-[#4FE0A3]  hover:bg-[#4FE0A3] hover:text-white transition-all duration-300 flex text-center items-center justify-center px-[14px] py-[8px] md:px-[2.03125vw] md:py-[0.703125vw] border-[1px] whitespace-nowrap`}
          >
            <span className="font-[400]">{categoryBtn.category}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBtns;
