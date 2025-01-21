import React, { useState, useRef, useEffect } from "react";
import { Copy, MessageCircle, Facebook, Twitter, Send } from "lucide-react";

const SharePanel = ({
  title,
  message,
  url,
  isOpen = false,
  onClose,
  en = true, // English language by default
  className = "", // Additional classes for the container
}) => {
  const [copied, setCopied] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const panelRef = useRef(null);

  const formattedText = `${title}\n${message}\n\n${url}`;

  const handleSocialShare = (platform) => {
    const encodedText = encodeURIComponent(formattedText);
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    let shareUrl;

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=500,scrollbars=yes");
  };

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  const socialButtons = [
    {
      name: "WhatsApp",
      arabicName: "واتساب",
      icon: MessageCircle,
      color: "#25D366",
      background: "#E6F9EF",
      onClick: () => handleSocialShare("whatsapp"),
    },
    {
      name: "Facebook",
      arabicName: "فيسبوك",
      icon: Facebook,
      color: "#1877F2",
      background: "#E8F1FD",
      onClick: () => handleSocialShare("facebook"),
    },
    {
      name: "Twitter",
      arabicName: "تويتر",
      icon: Twitter,
      color: "#1DA1F2",
      background: "#E8F5FE",
      onClick: () => handleSocialShare("twitter"),
    },
    {
      name: "Telegram",
      arabicName: "تليجرام",
      icon: Send,
      color: "#0088cc",
      background: "#E5F3FA",
      onClick: () => handleSocialShare("telegram"),
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className={`space-y-4 overflow-hidden transition-all duration-300 ${className} ${
        isClosing ? "animate-fade-out" : "animate-fade-in"
      }`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {socialButtons.map((button) => {
          const Icon = button.icon;
          return (
            <button
              key={button.name}
              onClick={button.onClick}
              className="flex flex-col items-center p-4 rounded-lg transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: button.background }}
            >
              <Icon size={24} color={button.color} className="mb-2" />
              <span
                className="text-sm font-medium"
                style={{ color: button.color }}
              >
                {en ? button.name : button.arabicName}
              </span>
            </button>
          );
        })}
      </div>
      <button
        onClick={handleCopyLink}
        className="w-full py-3 px-4 bg-[#F5F5F5] text-[#4A4A4A] rounded-lg 
                 hover:bg-[#E5E5E5] transition-all duration-200
                 flex items-center justify-center gap-2"
      >
        {!copied && <Copy className="w-4 h-4" />}
        <span className="font-medium">
          {copied
            ? en
              ? "Copied!"
              : "تم النسخ!"
            : en
            ? "Copy Link"
            : "نسخ الرابط"}
        </span>
      </button>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default SharePanel;
