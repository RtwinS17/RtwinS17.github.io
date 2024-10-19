import React, { useState } from 'react';
import filter from './icons/filter.png';

const MapFilter = ({
  showScene,
  setShowScene,
  showRestauration,
  setShowRestauration,
  showToilets,
  setShowToilets,
  showMedical,
  setShowMedical,
}) => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const toggleCheckboxes = () => {
    setShowCheckboxes(!showCheckboxes);
  };

  return (
    <div key="mapFilterContainer" id="map-filter-container">
        <img
          src={filter}
          width={45}
          height={45}
          id="filter"
          alt="filter icon"
          onClick={toggleCheckboxes}
        />
        {showCheckboxes && (
          <div className="grid-cols-1 bg-white/75 p-2 ml-4 mt-8">
            <p className="font-bold mb-1">Filtrer</p>
            <label className="flex items-baseline mr-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showScene}
                onChange={() => setShowScene(!showScene)}
                className="m-2 input-map"
              />
              <span>Scènes</span>
            </label>
            <label className="flex items-baseline mr-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showRestauration}
                onChange={() => setShowRestauration(!showRestauration)}
                className="m-2 input-map"
              />
              <span>Buvette & Restauration</span>
            </label>
            <label className="flex items-baseline mr-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showToilets}
                onChange={() => setShowToilets(!showToilets)}
                className="m-2 input-map"
              />
              <span>Toilettes</span>
            </label>
            <label className="flex items-baseline mr-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showMedical}
                onChange={() => setShowMedical(!showMedical)}
                className="m-2 input-map"
              />
              <span>Poste de secours</span>
            </label>
          </div>
        )}
      </div>
  );
};

export default MapFilter;
