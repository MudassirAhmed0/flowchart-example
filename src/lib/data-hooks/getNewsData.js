import { getClient } from "../client";
import { newsQueryGQL } from "../queries/newsQueryGQL";

const getNewsData = async (current_page, category, isAr, publish_date) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    current_page,
    category,
    limit: 8,
    publish_date,
  };
  try {
    const { data } = await getClient().query({
      query: newsQueryGQL(),
      variables,
      //  // context: { tags: ["revalidationTag"] },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getNewsData;
