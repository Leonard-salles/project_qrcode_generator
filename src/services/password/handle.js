
const permittedCaracters = async() => {
    let permitted = []

    if(process.env.UPPERCASE_LETTERS === "true"){
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(process.env.LOWERCASE_LETTERS === "true"){
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.NUMBERS === "true"){
        permitted.push(..."0123456789")
    }

    if(process.env.SPECIAL_CARACTERES === "true"){
        permitted.push(...`!@#$%¨&*()^~][]{}`)
    }

    return permitted

}

export const handler = async() => {
    let caracters = await permittedCaracters()
    let passwordGenerated = ""
    const passwordLength = process.env.PASSWORD_LENGTH    

    for(let i = 0; i < passwordLength; i++ ){
        const index = Math.floor(Math.random() * caracters.length)
        passwordGenerated += caracters[index]
    }

    return passwordGenerated

}