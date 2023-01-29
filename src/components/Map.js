import React from "react";
import "../App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerPosition from "./MarkerPosition";
function Map({ address }) {

    const position = [address.location.lat, address.location.lng] 

  return (
    <>
      <MapContainer center={position} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerPosition position={position}/>
      </MapContainer>
      </>
     
  );
}

export default Map;
