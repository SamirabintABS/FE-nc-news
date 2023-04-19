import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-backend-01vy.onrender.com/api",
});

export const getArticles = () => {
    return newsApi
        .get("/articles")
        .then((response) => {
            return response.data.articles;
        }).catch((error) => {
            console.log(error)
        })

}

export const getArticlesById = (id) => {
    return newsApi
        .get(`/articles/${id}`)
        .then((res) => {
            return res.data.article;
        }).catch((err) => {
            console.log(err)
        })
}