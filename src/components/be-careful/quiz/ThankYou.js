import React, { useState } from "react";
import { ThumbsUp, Share2 } from "lucide-react";
import SharePanel from "./SharePanel";

const ThankYou = ({
  onShare,
  en,
  shareTitle = "", // Add title for sharing
  shareMessage = "", // Add message for sharing
  msgHead = "",
  msgDes = "",
  socialName,
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseShareUrl = currentUrl.split("#")[0];
  const shareUrl = `${baseShareUrl}#quiz`;

  const handleShareClick = () => {
    setIsShareOpen(!isShareOpen);
    if (onShare) onShare();
  };

  return (
    <div className="bg-white rounded-[14px] md:rounded-[1vw] p-6 md:p-[2vw] text-center my-8">
      <div className="w-16 h-16 md:w-[8vw] md:h-[8vw] bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-[1vw]">
        <ThumbsUp className="w-8 h-8 md:w-[3.5vw] md:h-[3.5vw] text-green-500" />
      </div>
      <h2 className="text-2xl md:text-[1.5vw] font-bold text-[#4A4A4A] mb-2 md:mb-[0.5vw]">
        {msgHead} @{socialName}
      </h2>
      <p className="text-[#4A4A4A] mb-4 md:mb-[1vw]">{msgDes}</p>
      <div className="space-y-4">
        <button
          onClick={handleShareClick}
          className={`
            bg-[#F5F5F5] text-[#4A4A4A] py-2 px-4 rounded-lg 
            hover:bg-[#E5E5E5] transition-all duration-300 
            flex items-center justify-center gap-2 mx-auto
            ${isShareOpen ? "bg-[#E5E5E5]" : ""}
          `}
        >
          <Share2 className="w-5 h-5" />
          <span>{en ? "Share Results" : "مشاركة النتائج"}</span>
        </button>
        <SharePanel
          title={shareTitle || (en ? "Quiz Results" : "نتائج الاختبار")}
          message={
            shareMessage ||
            (en ? "Check out my quiz results!" : "شاهد نتائج اختباري!")
          }
          url={shareUrl}
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          en={en}
          className="max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default ThankYou;
