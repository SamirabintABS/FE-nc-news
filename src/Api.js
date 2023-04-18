import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-backend-01vy.onrender.com/api",
});

export const getArticles = () => {
    return newsApi.get("/articles").then((response) => {
        return response.data.articles;
    })
}