const { gql } = require("@apollo/client");

export const recentNewsQuery = () => {
  const query = gql`
    query News($site: String!) {
      news: entries(
        collection: "news"
        page: 1
        limit: 3
        sort: ["date desc"]
        filter: { site: $site }
      ) {
        current_page
        total
        last_page
        has_more_pages
        data {
          id
          title

          ... on Entry_News_News {
            slug
            title
            news_category {
              label
            }
            image {
              src(width: 1200, height: 400)
            }
            blueprint
            locale
            published
            last_modified
            date(format: "d M Y")
          }
        }
      }
    }
  `;
  return query;
};
