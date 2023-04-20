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

export const getCommentsById = (id) => {
    return newsApi
        .get(`/articles/${id}/comments`)
        .then((res) => {
            return res.data.comments
        }).catch((err) => {
            console.log(err);
        })
}

export const voteArticle = (id, vote) => {
    return newsApi
        .patch(`/articles/${id}`, { inc_votes: vote })
        .then((res) => {
            return res.data.article;
        })
}

export const postComment = (id, comment) => {
    return newsApi
        .post(`/articles/${id}/comments`, comment)
        .then((res) => {
            return res.data.comment
        })
}