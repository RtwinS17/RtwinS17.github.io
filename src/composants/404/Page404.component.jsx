import { Link } from "react-router-dom"

import './Page404.style.css'


export const Page404 = () => {
    return (
   
            <div className="flex flex-col h-full justify-around items-center svg404 text-sm md:text-md">
                <h1 className="text-4xl p-4 rounded-lg decoration-2 underline"> 404 </h1>
                <span className="h-32 flex items-center p-8 rounded-lg text-center container404"> La page que vous demandez n'existe pas ! </span>
                <Link to='..' className="btn-secondary p-4"> Revenir à l'accueil </Link>
            </div>

    )
}