import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from "../../assets/icons/cuckoo-logo.png"

const NavBar = (props) => {


    return(
        <nav className='navBar'>
            <img src={logo} alt="logo cuckoo"></img>
            <Link to="/Home">
                <p>Home</p>
            </Link>
            <Link to="/Users">
                <p>Dashboard</p>
            </Link>
        </nav>
    )
}

export default NavBar