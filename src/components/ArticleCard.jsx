import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../Api";
import formatDate from "../utils/utils.js";

const ArticleCard = () => {
    const [article, setArticle] = useState([]);
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(true);

    const articleId = useParams();

    useEffect(() => {
        setLoading(true);
        setErr(false);
        getArticlesById(articleId.article_id)
            .then((data) => {
                return setArticle(data)
            })
            .catch(() => {
                setErr(true);
            }).finally(() => {
                setLoading(false);
            })
    }, [articleId.article_id])

    const isoDate = article.created_at;
    const localDateString = formatDate(isoDate);

    if (loading) return <p>Loading...</p>
    if (err) return <p>Something went wrong...</p>

    return (
        <div className="article-card">
            <h3>{article.title}</h3>
            <p> <span>Author:</span> {article.author}</p>
            <img src={article.article_img_url} alt={`snapshot relating to ${article.title}`}></img>
            <p> <span> Created at:</span> {localDateString}</p>
            <div>
                <p> <span> Topic:</span> {article.topic}</p>
                <p> <span> Votes:</span> {article.votes}</p>
            </div>
            <p>{article.body}</p>
        </div>
    )

}

export default ArticleCard;