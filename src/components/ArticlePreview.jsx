import { Link } from "react-router-dom";

const ArticlePreview = ({ articles }) => {

    return (
        <ul className="article-list">
            {articles.map((article) => {
                return (
                    <li className="article-preview" key={article.article_id}>
                        <h3>{article.title}</h3>
                        <img src={article.article_img_url} alt={`snapshot relating to${article.title}`} />
                        <h4>Author: {article.author}</h4>
                        <h5>Topic: {article.topic}</h5>
                        <Link to={`/${article.article_id}`}>
                            <button className="standard-btn">Read full article</button>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ArticlePreview;