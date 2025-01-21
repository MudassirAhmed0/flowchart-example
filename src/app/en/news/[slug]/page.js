import getSingleNewsData from "@/lib/data-hooks/getSingleNewsData";
import SingleNewsContainer from "@/components/news/single-news/SingleNewsContainer";

export const revalidate = 432000;

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const { slug } = params;
  const data = await getSingleNewsData(slug, "arabic");
  const previousImages = (await parent).openGraph?.images || [];
  const previousTitle = (await parent).title;
  const previousDescription = (await parent).description;

  let newImages;
  if (data?.news?.seo_image?.path) {
    newImages = [data?.news?.seo_image?.path, ...previousImages];
  } else {
    newImages = [...previousImages];
  }
  return {
    title: data?.news?.seo_title
      ? data?.news?.seo_title
      : data?.news?.title
      ? "Saudi Banks - " + data?.news?.title
      : previousTitle,
    description: data?.news?.seo_description
      ? data?.news?.seo_description
      : previousDescription,
    openGraph: {
      title: data?.news?.seo_title
        ? data?.news?.seo_title
        : data?.news?.title
        ? "Saudi Banks - " + data?.news?.title
        : previousTitle,
      description: data?.news?.seo_description
        ? data?.news?.seo_description
        : previousDescription,
      images: [...newImages],
      width: 334,
      height: 223,
    },
    twitter: {
      title: data?.news?.seo_title
        ? data?.news?.seo_title
        : data?.news?.title
        ? "Saudi Banks - " + data?.news?.title
        : previousTitle,
      description: data?.news?.seo_description
        ? data?.news?.seo_description
        : previousDescription,
      images: [...newImages],
      width: 334,
      height: 223,
    },
  };
}

const SingleNews = async ({ params, en }) => {
  const slug = params.slug;
  const data = await getSingleNewsData(slug, "arabic");
  const url = `https://saudi-banks-frontend.vercel.app/news/${slug}`;
  return (
    <div className="ltr">
      <SingleNewsContainer data={data} url={url} en />
    </div>
  );
};

export default SingleNews;
