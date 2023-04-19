import { useEffect, useState } from "react";
import { getCommentsById } from "../Api";

const CommentsList = ({ articleId }) => {
    const [err, setErr] = useState(false)
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsById(articleId.article_id)
            .then((data) => {
                return setComments(data)
            })
            .catch(() => {
                setErr(true);
            })
    }, [articleId.article_id])

    if (err) return <p>Something went wrong...</p>

    return (

        <section>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li key={comment.article_id}>
                            <div>
                                <p>{comment.author}</p>
                                <p>{comment.created_at}</p>
                            </div>
                            <p>{comment.body}</p>
                            <p>Votes: {comment.votes}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CommentsList;