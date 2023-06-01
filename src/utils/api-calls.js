import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const fetchAllArticles = () => {
    return api.get('/articles')
}
export const fetchTopics = () => {
    return api.get('/topics')
}