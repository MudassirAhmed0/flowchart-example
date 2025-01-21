"use client";
import Hero from "./Hero";
import Campaign from "./Campaign";
import AboutSection from "./AboutSection";
import ChangeSection from "./ChangeSection";
import Faqs from "./Faqs";

const Home = ({ en, data }) => {
  return (
    <>
      <Hero
        en={en}
        img={data?.banner_image?.src}
        mobImage={data?.mobile_banner_image?.src}
        alt={data?.banner_image?.alt}
        title={data?.banner_title}
        desc={data?.banner_description}
        videoData={{
          isVideo: data?.has_video_banner,
          video: data?.banner_video_file?.permalink,
          isMobileVideo: data?.have_mobile_video_banner,
          mobileVIdeo: data?.mobile_video_banner?.permalink,
        }}
      />
      <Campaign
        backgroundVideo={data?.be_carefull_background_video?.permalink}
        en={en}
        videoData={{
          video: data?.be_careful_video_file?.permalink,
          youtubeVideo: data?.be_careful_youtube_video,
          hasYoutubeVideo: data?.be_careful_youtube_video,
          hasVideo: data?.be_careful_has_video,
          cover: data?.be_careful_video_cover?.src,
        }}
        title={data?.be_careful_title}
        link={data?.be_careful_link}
        desc={data?.be_careful_description}
        linkLabel={data?.be_careful_button_label}
      />
      <AboutSection en={en} cards={data?.about_section} />
      <ChangeSection
        title={data?.change_title}
        desc={data?.change_desc}
        img={data?.change_image?.src}
        alt={data?.change_image?.alt}
        en={en}
      />
      <Faqs en={en} title={data?.faq_heading} faqs={data?.ques} />
    </>
  );
};

export default Home;
