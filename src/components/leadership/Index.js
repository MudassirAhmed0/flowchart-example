"use client";
import React from "react";
import SubPageHero from "../common/SubPageHero";
import Leaders from "./Leaders";

const Index = ({ en, data }) => {
  return (
    <>
      <SubPageHero
        img={data?.banner_image?.src}
        mobImage={data?.mobile_banner_image?.src}
        videoData={{
          isVideo: data?.has_video_banner,
          video: data?.banner_video_file?.permalink,
          isMobileVideo: data?.have_mobile_video_banner,
          mobileVIdeo: data?.mobile_video_banner?.permalink,
        }}
        alt={data?.banner_image?.alt}
        span={data?.title}
        heading={data?.banner_title}
        paragraph={data?.banner_description}
        en={en}
      />
      <Leaders
        en={en}
        title={data?.team_members_title}
        teamMembers={data?.team_members}
      />
    </>
  );
};

export default Index;
