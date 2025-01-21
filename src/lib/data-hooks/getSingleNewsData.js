import { getClient } from "../client";
import { singleNewsQuery } from "../queries/singleNewsQuery";

const getSingleNewsData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    slug,
  };
  try {
    const { data } = await getClient().query({
      query: singleNewsQuery(),
      variables,
      //  // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getSingleNewsData;
