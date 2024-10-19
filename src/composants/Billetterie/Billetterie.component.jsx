import { Link } from "react-router-dom"


import './Billetterie.style.css';

export const Billetterie = () => {
    return (
            <div className="h-full flex flex-col justify-around text-center">
                <h1 className="text-4xl p-4 rounded-3xl billetterieTitle"> Billeterie et tarifs </h1>
                <div>
                    <Link to='https://www.billetweb.fr/nation-sounds' className='btn-secondary bg-Jaune p-4'> Je réserve mon billet</Link>
                </div>
                <section className="text-start p-4 rounded-lg priceContainer">
                    <ul > 
                        <span className="font-bold">🎫 Prix des billets : </span>
                        <li className="px-2 mt-2"> Seul : 10 euros la journée / 15 euros les 2 jours </li>
                        <li className="px-2"> Duo : 15 euros la journée / 28 euros les 2 jours </li>
                        <li className="px-2"> Groupe : devis personnalisé sur demande </li>
                    </ul>
                </section>
            </div>
    )
}