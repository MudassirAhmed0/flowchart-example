import { getClient } from "../client";
import { recentNewsQuery } from "../queries/recentNewsQuery";

const getRecentNewsData = async (isAr) => {
  const variables = {
    site: "default"
  };
  try {
    const { data } = await getClient().query({
      query: recentNewsQuery(),
      variables
      //  // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getRecentNewsData;
