import sceneIcon from './icons/scene.png';
import toiletIcon from './icons/wc.png';
import restaurationIcon from './icons/restauration.png';
import userIcon from './icons/location-marker.png';
import medicalIcon from './icons/premiers-secours.png';
import L from 'leaflet';

const iconMappings = {
  scene: new L.Icon({
    iconUrl: sceneIcon,
    iconSize: [45, 45],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  restauration: new L.Icon({
    iconUrl: restaurationIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  toilets: new L.Icon({
    iconUrl: toiletIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  user: new L.Icon({
    iconUrl: userIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
  medical: new L.Icon({
    iconUrl: medicalIcon,
    iconSize: [35, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  }),
};

export default iconMappings;
