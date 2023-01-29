// import { divIcon } from "leaflet";
import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
// import icon from "../images/icon-location.svg";


function MarkerPosition({ position }) {
 

  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
    // eslint-disable-next-line
  }, [position]);
  return (
    <div>
      <Marker position={position}>
        <Popup>searched ip address</Popup>
      </Marker>
    </div>

  );
}

export default MarkerPosition;
