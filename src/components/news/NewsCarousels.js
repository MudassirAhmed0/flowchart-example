import React from "react";
import NewsCarousel from "./NewsCarousel";

const NewsCarousels = ({
  carousel1,
  carousel2,
  carousel3,
  setPageNumbers,
  pageNumbers,
  headings,
  loading,
  setLastFetchedPageNumbers,
  en,
}) => {
  return (
    <div className="flex flex-col gap-y-[60px]  md:gap-y-[6.2083333333vw] mb-[100px] md:mb-[9.375vw]">
      <NewsCarousel
        data={carousel1}
        currentPage={pageNumbers.c1Page}
        lastPage={carousel1?.news?.last_page}
        category="c1"
        setPageNumbers={setPageNumbers}
        setLastFetchedPageNumbers={setLastFetchedPageNumbers}
        heading={headings.c1}
        isLoading={loading.c1}
        en={en}
      />
      <NewsCarousel
        category="c2"
        data={carousel2}
        currentPage={pageNumbers.c2Page}
        lastPage={carousel2?.news?.last_page}
        setPageNumbers={setPageNumbers}
        setLastFetchedPageNumbers={setLastFetchedPageNumbers}
        heading={headings.c2}
        isLoading={loading.c2}
        en={en}
      />
      <NewsCarousel
        category="c3"
        noClamp
        data={carousel3}
        currentPage={pageNumbers.c3Page}
        lastPage={carousel3?.news?.last_page}
        setPageNumbers={setPageNumbers}
        setLastFetchedPageNumbers={setLastFetchedPageNumbers}
        heading={headings.c3}
        isLoading={loading.c3}
        en={en}
      />
    </div>
  );
};

export default NewsCarousels;
