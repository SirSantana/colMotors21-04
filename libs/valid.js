const valid = ( email, password, confirmPassword) => {
    if(!email || !password)
    return 'Debes llenar todos los campos.'

    if(!validateEmail(email))
    return 'Correo invalido.'

    if(password.length < 6)
    return 'La contraseña debe tener mas de 6 caracteres.'

    if(password !== confirmPassword)
    return 'Las credenciales no coinciden.'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid