import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="frog-header">
            <Link to="/">
                <h1>Your Daily Ribbit</h1>
            </Link>
        </header>
    )
}

export default Header;