"use client";
import NewsCarouselHeading from "./NewsCarouselHeading";
import NewsCard2 from "../common/NewsCard2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import NewsCarouselNavigation from "./NewsCarouselNavigation";
import NewsCardSkelton from "../common/NewsCardSketon";

const NewsCarousel = ({
  data,
  lastPage,
  currentPage,
  category,
  setPageNumbers,
  heading,
  isLoading,
  setLastFetchedPageNumbers,
  en
}) => {
  const cards = data?.news?.data;
  const timesToRender = 8;
  const container = useRef(null);
  const handleScroll = () => {
    if (container.current) {
      let myInterval = setInterval(() => {
        if (isLoading) {
          console.log("loading...");
        } else {
          container.current.scrollIntoView({ behavior: "smooth" });

          clearInterval(myInterval);
        }
      }, 10);
    }
  };
  return (
    <div ref={container}>
      <NewsCarouselHeading heading={heading} />
      <div className={`myContainer   flex-wrap gap-[24px] flex md:gap-[2.5vw]`}>
        {isLoading ? (
          Array.from({ length: timesToRender }, (_, index) => (
            <NewsCardSkelton key={index} />
          ))
        ) : cards?.length != 0 ? (
          cards?.map((newsCard, index) => (
            <NewsCard2
              img={newsCard?.image?.src}
              alt={newsCard?.image?.alt}
              heading={newsCard.title}
              date={newsCard.date}
              noClamp={true}
              key={newsCard.id}
              slug={newsCard.slug}
              en={en}
              source={newsCard?.source}
            />
          ))
        ) : (
          <h5 className="para26 text-center text-red-600 mx-auto">
            لا توجد أخبار للتاريخ المبحوث!
          </h5>
        )}
      </div>
      <NewsCarouselNavigation
        currentPage={currentPage}
        lastPage={lastPage}
        category={category}
        setPageNumbers={setPageNumbers}
        setLastFetchedPageNumbers={setLastFetchedPageNumbers}
        handleScroll={handleScroll}
        en={en}
        isLoading={isLoading}
      />
    </div>
  );
};

export default NewsCarousel;
