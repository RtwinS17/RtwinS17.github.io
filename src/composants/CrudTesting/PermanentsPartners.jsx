import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PermanentPartners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        // Récupération des partenaires depuis le backend
        fetchPartners();
    }, []);

    const fetchPartners = () => {
        axios.get('/api/partenaires')
            .then(response => setPartners(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Permanent Partners</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {partners.map(partner => (
                    <li key={partner.id} style={{ marginBottom: '10px' }}>
                        <img src={partner.logoUrl} alt={partner.name} style={{ height: '50px', marginRight: '10px' }} />
                        {partner.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PermanentPartners;
