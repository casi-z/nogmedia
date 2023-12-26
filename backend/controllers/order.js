import {getVkBot} from "../utils/vk";
import {doVKBotEnabled} from "../app.js";

import {randomStringGenerator} from "../utils/other";


export async function sendCode(req, res) {
    if (doVKBotEnabled)
        getVkBot(randomStringGenerator())
    else
        (console.log(false))
    res.status(200)
}

