// Call to get all concert from back
export const fetchAdminProgramme = async () => {
    try {
        const response = await fetch('http://localhost:8000/api/concerts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};


// Call to create concert in back
export const postAdminConcert = async (concert) => {
    try {
        const response = await fetch('http://localhost:8000/api/concerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(concert)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Call to delete a concert in back
export const deleteAdminConcert = async (concertID) => {
    try {
        const response = await fetch(`http://localhost:8000/api/concerts/${concertID}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

// Call to edit a concert in back
export const editAdminConcert = async (concertID, concertData) => {
    try {
        const response = await fetch(`http://localhost:8000/api/concerts/${concertID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(concertData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};