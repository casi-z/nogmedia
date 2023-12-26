import easyvk from 'easyvk'
import {setTimer} from "./other.js";

class Bot {
    constructor(token) {
        this.token = token


    }

    sendCode(peerId, code) {



        easyvk({
            token: this.token
        }).then(async vk => {


            /** Отправляем сообщение */
            let response = await vk.call('messages.send', {
                peer_id: peerId,
                message: `Код для входа в админку:`,
                /** Получаем случайное число с привязкой к дате*/
                random_id: easyvk.randomId()
            })


        })
        easyvk({
            token: this.token
        }).then(async vk => {


            /** Отправляем сообщение */
            let response = await vk.call('messages.send', {
                peer_id: peerId,
                message: code,
                /** Получаем случайное число с привязкой к дате*/
                random_id: easyvk.randomId()
            })

            setTimer(0, 30)
        })
    }
}

export default new Bot('vk1.a.IBjZWUVrh7pltiFBHntR6KakUUj1OjDelycmIS30PexN1Rw9uTyHfXrlig5HoNx0KctbwEO8NAdTjmRLPeyFN4ljl8wgnRG0tyKEABghojgRYRocRtJn2xwniu7wfJInFAG5zSD561p7SULGnCTGbyWXqIVixh__G0UTlxYsR5uVhWViDv67eaGCz2F3ApLxJHlsnXS__m7eXxSrK94Xdg');