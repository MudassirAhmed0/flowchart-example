import DesktopMap from "./DesktopMap";
import ExplorationMarkers from "./ExplorationMarkers";
import Markers from "./Markers";
import MobileMap from "./MobileMap";

const Map = ({ map, isDesktop }) => {
  return (
    <div className="flex w-full">
      {!isDesktop ? <MobileMap map={map} /> : <DesktopMap map={map} />}
    </div>
  );
};

export default Map;
