export class RegisterService {
    constructor() {
        this.conditions = {
            lengthPassword: false,
            samePassword: false,
            hasAccountName: false,
            hasEmail: false,
            submitPossible: false
        };
        this.account = {
            email: null,
            accountName: null,
            password: null
        };
    }

    isEmailValid(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let validateEmail = regex.test(email)

        if (validateEmail) {
            this.conditions.hasEmail = true;
            this.account.email = email
            return true
        } return this.conditions.hasEmail = false, this.account.email = '', false; // Utilisez hasEmail au lieu de email
    }

    isPasswordValid(password) {
        let passLength = password.length
        if (passLength >= 7) {
            this.conditions.lengthPassword = true
            return true
        } return this.conditions.lengthPassword = false, false
    }

    isSamePassword(firstPassword, verifyPassword) {
        if (firstPassword === verifyPassword) {
            this.conditions.samePassword = true
            return true
        } return this.conditions.samePassword = false, false;
    }

    setPassword(password) {
        if (this.conditions.lengthPassword && this.conditions.samePassword) {
            this.account.password = password
        } else return this.account.password = '';
    }

    setAccountName(name) {
        if (name) {
            this.conditions.hasAccountName = true
            this.account.accountName = name
            return true;
        } return this.conditions.hasAccountName = false, false;
    }

    setStyle(node,condition) {
        if (!condition) {
            node.style.border = 'solid 3px red'
        } else node.style.border = 'solid 3px green'
    }

    resetValue() {
        this.conditions = {
            lengthPassword: false,
            samePassword: false,
            hasAccountName: false,
            hasEmail: false,
            submitPossible: false
        };
        this.account = {
            email: null,
            accountName: null,
            password: null
        };
    }

    submit(passwordValue){
    let user = {
        email : null,
        accountName : null,
        password : null,
    }
    if (this.conditions.hasEmail) {
        user.email = this.account.email
    }

    if (this.conditions.lengthPassword && this.conditions.samePassword) {
        this.setPassword(passwordValue)
        user.password = this.account.password
    }

    if (this.conditions.hasAccountName) {
        user.accountName = this.account.accountName
    }

    let response = JSON.stringify(user)
    console.log(response)
    return response
    }
}
