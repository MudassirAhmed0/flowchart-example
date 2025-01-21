const LeaderCard = ({ member, index, handleClick, en }) => {
  return (
    <div
      // onClick={() => handleClick(index)}
      key={index}
      data-aos="fade"
      className="md:w-[23.3333333333vw] w-full pointer-events-none  "
    >
      <div className="w-full md:h-[15.5208333333vw] leaderCard overflow-hidden relative">
        <div className="absolute w-full text24 text-white h-full flex items-center justify-center bg-[#244a5480] opacity-[0]  leaderCardOverlay transition-all duration-[500ms]">
          {en ? "Read More" : "المزيد"}
        </div>
        <img
          src={member?.team_members_image?.permalink}
          alt={
            member?.team_members_image?.alt
              ? member?.team_members_image?.alt
              : member?.team_members_name
          }
          loading="lazy"
          className="w-full object-cover "
        />
      </div>
      <div className="mt-[20px] md:mt-[1.25vw]">
        <h5 className="text-[20px] leading-[30px] md:text-[1.66666666667vw] md:leading-[2.5vw] text-[#333333] font-[500]">
          {member?.team_members_name}
        </h5>

        <div
          dangerouslySetInnerHTML={{ __html: member?.team_members_position }}
          className="text20 font-[400] text-[#999999]
            md:mt-[0.72083333333vw] mt-[5px] block"
        ></div>
      </div>
    </div>
  );
};

export default LeaderCard;
