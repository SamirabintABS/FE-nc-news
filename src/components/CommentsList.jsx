import { useEffect, useState } from "react";
import { getCommentsById } from "../Api";
import formatDate from "../utils/utils";

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

        <section >
            <ul className="comments-list" >
                <h3>Comments:</h3>
                {
                    comments.map((comment) => {
                        return (
                            <li key={comment.comment_id}>
                                <div>
                                    <p>{comment.author}</p>
                                    <p>{formatDate(comment.created_at)}</p>
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