import Home from "@/components/home/Index";
import Layout from "@/components/layout/Layout";
import getHomeData from "@/lib/data-hooks/getHomeData";

export const revalidate = 432000;

export async function generateMetadata({ params }, parent) {
  // fetch data
  const data = await getHomeData("home");
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
      ? "Saudi Banks - " + data?.page?.seo_title
      : "Saudi Banks - " +  data?.page?.title
      ? "Saudi Banks - " + data?.page?.title
      : previousTitle,
    description: data?.page?.seo_description
      ? data?.page?.seo_description
      : previousDescription,
    openGraph: {
      title: data?.page?.seo_title
        ? "Saudi Banks - " +  data?.page?.seo_title
        : "Saudi Banks - " + data?.page?.title
        ? "Saudi Banks - " + data?.page?.title
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
        ? "Saudi Banks - " + data?.page?.title
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

export default async function HomePage() {
  const data = await getHomeData("home");

  return (
    <div className="ltr">
      <Layout en>
        <Home data={data?.page} en />
      </Layout>
    </div>
  );
}
