import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../Api";
import formatDate from "../utils/utils.js";

const ArticleCard = () => {
    const [article, setArticle] = useState([]);
    const [err, setErr] = useState(false)

    const articleId = useParams();

    useEffect(() => {
        getArticlesById(articleId.article_id)
            .then((data) => {
                return setArticle(data)
            })
            .catch((err) => {
                setErr(err);
            })
    }, [])

    const isoDate = article.created_at;
    const localDateString = formatDate(isoDate);

    if (err) return <p>Something went wrong...</p>

    return (
        <div className="article-card">
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={`snapshot relating to ${article.title}`}></img>
            <p>Author: {article.author}</p>
            <p>Date and Time: {localDateString}</p>
            <p>Topic: {article.topic}</p>
            <p>{article.body}</p>
            <p>Votes: {article.votes}</p>
        </div>
    )

}

export default ArticleCard;