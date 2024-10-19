import { useState, useEffect } from "react";
import { fetchAdminProgramme } from "./adminAPI.service";

export const useFetchAdminProgramme = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetchAdminProgramme();
            setData(response);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = async () => {
        try {
            setLoading(true);
            await fetchData(); // Utilisation de la fonction fetchData pour réexécuter la requête
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, refetch };
};
