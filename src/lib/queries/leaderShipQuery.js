const { gql } = require("@apollo/client");

export const leaderShipQuery = () => {
  const query = gql`
    query Page($slug: String!, $site: String!) {
      page: entry(slug: $slug, site: $site, collection: "pages") {
        title
        slug
        id
        published
        status
        blueprint
        locale
        ... on Entry_Pages_Leadership {
          title
          banner_title
          banner_description
          banner_image {
            extension
            src(width: 1920, height: 1080)
          }
          has_video_banner
          have_mobile_video_banner
          mobile_video_banner {
            extension
            permalink
          }
          have_mobile_banner
          mobile_banner_image {
            extension
            src(width: 390, height: 844)
            ... on Asset_Assets {
              alt
            }
          }
          banner_video_file {
            extension
            permalink
          }
          seo_title
          seo_description
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
          team_members_title
          team_members {
            ... on Set_TeamMembers_NewSet {
              team_members_name
              team_members_position
              team_members_bio
              type
              team_members_image {
                extension
                permalink
                ... on Asset_Assets {
                  alt
                }
              }
            }
          }
        }
      }
    }
  `;
  return query;
};
