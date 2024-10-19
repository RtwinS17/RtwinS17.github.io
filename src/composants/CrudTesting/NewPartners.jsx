import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewPartners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = () => {
        const categoryId = 8; // ID de la catégorie Partenaires sur WordPress
        axios.get(`https://nationsounds.online/wp-json/wp/v2/posts?categories=${categoryId}`)
            .then(response => {
                const posts = response.data;
                const mappedPartners = posts.map(post => ({
                    id: post.id,
                    name: post.title.rendered,
                    description: post.excerpt.rendered,
                    website: post.acf.website,  
                    logoUrl: post.acf.logo_url  
                }));
                setPartners(mappedPartners);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>New Partners</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {partners.map(partner => (
                    <li key={partner.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <a href={partner.website} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={partner.logoUrl} 
                                alt={partner.name} 
                                style={{ height: '50px', width: '50px', objectFit: 'cover', marginRight: '10px' }} 
                            />
                        </a>
                        <div>
                            <a href={partner.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <strong>{partner.name}</strong>
                            </a>
                            <div dangerouslySetInnerHTML={{ __html: partner.description }} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewPartners;
