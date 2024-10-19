import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconMappings from './iconMappings';
import './map.style.css';

const MiniMap = () => {
  const mapCenter = [48.83040876690479, 2.441774125391102];
  const mapZoom = 13;

  return (
    <div className="sm:w-full">
      <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapCenter} icon={iconMappings.scene}>
          <Popup>
            <div className="text-center font-bold">Sound Nation Festival <br /></div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MiniMap;
