import qr from "qrcode-terminal"
import chalk from "chalk"

export const handler = async(err, result) => {

    if(err) {
        console.log("Error on aplication")
        return
    }

    const isSmall = result.type == 2

    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QRCode gerado com sucesso \n"))
        console.log(qrcode)
    })

}

