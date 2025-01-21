const { gql } = require("@apollo/client");

export const globalQuery = () => {
  const query = gql`
    query GlobalSet($site: String!) {
      globel: globalSet(handle: "global_settings", site: $site) {
        ... on GlobalSet_GlobalSettings {
          site_address
          phone_number
          extension
          email_address
          facebook_url
          twitter_url
          instagram_url
          linkedin_url
          ticktok_url
          youtube_url
          response_title
          response_message
          response_share_message
        }
      }
    }
  `;
  return query;
};
