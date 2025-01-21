import React from "react";
import ExplorationShieldMarker from "./ExplorationShieldMarker";
import ExplorationLicenseMarker from "./ExplorationLicenseMarker";
import ExplorationPlatformMarker from "./ExplorationPlatformMarker";
import ExplorationMineMarkers from "./ExplorationMineMarkers";

const ExplorationMarkers = () => {
  return (
    <>
      <ExplorationShieldMarker />
      <ExplorationLicenseMarker />
      <ExplorationPlatformMarker />
      <ExplorationMineMarkers />
    </>
  );
};

export default ExplorationMarkers;
