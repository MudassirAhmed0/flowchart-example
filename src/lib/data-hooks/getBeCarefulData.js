import { getClient } from "../client";
import { becarefulQuery } from "../queries/becarefulQuery.js";

const getBeCarefulData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    slug,
  };
  try {
    const { data } = await getClient().query({
      query: becarefulQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getBeCarefulData;
