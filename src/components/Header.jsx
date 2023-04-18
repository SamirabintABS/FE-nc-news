import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="frog-header">
            <a href="https://emoji.gg/emoji/7522-purple-froggie">
                <img src="https://cdn3.emoji.gg/emojis/7522-purple-froggie.png" width="48px" height="48px" alt="purple_froggie" />
            </a>
            <Link to="/">
                <h1 className="app-header">Your Daily Ribbit</h1>
            </Link>
            <a href="https://emoji.gg/emoji/7522-purple-froggie">
                <img src="https://cdn3.emoji.gg/emojis/7522-purple-froggie.png" width="48px" height="48px" alt="purple_froggie" />
            </a>
        </div>
    )
}

export default Header;