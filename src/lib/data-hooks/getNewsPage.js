import { getClient } from "../client";
import { newsPageQuery } from "../queries/newsPageQuery.js";

const getNewsPage = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    slug,
  };
  try {
    const { data } = await getClient().query({
      query: newsPageQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNewsPage;
