import { getClient } from "../client";
import { leaderShipQuery } from "../queries/leaderShipQuery.js";

const getLeaderShipData = async (slug, isAr) => {
  const variables = {
    site: isAr ? "arabic" : "default",
    slug,
  };
  try {
    const { data } = await getClient().query({
      query: leaderShipQuery(),
      variables,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export default getLeaderShipData;
