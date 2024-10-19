export const adminGroupConcertsByDay = (concerts) => {
    const grouped = {};
    concerts.forEach(concert => {
        const date = new Date(concert.Horaire).toLocaleDateString();
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(concert);
    });
    return grouped;
};

export const adminFormatTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
};

export const adminFormatScene = (sceneID) => {
    switch (sceneID) {
        case 1:
            return 'Principale'
            
        case 2:
            return 'Secondaire'
            
        case 3:
            return 'Electronic Tent'
       
        default:
            break;
    };
};