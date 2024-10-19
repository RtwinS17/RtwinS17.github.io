import { Link } from "react-router-dom"
import './Discover.style.css';

const weeks = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
const artists = [
    {
        groupName: "Kung-Fu Minou",
        genre: "Minoutesque"
    },
    {
        groupName: "Tatie José",
        genre: "Hard"
    },
    {
        groupName: "Hardy Potter",
        genre: "Metal"
    },
    {
        groupName: "Tatie Josie",
        genre: "Rap"
    },
    {
        groupName: "Kendji Chirac",
        genre: "Droite"
    }
]


export const Discover = () => {
    return (
            <div className="h-full grid md:grid-cols-2 grid-cols-1 gap-4 p-2 overflow-y-auto [&>*]:h-full [&>*]:flex [&>*]:flex-col [&>*]:justify-between [&>*]:gap-4 discoverContainer">
                <article>
                    <h2 className="text-center p-2"> Programmation </h2>
                    <section className="mx-4 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-2 text-center progSection">
                        {weeks.map((val) => {
                            return (
                                <Link className="flex items-center justify-center p-2"> {val} </Link>
                            )
                        })}
                    </section>
                    <div className="text-end p-2">
                        <Link to="./programmation" className="p-2 btn-primary"> Voir tout </Link>
                    </div>
                </article>
                <article>
                    <h2 className="text-center p-2"> Artistes </h2>
                    <section className="mx-4 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-2 text-center groupsSection">
                        {artists.map((group) => {
                            return(
                                <>
                                 <Link className="flex flex-col p-2">
                                  <h3 className="groupTitle text-center p-2"> {group.groupName} </h3>
                                  <span className="text-start xl:text-center"> Genre : {group.genre}</span>
                                 </Link>
                                </>
                            )
                        })}
                    </section>
                    <div className="text-end p-2">
                        <Link to='./artists' className="p-2 btn-primary"> Voir tout </Link>
                    </div>
                </article>
            </div>
    )
}