import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../Api";
import formatDate from "../utils/utils.js";
import frogFace from "../images/frog-face.png";
import CommentsList from "./CommentsList";

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

    if (err) return <p>Something went wrong...</p>

    return (
        <>
            {
                loading && (
                    <img className="loading-frog" src={frogFace} alt="Loading" />
                )
            }
            <main className="article-card" >
                <h3>{article.title}</h3>
                <div className="author-date-container">
                    <p> <span>Author:</span> {article.author}</p>
                    <p>{localDateString}</p>
                </div>
                <div className="text-img-container">
                    <div className="text-content">
                        <div className="votes-topics-container">
                            <p> <span> Topic:</span> {article.topic}</p>
                            <p> <span> Votes:</span> {article.votes}</p>
                        </div>
                        <p>{article.body}</p>
                    </div>
                    <img src={article.article_img_url} alt={`snapshot relating to ${article.title}`}></img>
                </div>

                <CommentsList articleId={articleId} />
            </main>
        </>
    )

}

export default ArticleCard;