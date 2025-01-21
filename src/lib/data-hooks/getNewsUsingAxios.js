import { newsQuery } from "../queries/newsQuery";
import axiosRequest from "./axiosRequest";

const getNewsUsingAxios = async (
  category,
  current_page,
  isEn,
  publish_date
) => {
  let formattedDate;
  if (publish_date) {
    if (publish_date?.format) {
      formattedDate = publish_date.format("YYYY-MM-DD");
    }
  }
  const variables = {
    limit: 8,
    current_page,
    // site: isEn ? "default" : "arabic",
    site: "default",
    category,
    publish_date: formattedDate ? formattedDate : publish_date
  };
  const reqData = JSON.stringify({
    query: newsQuery,
    variables: variables
  });
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://backend.saudibanks.com.sa/graphql",
    headers: {
      "Content-Type": "application/json"
    },
    data: reqData
  };
  const data = await axiosRequest(config);
  return data;
};

export default getNewsUsingAxios;
