import React from 'react';
import PermanentPartners from './PermanentPartners';
import NewPartners from './NewPartners';

function Partners() {
    return (
        <div style={{ margin: '20px' }}>
            <h1>Partners Management</h1>
            <PermanentPartners />
            <NewPartners />
        </div>
    );
}

export default Partners;
