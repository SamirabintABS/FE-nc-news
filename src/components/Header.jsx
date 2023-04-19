import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="frog-header">
            <Link to="/">
                <h1 className="app-header">Your Daily Ribbit</h1>
            </Link>
        </div>
    )
}

export default Header;