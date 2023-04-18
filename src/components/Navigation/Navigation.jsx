import SelectTopic from "./SelectTopic";
import ncLogo from '../../images/Nc (1)-PhotoRoom (1).png'

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={ncLogo} alt="nc news logo" />
            </div>
            <div className="user-container">
                <button>User</button>
            </div>
        </div>
    )
}

export default Navigation;