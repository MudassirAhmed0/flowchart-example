import BeCareful from "@/components/be-careful/Index";
import getData from "@/lib/data-hooks/getData";
import Leadership from "@/components/leadership/Index";
import getPagesData from "@/lib/data-hooks/getPagesData";
import News from "@/components/news/Index";
import getRecentNewsData from "@/lib/data-hooks/getRecentNewsData";
import getNewsData from "@/lib/data-hooks/getNewsData";
import Layout from "@/components/layout/Layout";
import Error404 from "../not-found";
import getGlobalData from "@/lib/data-hooks/getGlobalData";

export const revalidate = 432000;

export async function generateMetadata({ params }, parent) {
  // fetch data
  const {
    pages: { data: pagesData },
  } = await getPagesData("arabic");
  const slug = params.slug;
  const data = await getData(slug, pagesData, "arabic");
  const previousImages = (await parent).openGraph?.images || [];
  const previousTitle = (await parent).title;
  const previousDescription = (await parent).description;
  let newImages;
  if (data?.page?.seo_image?.src) {
    newImages = [data?.page?.seo_image?.src, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: data?.page?.seo_title
      ? data?.page?.seo_title
      : data?.page?.title
      ? "البنوك السعودية - " + data?.page?.title
      : previousTitle,
    description: data?.page?.seo_description
      ? data?.page?.seo_description
      : previousDescription,
    openGraph: {
      title: data?.page?.seo_title
        ? data?.page?.seo_title
        : data?.page?.title
        ? "البنوك السعودية - " + data?.page?.title
        : previousTitle,
      description: data?.page?.seo_description
        ? data?.page?.seo_description
        : previousDescription,
      images: [...newImages],
      // width: 334,
      // height: 223,
    },
    twitter: {
      title: data?.page?.seo_title
        ? data?.page?.seo_title
        : data?.page?.title
        ? "البنوك السعودية - " + data?.page?.title
        : previousTitle,
      description: data?.page?.seo_description
        ? data?.page?.seo_description
        : previousDescription,
      images: [...newImages],
      // width: 334,
      // height: 223,
    },
  };
}

const Page = async ({ params, searchParams }) => {
  const {
    pages: { data: pagesData },
  } = await getPagesData("arabic");
  const slug = params.slug;
  const global_settings = await getGlobalData(true);
  const data = await getData(slug, pagesData, "arabic");
  switch (data?.page?.blueprint) {
    case "be_careful":
      return (
        <div className="rtl">
          <Layout>
            <BeCareful
              data={data?.page}
              global={global_settings}
              quizData={data?.questions}
            />
          </Layout>
        </div>
      );

    case "leadership":
      return (
        <div className="rtl">
          <Layout>
            <Leadership data={data?.page} />
          </Layout>
        </div>
      );

    case "news_page":
      const currentDate = searchParams.date;
      const recentData = await getRecentNewsData("arabic");
      const data1 = await getNewsData(
        searchParams.c1Page ? +searchParams.c1Page : 1,
        "saudi_banking_news",
        false,
        currentDate
      );
      const data2 = await getNewsData(
        searchParams.c2Page ? +searchParams.c2Page : 1,
        "today_news",
        false,
        currentDate
      );
      const data3 = await getNewsData(
        searchParams.c3Page ? +searchParams.c3Page : 1,
        "latest_tweets",
        false,
        currentDate
      );
      return (
        <div className="rtl">
          <Layout hideSwitch>
            <News
              recentData={recentData}
              currentDate={currentDate}
              data={data1}
              data2={data2}
              data3={data3}
              pageData={data?.page}
            />
          </Layout>
        </div>
      );
  }

  return (
    <>
      <Error404 />
    </>
  );
};

export default Page;
