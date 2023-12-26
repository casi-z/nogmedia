import jwt from 'jsonwebtoken'
import {database} from "../app.js";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(username, refreshToken) {

        await database.promise().query(
            `UPDATE user SET refreshToken = ? WHERE name = ?`,
            [refreshToken, username]
        )
    }

    async removeToken(refreshToken){
        await database.promise().query(
            `UPDATE user SET refreshToken = NULL WHERE refreshToken = ?`,
            [refreshToken]
        )
    }


}

export default new TokenService()