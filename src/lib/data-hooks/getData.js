import getBeCarefulData from "./getBeCarefulData.js";
import getLeaderShipData from "./getLeaderShipData.js";
import getNewsPage from "./getNewsPage.js";

const getData = async (slug, pages, isAr) => {
  const handleData = async (blueprint) => {
    switch (blueprint) {
      case "be_careful":
        return await getBeCarefulData(slug, isAr);

      case "leadership":
        return await getLeaderShipData(slug, isAr);

      case "news_page":
        return await getNewsPage(slug, isAr);
    }
  };

  for (const page of pages) {
    if (page.slug === slug) {
      const data = await handleData(page.blueprint);
      return data;
    }
  }
  return slug;
};

export default getData;
