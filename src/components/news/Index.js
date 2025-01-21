"use client";
import SubPageHero from "@/components/common/SubPageHero";
import CategoriesBtns from "@/components/news/CategoriesBtns";
import Headlines from "@/components/news/Headlines";
import NewsCarousels from "@/components/news/NewsCarousels";
import NewsGrid from "@/components/news/NewsGrid";
import getNewsUsingAxios from "@/lib/data-hooks/getNewsUsingAxios";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DateFilter from "./DateFilter";
import dayjs from "dayjs";

const categoryBtns = [
  {
    category: "الكل",
    slug: "",
  },
  {
    category: "أخبار البنوك السعودية",
    slug: "1",
  },
  {
    category: "أخبار اليوم",
    slug: "2",
  },
  {
    category: "آخر المنشورات",
    slug: "3",
  },
  {
    category: "أرشيف الأخبار",
    slug: "4",
  },
];
const headings = {
  c1: "أخبار البنوك السعودية",
  c2: "أخبار اليوم",
  c3: "آخر المنشورات",
};

// Custom hook for skipping code on the first render
function useSkipFirstRenderEffect(effect, deps) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      effect();
    } else {
      isFirstRender.current = false;
    }
  }, deps);
}

const News = ({
  data,
  isEn,
  data2,
  data3,
  currentDate,
  en,
  recentData,
  pageData,
}) => {
  const searchParams = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState("");
  const [carousel1Data, setCarousel1Data] = useState(null);
  const [carousel2Data, setCarousel2Data] = useState(null);
  const [carousel3Data, setCarousel3Data] = useState(null);
  const [categorizeData, setCategorizeData] = useState(null);
  const [date, setDate] = useState();
  const [pageNumbers, setPageNumbers] = useState({
    c1Page: 0,
    c2Page: 0,
    c3Page: 0,
  });
  const [lastFetchPageNumber, setLastFetchedPageNumbers] = useState({
    c1Page: 0,
    c2Page: 0,
    c3Page: 0,
  });
  const [loading, setLoading] = useState({
    c1: true,
    c2: true,
    c3: true,
  });
  // const isFirstRender = useRef(true);

  useEffect(() => {
    if (data) {
      setCarousel1Data(data);
      setLoading((prev) => {
        return {
          ...prev,
          c1: false,
        };
      });
    }
  }, [data]);
  useEffect(() => {
    if (data2) {
      setCarousel2Data(data2);
      setLoading((prev) => {
        return {
          ...prev,
          c2: false,
        };
      });
    }
  }, [data2]);
  useEffect(() => {
    if (data3) {
      setCarousel3Data(data3);
      setLastFetchedPageNumbers({
        c1Page: data?.news?.current_page,
        c2Page: data2?.news?.current_page,
        c3Page: data3?.news?.current_page,
      });
      setPageNumbers({
        c1Page: data?.news?.current_page,
        c2Page: data2?.news?.current_page,
        c3Page: data3?.news?.current_page,
      });
      setLoading((prev) => {
        return {
          ...prev,
          c3: false,
        };
      });
    }
  }, [data3]);
  useEffect(() => {
    if (currentDate) {
      setDate(dayjs(currentDate));
    }
  }, [currentDate]);

  const settingCategorizedData = () => {
    if (currentCategory == "c1") {
      setCategorizeData(carousel1Data);
    } else if (currentCategory == "c2") {
      setCategorizeData(carousel2Data);
    } else if (currentCategory == "c3") {
      setCategorizeData(carousel3Data);
    } else if (currentCategory == "c4") {
      // console.log(currentCategory);
    } else {
    }
  };

  useEffect(() => {
    setCurrentCategory(currentCategory);
    settingCategorizedData();
  }, [currentCategory]);
  const updateData = async () => {
    if (
      pageNumbers.c1Page != 0 &&
      pageNumbers.c1Page != lastFetchPageNumber.c1Page
    ) {
      setLoading((prev) => {
        return {
          ...prev,
          c1: true,
        };
      });
      const newData = await getNewsUsingAxios(
        "saudi_banking_news",
        pageNumbers.c1Page,
        isEn,
        date
      );
      setCarousel1Data(newData.data.data);
      setLoading((prev) => {
        return {
          ...prev,
          c1: false,
        };
      });
    }
    if (
      pageNumbers.c2Page != 0 &&
      pageNumbers.c2Page != lastFetchPageNumber.c2Page
    ) {
      setLoading((prev) => {
        return {
          ...prev,
          c2: true,
        };
      });
      const newData = await getNewsUsingAxios(
        "today_news",
        pageNumbers.c2Page,
        isEn,
        date
      );
      setCarousel2Data(newData.data.data);
      setLoading((prev) => {
        return {
          ...prev,
          c2: false,
        };
      });
    }
    if (
      pageNumbers.c3Page != 0 &&
      pageNumbers.c3Page != lastFetchPageNumber.c3Page
    ) {
      setLoading((prev) => {
        return {
          ...prev,
          c3: true,
        };
      });
      const newData = await getNewsUsingAxios(
        "latest_tweets",
        pageNumbers.c3Page,
        isEn,
        date
      );
      setCarousel3Data(newData.data.data);
      setLoading((prev) => {
        return {
          ...prev,
          c3: false,
        };
      });
    }
  };

  useEffect(() => {
    setCurrentCategory(searchParams.get("category"));
  }, [searchParams]);

  useSkipFirstRenderEffect(() => {
    updateData();
  }, [pageNumbers]);
  const updateDataForDate = async (newDate) => {
    setLoading((prev) => {
      return {
        c1: true,
        c2: true,
        c3: true,
      };
    });
    const newData1 = await getNewsUsingAxios(
      "saudi_banking_news",
      pageNumbers.c1Page,
      isEn,
      newDate ? null : date
    );
    setCarousel1Data(newData1.data.data);
    setLoading((prev) => {
      return {
        ...prev,
        c1: false,
      };
    });
    const newData2 = await getNewsUsingAxios(
      "today_news",
      pageNumbers.c2Page,
      isEn,
      newDate ? null : date
    );
    setCarousel2Data(newData2.data.data);
    setLoading((prev) => {
      return {
        ...prev,
        c2: false,
      };
    });
    const newData3 = await getNewsUsingAxios(
      "latest_tweets",
      pageNumbers.c3Page,
      isEn,
      newDate ? null : date
    );

    setCarousel3Data(newData3.data.data);
    setLoading((prev) => {
      return {
        ...prev,
        c3: false,
      };
    });
  };

  useSkipFirstRenderEffect(() => {
    if (date) {
      updateDataForDate();
    }
  }, [date]);

  useEffect(() => {
    if (currentCategory) {
      settingCategorizedData();
    }
  }, [carousel1Data, carousel2Data, carousel3Data]);

  return (
    <>
      <SubPageHero
        img={pageData?.banner_image?.src}
        alt={pageData?.banner_image?.alt}
        span={pageData?.title}
        heading={pageData?.banner_title}
        paragraph={pageData?.banner_description}
        // paragraph="لوريم ايبسوم دولار سيت أميت كونسيك تيتور أدايبا يسكينج أليايت,سيت دو أيوسم ود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا ."
        en={en}
      />
      <CategoriesBtns
        currentCategory={currentCategory}
        categoryBtns={categoryBtns}
        setCurrentCategory={setCurrentCategory}
        setDate={setDate}
        updateDataForDate={updateDataForDate}
        en={en}
        setLastFetchedPageNumbers={setLastFetchedPageNumbers}
        setPageNumbers={setPageNumbers}
      />

      <div className="min-h-[100vh]">
        {currentCategory == "c0" ||
        currentCategory == "c4" ||
        !currentCategory ? (
          <>
            <Headlines en={en} data={recentData} />
            {currentCategory == "c4" && (
              <DateFilter setDate={setDate} date={date} en={en} />
            )}
            {(currentCategory === "c4" && date) || currentCategory !== "c4" ? (
              <NewsCarousels
                headings={headings}
                setPageNumbers={setPageNumbers}
                setLastFetchedPageNumbers={setLastFetchedPageNumbers}
                carousel3={carousel3Data}
                carousel2={carousel2Data}
                carousel1={carousel1Data}
                pageNumbers={pageNumbers}
                loading={loading}
                en={en}
              />
            ) : null}
          </>
        ) : (
          ""
        )}
        {currentCategory &&
          currentCategory != "c4" &&
          currentCategory != "c0" &&
          categorizeData && (
            <NewsGrid
              heading={headings[currentCategory]}
              data={categorizeData}
              setPageNumbers={setPageNumbers}
              category={currentCategory}
              setLastFetchedPageNumbers={setLastFetchedPageNumbers}
              isLoading={loading[currentCategory]}
              en={en}
            />
          )}
      </div>
    </>
  );
};

export default News;
