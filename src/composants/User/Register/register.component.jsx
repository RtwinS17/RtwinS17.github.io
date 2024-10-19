import React from "react";
import './register.style.css';

import { RegisterService } from "../../../Service/Register.service";

export const Register = () => {
    const controlRegister = new RegisterService()

    let email = document.getElementById('register-input-email')
    let accountName = document.getElementById('register-input-name')
    let password = document.getElementById('register-input-password')
    let passwordConfirm = document.getElementById('register-input-passwordConfirm')

    let validateEmail = () => {
        let condition = controlRegister.isEmailValid(email.value)
        controlRegister.setStyle(email, condition)
    }

    let validatePassword = () => {
        let condition = controlRegister.isPasswordValid(password.value)
        controlRegister.setStyle(password, condition)
        controlRegister.setPassword(password)
    }

    let confirmPassword = () => {
        let condition = controlRegister.isSamePassword(password.value, passwordConfirm.value)
        controlRegister.setStyle(passwordConfirm, condition)
    }

    let setAccountName = () => {
        controlRegister.setAccountName(accountName.value)
    }

    let submit = () => {
        controlRegister.submit(password.value)
    }

    let reset = () => {
        controlRegister.resetValue()
        email.value = ""
        password.value = ""
        passwordConfirm.value = ""
        accountName.value = ""
    }


    return (
        <>
            <div className="register-container md:min-w-[400px] m-auto flex flex-col bg-white p-2 overflow-auto">
                <h2 className=" my-4 text-center"> S'inscrire </h2>

                <form action="register" className="flex flex-col gap-8 items-center">

                    <label htmlFor="register-input-email" className="flex flex-col items-center">
                        <h3>Entrer votre e-mail</h3>
                        <input onInput={validateEmail} id="register-input-email" type="email" placeholder="email@gmail.com" />
                    </label>

                    <label htmlFor="register-input-name" className="flex flex-col items-center">
                        <h3 className="text-center">Entrer un nom de compte</h3>
                        <input id="register-input-name" type="text" onInput={setAccountName} placeholder="Splouch98" />
                    </label>

                    <label htmlFor="register-input-password" className="flex flex-col items-center">
                        <h3>Entrer un mot de passe</h3>
                        <input id="register-input-password" onInput={validatePassword} type="password" className="text-center" />
                    </label>

                    <label htmlFor="register-input-password" className="flex flex-col items-center">
                        <h3>Confirmer le mot de passe</h3>
                        <input id="register-input-passwordConfirm" onInput={confirmPassword} className="text-center" type="password" />
                    </label>
                </form>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 sm:mt-4 items-center">
                    <button id="register-submitForm" type="submit" onClick={submit} className="btn-primary p-2">
                        Valider
                    </button>

                    <button id="register-reset" onClick={reset} className="btn-primary p-2">
                        Réinitialiser
                    </button>
                </div>
            </div>
        </>
    )
}