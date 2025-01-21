const { gql } = require("@apollo/client");

export const becarefulQuery = () => {
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
        ... on Entry_Pages_BeCareful {
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
            src(width: 390, height: 550)
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
          your_care_title
          your_care_videos {
            ... on Set_YourCareVideos_NewVideos {
              your_care_video_thumb {
                extension
                src(width: 424, height: 320)
                ... on Asset_Assets {
                  alt
                }
              }
              your_care_has_youtube
              your_care_video_file {
                extension
                permalink
              }
              your_care_youtube_link
              type
            }
          }
          typical_ways_title
          typical_ways_carousal {
            ... on Set_TypicalWaysCarousal_NewItem {
              typical_ways_icon {
                extension
                permalink
              }
              typical_ways_title_text
              typical_ways_first_text
              typical_ways_second_text
              type
            }
          }
          animation_title
          animation_desc
          animation_step_1
          animation_step_1_message
          animation_step_2
          animation_step_3
          animation_step_4
          animation_step_5
          animation_step_6
          animation_step_7
          animation_step_8
          animation_step_9
          animation_step_10
          animation_step_11
          avoid_fraud_title
          avoid_fraud_description
          avoid_fraud_carou {
            ... on Set_AvoidFraudCarou_NewSet {
              avoid_fraud_carousal_title
              avoid_fraud_carousal_image {
                extension
                src(width: 424, height: 550)
                ... on Asset_Assets {
                  alt
                }
              }
            }
          }
          protect_community_title
          protect_your_community_list
          protect_community_audit_image {
            extension
            permalink
          }
          protect_community_audit_text
          protect_community_app_image {
            extension
            permalink
          }
          protect_community_app_text
          protect_community_app_icon {
            extension
            permalink
          }
          protect_community_app_number_1
          protect_community_app_message_1
          protect_community_app_number_2
          protect_community_app_message_2
          protect_community_message_icon {
            extension
            permalink
          }
          protect_community_message_text_1
          protect_community_message_text_2
          protect_community_message_text_3
          challenge_awareness_title
          your_experience_title
          your_experience_descr
        }
      }

      questions: terms(taxonomy: "new_questions", filter: { site: $site }) {
        data {
          title
          ... on Term_NewQuestions_NewQuestion {
            question
            show_radio_buttons {
              value
              label
            }
            correct_answer {
              value
              label
            }
            yes_label
            no_label
            maybe_label
            show_corrective_note
            corrective_note
          }
          slug
        }
      }
    }
  `;
  return query;
};
