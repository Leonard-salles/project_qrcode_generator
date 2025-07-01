import prompt from "prompt"

import { qrCodePrompt } from "../../prompts/prompt-qrcode.js"
import { handler } from "./handle.js"

export const createQRCode = async() => {
    prompt.get(qrCodePrompt, handler)

    prompt.start()
}