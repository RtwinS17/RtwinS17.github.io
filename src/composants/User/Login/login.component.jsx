import React from "react";
import './login.style.css';
import AccountIcon from "../../Molecule/Icon/accountPicture-component";
import Map from "../../Map/map";

export const Login = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row h-full loginMain-container py-2">

                <div className="login-container flex flex-col sm:gap-8 sm:basis-2/3 gap-2 sm:gap-6 py-4 rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg justify-center">
                    <div className="flex justify-center">
                        <AccountIcon />
                    </div>
                    <hr className="mx-auto" />

                    <form className="flex flex-col sm:gap-4 w-full items-center" action="">
                        <label htmlFor="">
                            <h3 className="text-center">
                                Nom de compte / Email
                            </h3>
                            <input
                                className="w-full p-2 m-2 rounded-lg"
                                type="email"
                                placeholder="email@gmail.com" />
                        </label>
                        <label htmlFor="">
                            <h3 className="text-center">
                                Mot de passe
                            </h3>
                            <input
                                className="w-full p-2 m-2 rounded-lg"
                                type="password" />
                        </label>
                    </form>

                    <div className="flex justify-center gap-4">
                        <button className="btn-primary py-1 px-2"><p> S'inscrire </p></button>
                        <button className="btn-primary py-1 px-2"><p> Mot de passe oublié </p></button>
                    </div>
                </div>

                <div className="miniMap-container overflow-hidden w-full h-full rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg">
                    <Map></Map>
                </div>
            </div>
        </>
    )
}