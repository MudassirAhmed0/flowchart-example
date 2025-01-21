import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateFilter = ({ date, setDate, en }) => {
  const handleChange = (newValue) => {
    if (newValue) {
      setDate(newValue.format("YYYY-MM-DD"));
      changeUrl(newValue.format("YYYY-MM-DD"));
    }
  };

  const changeUrl = (newDate) => {
    const query = window.location.href.split("?")[1];
    let newQuery = "";
    if (query) {
      const splittedQuery = query.split("&");

      splittedQuery.forEach((item, index) => {
        if (item.includes("date")) {
          newQuery +=
            index != splittedQuery.length - 1
              ? "date=" + newDate + "&"
              : "date=" + newDate;
        } else {
          newQuery += index != splittedQuery.length - 1 ? item + "&" : item;
        }
      });

      if (!query.includes("date")) {
        newQuery += "&" + "date=" + newDate;
      }
    } else {
      newQuery = "date=" + newDate;
    }
    history.pushState(
      null,
      null,
      window.location.origin + window.location.pathname + "?" + newQuery
    );
  };

  return (
    <div className="myDatePicker max-w-[400px] w-[90vw] md:w-[40vw] mx-auto mt-[-40px] mb-[30px]  md:mt-[-4vw] ">
      <span className="text26 font-[500] flex mt-[16px] md:mt-[2vw]">
        {en ? "Filter by day" : "تصفية حسب اليوم"}
      </span>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            // label={en ? "Filter by day" : "تصفية حسب اليوم"}
            value={date !== null ? date : null}
            onChange={handleChange}
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* <div className="flex justify-center mt-[1vw]">
        <button className="py-[12px] px-[24px] md:py-[0.8vw]  border border-[#4FE0A3] md:px-[2.5vw]  para24 transition duration-500 text-white hover:bg-white bg-[#4FE0A3] hover:text-[#4FE0A3]">
          Search
        </button>
      </div> */}
    </div>
  );
};

export default DateFilter;
