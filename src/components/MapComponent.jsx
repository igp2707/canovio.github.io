import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function MapComponent() {
    useEffect(() => {
        // Ensure the map is properly initialized after the component mounts
        document.querySelector('.leaflet-container')?.style.setProperty('height', '400px');
        document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none'  
    }, []);
  return (
    <MapContainer
        center={[-6.20064623039216, 106.79870139190605]}
        zoom={13}
        style={{ width: '100%', zIndex: 0 }}
        className='lg:h-[400px] h-[500px]'>
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
  )
}