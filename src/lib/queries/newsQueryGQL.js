import { newsQuery } from "./newsQuery";

const { gql } = require("@apollo/client");

export const newsQueryGQL = () => {
  const query = gql`
    ${newsQuery}
  `;
  return query;
};
