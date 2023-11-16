import easyvk from 'easyvk'
import {setTimer} from "./other.js";

const Bot = (code) => {
    console.log(1)
    easyvk({
        token: 'vk1.a.AtpHuH1He7R3VKw1f5VA6SM1R2Hov4ucL7YdFzYHsycNAj7Sk8GPZpzRnded7t_zOq0gWtDnc_wVacK7UQKbCkd-9JMGp95VxbyOIGWewDJ1juhyPqv3JaIAwNDMCfekICJK-OLpwsvw2vOOcI7s751b_KVwKdZ3Xo4GRjYy7BB3S13AyIWvNbwFqLo_YGK2Wds3IiIia7BzWajyzZUqKw'
    }).then(async vk => {

        let peerId = 318059266 // ID получателя

        /** Отправляем сообщение */
        let response = await vk.call('messages.send', {
            peer_id: peerId,
            message: code,
            /** Получаем случайное число с привязкой к дате*/
            random_id: easyvk.randomId()
        })

        console.log(response) // Выводим ID отправленного сообщения

        setTimer(0, 30)
    })
}

export default Bot;