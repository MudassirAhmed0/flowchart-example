import React from "react";

const Markers = ({ markersData }) => {
  const wrapText = (text, maxCharsPerLine) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
      if ((currentLine + word).length <= maxCharsPerLine) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    });

    if (currentLine) lines.push(currentLine.trim());
    return lines;
  };

  return (
    <>
      {markersData.map((marker, index) => (
        <g key={index} className="circle-group">
          <defs>
            <clipPath id={`clip-circle-${index}`}>
              <circle
                cx={marker.cx}
                cy={marker.cy}
                r="16" /* Radius matching the rect */
              />
            </clipPath>
          </defs>

          <rect
            opacity="0.3"
            x={+marker.cx - 41}
            y={+marker.cy - 41}
            width="82"
            height="82"
            fill="url(#pattern0_1823_23938)"
            className="pointer-events-none"
          />

          <circle
            data-aos="fade"
            data-aos-anchor="#summaryMap"
            data-aos-delay={marker.delay}
            cx={marker.cx}
            cy={marker.cy}
            r="19.4531"
            fill="#C76210"
            className="peer transition-all duration-500 hover:fill-[#6B634B]"
          />
          <image
            href={
              marker.image || "/images/maps/hammer.svg"
            } /* Replace with your image URL */
            x={+marker.cx - 12} /* Adjust to fit circle dimensions */
            y={+marker.cy - 12}
            width="24" /* Matches the rect size */
            height="24"
            clipPath={`url(#clip-circle-${index})`} /* Apply the clipping path */
            className="pointer-events-none"
          />
          {marker?.title && marker?.desc && (
            <g className="opacity-[0] peer-hover:opacity-[1] transition-all duration-500 pointer-events-none">
              <line
                x1={+marker.cx + 9}
                y1={marker.cy}
                x2={+marker.cx + 200}
                y2={marker.cy}
                stroke="#6B634B"
                stroke-width="2"
                class="connector-line"
              />
              <rect
                x={+marker.cx + 200}
                y={+marker.cy - 40}
                width="690"
                height="238"
                fill="#6B634B"
                rx="5"
                class="info-box"
              />
              <text
                x={+marker.cx + 240}
                y={marker.cy}
                fill="white"
                font-size="20"
                class="info-box"
              >
                {marker.title}
              </text>
              <text
                x={+marker.cx + 240}
                y={+marker.cy + 50}
                fill="white"
                width={610}
                font-size="18"
                class="info-box"
              >
                {wrapText(marker.desc, 80).map((line, lineIndex) => (
                  <tspan
                    key={lineIndex}
                    x={+marker.cx + 240}
                    dy={lineIndex === 0 ? "0" : "27px"}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          )}
        </g>
      ))}
    </>
  );
};

export default Markers;
