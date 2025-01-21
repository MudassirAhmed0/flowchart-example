import React from "react";

const MobileMarkers = ({ markersData }) => {
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
            x={+marker.cx - 21}
            y={+marker.cy - 21}
            width="42"
            height="42"
            fill="url(#pattern0_1823_23938)"
            className="pointer-events-none"
          />

          <circle
            data-aos="fade"
            data-aos-anchor="#summaryMap"
            data-aos-delay={marker.delay}
            cx={marker.cx}
            cy={marker.cy}
            r="9.08666"
            fill="#C76210"
            className="peer transition-all duration-500 hover:fill-[#6B634B]"
          />
          <image
            href={
              marker.image || "/images/maps/hammer.svg"
            } /* Replace with your image URL */
            x={+marker.cx - 6} /* Adjust to fit circle dimensions */
            y={+marker.cy - 6}
            width="12" /* Matches the rect size */
            height="12"
            clipPath={`url(#clip-circle-${index})`} /* Apply the clipping path */
            className="pointer-events-none"
          />
          {marker?.title && marker?.desc && (
            <g className="opacity-[0] peer-hover:opacity-[1] transition-all duration-500 pointer-events-none">
              <line
                x1={marker.cx}
                y1={+marker.cy + 6}
                x2={marker.cx}
                y2={+marker.cy + 50}
                stroke="#6B634B"
                stroke-width="2"
                class="connector-line"
              />
              <rect
                x={"6%"}
                y={+marker.cy + 50}
                width="88%"
                height="210"
                fill="#6B634B"
                rx="5"
                class="info-box"
              />
              <text
                x={"8.5%"}
                y={+marker.cy + 80}
                fill="white"
                font-size="22"
                class="info-box"
              >
                {wrapText(marker.title, 30).map((line, lineIndex) => (
                  <tspan
                    key={lineIndex}
                    x={"8.5%"}
                    dy={lineIndex === 0 ? "0" : "22px"}
                  >
                    {line}
                  </tspan>
                ))}
              </text>
              <text
                x={"8.5%"}
                y={
                  +marker.cy +
                  75 +
                  wrapText(marker.title, 30).length * 22 + // Adjust y based on the number of lines in the title
                  10 // Add some padding
                }
                fill="white"
                width={610}
                font-size="14"
                class="info-box"
              >
                {wrapText(marker.desc, 52).map((line, lineIndex) => (
                  <tspan
                    key={lineIndex}
                    x={"8.5%"}
                    dy={lineIndex === 0 ? "0" : "17px"}
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

export default MobileMarkers;
