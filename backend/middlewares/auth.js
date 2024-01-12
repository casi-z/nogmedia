import ApiError from '../exceptions/api-error.js'
import tokenService from "../service/token-service.js";
export default function AuthMiddleware (request, response, next) {
    try {
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.unauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.unauthorizedError());
        }

        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.unauthorizedError());
        }

        request.user = userData;
        next();
    } catch (e) {
        return next(ApiError.unauthorizedError());
    }
};