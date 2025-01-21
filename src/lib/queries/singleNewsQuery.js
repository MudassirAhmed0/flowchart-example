import { newsQuery } from "./newsQuery";

const { gql } = require("@apollo/client");

export const singleNewsQuery = () => {
  const query = gql`
    query NewsSingle($slug: String!, $site: String!) {
      news: entry(slug: $slug, filter: { site: $site }) {
        id
        title
        ... on Entry_News_News {
          slug
          title
          image {
            src
          }
          news_category {
            label
          }
          content
          blueprint
          source
          locale
          published
          last_modified
          date(format: "M d  Y")
          seo_title
          seo_description
          seo_image {
            src(width: 334, height: 223)
          }
        }
      }
    }
  `;
  return query;
};
