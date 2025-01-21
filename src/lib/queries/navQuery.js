const { gql } = require("@apollo/client");

export const navQuery = () => {
  const query = gql`
    query MainNav($site: String!) {
      nav: nav(handle: "main_navigation") {
        title
        handle
        tree(site: $site) {
          page {
            title
            entry_id
            url
          }
        }
      }
    }
  `;
  return query;
};
