import React from 'react';

const InteractiveMap = () => {
    return (
        <div>
            <h1>Carte interactive du concert</h1>
            <iframe 
                src="https://nationsounds.online/carte-du-concert/"
                width="100%"
                height="600"
                style={{ border: 'none' }}
                title="Carte Interactive du Concert"
            ></iframe>
        </div>
    );
};

export default InteractiveMap;
