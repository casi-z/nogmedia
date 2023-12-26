//
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? `https://9414e7e73885.vps.myjino.ru/api` : 'http://192.168.0.107:5000/api'
//export const API_BASE_URL = `http://localhost:5000/api`
export const API_NEWS_URL = `${API_BASE_URL}/news`
export const API_ARTICLE_URL = `${API_BASE_URL}/article`
