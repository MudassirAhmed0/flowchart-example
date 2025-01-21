const { gql } = require("@apollo/client");

export const homeQuery = () => {
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
        ... on Entry_Pages_Home {
          seo_title
          seo_description
          seo_image {
            extension
            src(width: 1200, height: 628)
          }
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
          be_careful_title
          be_careful_description
          be_careful_link
          be_careful_button_label
          be_careful_has_video
          be_careful_video_cover {
            extension
            src(width: 200, height: 200)
            ... on Asset_Assets {
              alt
            }
          }
          be_careful_has_youtube_video
          be_careful_youtube_video
          be_careful_video_file {
            extension
            permalink
          }
          be_carefull_background_video {
            extension
            permalink
          }
          
          about_section {
            ... on Set_AboutSection_Section {
              section_icon {
                extension
                permalink
                ... on Asset_Assets {
                  alt
                }
              }
              section_title
              section_descript
              type
            }
          }
          change_title
          change_desc
          change_image {
            extension
            src(height: 628, width: 730)
            ... on Asset_Assets {
              alt
            }
          }
          faq_heading
          ques {
            ... on Set_Ques_NewQuestion {
              question_text
              answer_text
              type
              id
            }
          }
        }
      }
    }
  `;
  return query;
};
