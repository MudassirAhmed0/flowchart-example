import Wrapper from "../common/Wrapper";

const CampaignVideo = ({ backgroundVideo }) => {
  return (
    <Wrapper>
      <video
        src={backgroundVideo}
        muted
        loop
        autoPlay
        playsInline
        className="w-full h-full top-0 left-0 absolute object-cover"
      ></video>
      <div className="campaignOverlay"></div>
    </Wrapper>
  );
};

export default CampaignVideo;
