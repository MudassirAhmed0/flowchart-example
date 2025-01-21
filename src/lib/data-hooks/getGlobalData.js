import { getClient } from "../client";
import { globalQuery } from "../queries/globalQuery.js";

const getGlobalData = async (isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
  };
  try {
    const { data } = await getClient().query({
      query: globalQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getGlobalData;
