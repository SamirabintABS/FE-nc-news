import formatDate from "../utils/utils";

const CommentCard = ({ comments }) => {
    return (
        <ul className="comments-list">
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <div>
                            <p>{comment.author}</p>
                            <p>{formatDate(comment.created_at)}</p>
                        </div>
                        <p>{comment.body}</p>
                        <p>Votes: {comment.votes}</p>
                    </li>
                );
            })}
        </ul>
    )
}

export default CommentCard;