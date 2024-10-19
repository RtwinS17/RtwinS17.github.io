import React, { useState } from 'react';
import festivalLocations from './festivalLocation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import './map.style.css';
import MapFilter from './mapFilter';
import iconMappings from './iconMappings';
//import LocationMarker from './locationMarker';

const Map = () => {
  const mapCenter = [48.83040876690479, 2.441774125391102];
  const mapZoom = 14;

  // const lightTileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  const darkTileLayer = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=8251f78c-723d-42a3-97cb-eef6516cb229';

  const [showScene, setShowScene] = useState(true);
  const [showRestauration, setShowRestauration] = useState(true);
  const [showToilets, setShowToilets] = useState(true);
  const [showMedical, setShowMedical] = useState(true);

  return (
      <div className='sm:w-full'>
        <MapFilter
          showScene={showScene}
          setShowScene={setShowScene}
          showRestauration={showRestauration}
          setShowRestauration={setShowRestauration}
          showToilets={showToilets}
          setShowToilets={setShowToilets}
          showMedical={showMedical}
          setShowMedical={setShowMedical}
        />
        <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false}>
          <TileLayer
            TileLayer
            url={darkTileLayer}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'

          />
          <MarkerClusterGroup
            chunkedLoading>
            {festivalLocations.map((location, index) => {
              if (
                (location.type === 'scene' && showScene) ||
                (location.type === 'restauration' && showRestauration) ||
                (location.type === 'toilets' && showToilets) ||
                (location.type === 'medical' && showMedical)
              ) {
                return (
                  <Marker
                    key={index}
                    position={location.coordinates}
                    icon={iconMappings[location.type]}
                  >
                    {/* <LocationMarker /> */}
                    <Popup>
                      <div className="text-center font-semibold">{location.title}</div>
                    </Popup>
                  </Marker>
                );
              } else {
                return null;
              }
            })}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
  );
};

export default Map;
