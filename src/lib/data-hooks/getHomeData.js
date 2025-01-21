import { getClient } from "../client";
import { homeQuery } from "../queries/homeQuery.js";

const getHomeData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    slug,
  };
  try {
    const { data } = await getClient().query({
      query: homeQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getHomeData;
