import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
const SingleNewsContainer = ({ data, url, en }) => {
  return (
    <>
      <Header darkMode en={en} hideSwitch />
      <section>
        <div className="myContainer pb-[80px] md:pb-[9.375vw]  pt-[150px] md:pt-[16.6666666667vw]">
          <div className="text-[#4FE0A3] flex items-end md:gap-x-[0.10416666666vw] gap-[6px]  flex-wrap">
            <Link
              href="/"
              className="md:w-[2.5vw] md:h-[2.5vw] w-[34px] h-[34px] relative block flipped"
            >
              <Image src="/images/icons/home.svg" fill alt="home-icon" />
            </Link>
            <img
              src="/images/icons/leftChevronblack.svg"
              alt="Chevron"
              className="md:w-[1.66666666667vw] w-[24px] flipped"
            />
            <Link href={"/news"} className="para24 font-[700]">
              الأخبار
            </Link>
            <img
              src="/images/icons/leftChevronblack.svg"
              alt="Chevron"
              className="md:w-[1.66666666667vw] w-[24px] flipped"
            />
            <span className="para24 font-[700]">{data?.news?.title}</span>
          </div>
          <img
            src={
              data?.news?.image?.src
                ? data?.news?.image?.src
                : "/images/news/newsPlaceholder.jpg"
            }
            alt={
              data?.news?.image?.alt
                ? data?.news?.image?.alt
                : data?.news?.title
            }
            className="w-full h-[240px] md:h-[41.3541666667vw] object-contain f  md:pt-[3.75vw]  pt-[40px]"
          />
          <div className="flex justify-between  pt-[40px]  md:pt-[2.8125vw]  flex-wrap md:gap-[unset] gap-[16px] items-center">
            <span className="text-[#4FE0A3] para24">{data?.news?.date}</span>
            <div className="flex items-center gap-x-[16px] md:gap-x-[0.625vw]">
              <a
                href={`https://twitter.com/intent/tweet?url=${url}`}
                target="_blank"
              >
                <img
                  src="/images/icons/twittergreen.svg"
                  alt="twitter"
                  className=" hover:opacity-[0.7] md:w-[1.66666666667vw] w-[25px]"
                />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                target="_blank"
              >
                <img
                  src="/images/icons/fbgreen.svg"
                  alt="fb"
                  className=" hover:opacity-[0.7] md:w-[1.66666666667vw] w-[25px]"
                />
              </a>
              <a href={`instagram://post`} target="_blank">
                <img
                  src="/images/icons/instagreen.svg"
                  alt="insta"
                  className=" hover:opacity-[0.7] md:w-[1.66666666667vw] w-[25px]"
                />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?url=${url}`}
                target="_blank"
              >
                <img
                  src="/images/icons/linkedingreen.svg"
                  alt="linkedin"
                  className=" hover:opacity-[0.7] md:w-[1.66666666667vw] w-[25px]"
                />
              </a>
            </div>
          </div>
          <div
            className="news__Content"
            dangerouslySetInnerHTML={{ __html: data.news.content }}
          ></div>
          {data.news.source && (
            <a
              href={data.news.source}
              target="_blank"
              className="text22 mt-[3vw] underline underline-offset-2  md:mt-[40px] lin kanim text-[#4FE0A3] hover:opacity-[0.7] flex items-center gap-x-[8px] md:gap-x-[0.6vw]"
            >
              المصدر{" "}
            </a>
          )}
        </div>
      </section>
      <Footer en={en} />
    </>
  );
};

export default SingleNewsContainer;
