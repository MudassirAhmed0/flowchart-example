import { getClient } from "../client";
import { navQuery } from "../queries/navQuery.js";

const getNavData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: navQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNavData;
