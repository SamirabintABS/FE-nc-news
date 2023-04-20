import { useEffect, useState } from "react";
import { getArticles } from "../utils/Api";
import ArticlePreview from "./ArticlePreview.jsx";
import frogFace from "../images/frog-face.png"

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setError(false)
        getArticles()
            .then((data) => {
                setArticles(data);
            }).catch(() => {
                setError(true)
            }).finally(() => {
                setIsLoading(false);
            })
    }, [])


    if (error) return <p>Something went wrong...</p>
    return (
        <>
            {
                isLoading && (
                    <img className="loading-frog" src={frogFace} alt="Loading" />
                )
            }
            <ArticlePreview articles={articles} />
        </>
    )
}

export default ArticleList;