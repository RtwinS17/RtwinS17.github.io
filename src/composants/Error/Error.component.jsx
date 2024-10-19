
import './Error.style.css';

export const Error = () => {
    return(
         <div className="h-full flex flex-col gap-4 items-center p-4 errorContainer">
            <h1> Une erreur est apparue</h1>
            <span> Essayer de rafraîchir la page </span>
            <div className="w-full h-full errorPicture"></div>
         </div>
    )
}