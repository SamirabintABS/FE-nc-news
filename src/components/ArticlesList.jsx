import { useEffect, useState } from "react";
import { getArticles } from "../Api";
import ArticlePreview from "./ArticlePreview.jsx";

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

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>
    return (
        <ArticlePreview articles={articles} />
    )
}

export default ArticleList;