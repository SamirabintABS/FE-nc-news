import { useEffect, useState } from "react";
import { getCommentsById } from "../Api";

import CommentCard from "./CommentCard";

const CommentsList = ({ articleId }) => {
    const [err, setErr] = useState(false)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsById(articleId.article_id)
            .then((data) => {
                setComments(data)
            })
            .catch(() => {
                setErr(true);
            })
    }, [articleId.article_id])

    if (err) return <p>Something went wrong...</p>

    return (

        <section >
            <h3>Comments:</h3>
            <CommentCard comments={comments} />
        </section>
    )
}

export default CommentsList;