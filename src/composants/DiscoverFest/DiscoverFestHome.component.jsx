import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConcerts } from './../../appStore/slices/concerts.slice';

export const DiscoverFestHome = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.concerts);

    useEffect(() => {
        dispatch(fetchConcerts());
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1>Concerts</h1>
            <ul>
                {data.map((concert) => (
                    <li key={concert.id}>{concert.Groupe}</li>
                ))}
            </ul>
        </>
    );
};

