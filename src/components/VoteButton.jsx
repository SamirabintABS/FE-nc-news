import { useState } from 'react';
import * as api from '../utils/Api.js';

const VoteButton = ({ articleId, setArticle, addedVotes, setAddedVotes }) => {

    const id = articleId.article_id;
    const [err, setErr] = useState("")

    const handleClick = () => {
        if (addedVotes === 0) {
            setAddedVotes(1);
            api.voteArticle(id, 1).catch(() => {
                setErr("something went wrong, try again later")
                setAddedVotes(0)
            })

        }

        // None DRY way of updating article votes
        // setArticle((currentArticle) => {
        //     return { ...currentArticle, votes: currentArticle.votes + 1 }
        // })
        // api.voteArticle(id)
        //     .then((updatedArticle) => {
        //     }).catch(() => {
        //         setArticle((currentArticle) => {
        //             return { ...currentArticle, votes: currentArticle.votes - 1 }
        //         })
        //         setErr("something went wrong, try again later")
        //     })
    }


    const handleRemoveVote = () => {
        if (addedVotes === 1) {
            setAddedVotes(0)
            api.voteArticle(id, -1).catch(() => {
                setErr("something went wrong, try again later")
                setAddedVotes(1)
            })

        }

    }


    return (
        <div>
            <button onClick={handleClick} aria-label="Vote for this article" className="secondary-btn">Vote!</button>
            {err ? <p>{err}</p> : null}

            <button onClick={handleRemoveVote} aria-label="Remove vote for this article" className="secondary-btn">Remove Vote</button>

        </div>
    )
}

export default VoteButton;