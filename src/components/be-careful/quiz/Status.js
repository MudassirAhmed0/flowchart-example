import React, { useState } from "react";
import Lottie from "react-lottie-player";
import { X, Share2, ThumbsUp } from "lucide-react";
import SharePanel from "./SharePanel";

const Status = ({
  json,
  color,
  msgHead,
  msgDes,
  showStatus,
  handleReset,
  en,
  shareMessage,
  socialName,
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const baseShareUrl = currentUrl.split("#")[0];
  const shareUrl = `${baseShareUrl}#quiz`;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      handleReset();
      setIsClosing(false);
    }, 300);
  };

  return (
    <div
      className={`
        fixed inset-0 z-[50] flex justify-center items-center
        transition-all duration-300 ease-in-out
        ${
          showStatus
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
        ${isClosing ? "scale-95" : "scale-100"}
      `}
    >
      <div
        className={`
          fixed inset-0 bg-black
          transition-opacity duration-300
          ${showStatus ? "bg-opacity-50" : "bg-opacity-0"}
        `}
        onClick={handleClose}
      />
      <div className="relative z-[51] w-[90%] md:w-[35.6770833333vw] bg-white rounded-[14px] md:rounded-[1vw] shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-4 border-b border-gray-200 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#4A4A4A] hover:text-[#89191B] transition-colors duration-300"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-16 h-16 md:w-[8vw] md:h-[8vw] bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <ThumbsUp className="w-8 h-8 md:w-[3.5vw] md:h-[3.5vw] text-green-500" />
          </div>
          <h6 style={{ color: color }} className="heading3 mt-4 text-center">
            {msgHead} @{socialName}
          </h6>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-[2vw]">
          <p className="text-[#4A4A4A] heading4 font-[500] mb-6 text-center">
            {msgDes}
          </p>
          <div className="w-full space-y-4">
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className={`
                w-full py-3 px-4 rounded-lg
                transition-all duration-300
                flex items-center justify-center gap-3
                ${
                  isShareOpen
                    ? "bg-[#E5E5E5] text-[#4A4A4A]"
                    : "bg-[#F5F5F5] text-[#4A4A4A] hover:bg-[#E5E5E5]"
                }
              `}
            >
              <Share2 className="w-5 h-5" />
              <span className="font-medium">
                {en ? "Share this quiz" : "مشاركة هذا الاختبار"}
              </span>
            </button>
            <SharePanel
              title={msgHead}
              message={shareMessage}
              url={shareUrl}
              isOpen={isShareOpen}
              onClose={() => setIsShareOpen(false)}
              en={en}
            />
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={handleClose}
            className="w-full py-3 px-4 bg-[#89191B] text-white rounded-lg 
                     hover:bg-[#6E1416] transition-all duration-200
                     flex items-center justify-center"
          >
            <span className="font-medium">{en ? "Dismiss" : "إغلاق"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;
