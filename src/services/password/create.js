import chalk from "chalk"
import { handler } from "./handle.js"

export const createPassword = async() => {

    const password =  await handler()

    console.log(password)
}