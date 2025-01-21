import React, { useEffect, useRef } from "react";
import NewsCard2 from "../common/NewsCard2";
import NewsGridActions from "./NewsGridActions";
import NewsCardSkelton from "../common/NewsCardSketon";

const NewsGrid = ({
  heading,
  data,
  setPageNumbers,
  category,
  isLoading,
  setLastFetchedPageNumbers,
  en,
}) => {
  const timesToRender = 8;
  const container = useRef(null);
  const handleScroll = () => {
    if (container.current) {
      container.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div ref={container} className="myContainer md:pb-[9.375vw] pb-[80px]">
        <div>
          <div className="md:py-[3.75vw] py-[40px]">
            <h5 className='after:content-[""] after:w-[70%] after:md:w-[17.8125vw] after:md:h-[0.10416666666vw] after:h-[2px] after:bg-[#244A54] after:absolute after:md:bottom-[-0.78125vw] after:bottom-[-8px] after:right-0 relative heading4 text-[#333333] font-[500]'>
              {heading}
            </h5>
          </div>
          <div className="flex-wrap gap-y-[30px] flex md:gap-y-[2.5vw] ">
            {isLoading
              ? Array.from({ length: timesToRender }, (_, index) => (
                  <NewsCardSkelton grid key={index} />
                ))
              : data?.news?.data.map((newsCard, index) => (
                  <NewsCard2
                    img={newsCard?.image?.src}
                    alt={newsCard?.image?.alt}
                    heading={newsCard.title}
                    date={newsCard.date}
                    key={newsCard.id}
                    grid={true}
                    paragraph={newsCard.content}
                    slug={newsCard.slug}
                    en={en}
                    source={newsCard.source}
                  />
                ))}
          </div>
          <NewsGridActions
            currentPage={data?.news.current_page}
            lastPage={data?.news.last_page}
            setPageNumbers={setPageNumbers}
            category={category}
            setLastFetchedPageNumbers={setLastFetchedPageNumbers}
            handleScroll={handleScroll}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
