import React, { useState } from 'react';
import { useFetchAdminProgramme } from "../../Service/adminAPI/adminAPI.customHook";
import {adminGroupConcertsByDay, adminFormatTime, adminFormatScene} from "../../Service/Admin_management/adminFormatProg.service";
import { Loading } from '../Loading/Loading.component';
import { Error } from '../Error/Error.component';
import { Link } from 'react-router-dom';

import './programmation.style.css';
import { deleteAdminConcert } from '../../Service/adminAPI/adminAPI.service';

export const AdminProgrammation = () => {
    const { data, loading, error, refetch } = useFetchAdminProgramme();
    const [openDate, setOpenDate] = useState(null);

    if (loading) return (<Loading />);
    if (error || !data) return (<Error />);

    const concertsByDay = adminGroupConcertsByDay(data)

    const toggleDate = (date) => {
        setOpenDate(openDate === date ? null : date);
    };

    const handleDelete = async (concertID) => {
        await deleteAdminConcert(concertID)
        refetch()
    }

    return (
            <div className="h-full flex flex-col p-2 overflow-y-scroll">
                <div className='w-full text-center mb-6'> <Link className='btn-accent p-2' to={"/admin/create_concert"}> Créer un concert </Link></div>
                {Object.keys(concertsByDay).map(date => (
                    <div key={date} className="mb-8">
                        <h2
                            className="programmeTitle rounded cursor-pointer h-16 flex items-center justify-center"
                            onClick={() => toggleDate(date)}
                        >
                            {`${date} (${concertsByDay[date].length} concerts)`}
                        </h2>
                        {openDate === date && (
                            <div className="mt-2 flex overflow-x-auto gap-2">
                                {concertsByDay[date]
                                    .sort((a, b) => new Date(a.Horaire) - new Date(b.Horaire))
                                    .map(concert => (
                                        <>
                                        <div key={concert.id} className="h-full flex flex-col gap-2 p-4 border adminConcertContainer rounded mb-2 min-w-[200px]">
                                            <h3 className="text-lg font-bold">{concert.Groupe}</h3>
                                            <p><strong>Durée :</strong> {concert.Duree}</p>
                                            <p><strong>Horaire :</strong> {adminFormatTime(concert.Horaire)}</p>
                                            <p><strong>Scene :</strong> {adminFormatScene(concert.scene_id)}</p>
                                            <p><strong>Description :</strong> {concert.Descriptif}</p>
                                            <div className='mt-4 flex justify-between'>
                                                <button className='btn-accent p-2' onClick={() => handleDelete(concert.id)}>Supprimer</button>
                                                <Link className='btn-primary p-2' to={"/admin/edit_concert"} state={concert}>Editer</Link>
                                            </div>

                                        </div>
                                        </>
                                    ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
    );
};
