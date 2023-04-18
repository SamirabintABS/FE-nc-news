const ArticlePreview = ({ articles }) => {
    console.log(articles)
    return (
        <ul className="article-list">
            {articles.map((article) => {
                return (
                    <li className="article-preview" key={article.article_id}>
                        <h3>{article.title}</h3>
                        <img src={article.article_img_url} alt={`snapshot relating to${article.title}`} />
                        <h4>{article.author}</h4>
                        <p>{article.topic}</p>
                        <button>Read full article</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default ArticlePreview;