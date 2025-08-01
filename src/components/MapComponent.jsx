import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function MapComponent() {

  return (
    <>
    <MapContainer
        center={[-6.20064623039216, 106.79870139190605]}
        zoom={13}
        className='h-[400px] w-full z-0 rounded-4xl'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-6.20064623039216, 106.79870139190605]}>
          <Popup>
            Lokasi Canovio Glasswork <br /> Jakarta, Indonesia.
          </Popup>
        </Marker>
    </MapContainer>
    </>
  )
}