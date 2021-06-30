import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-wrapper white">
                <NavLink to="/" className="blue-text left"><img src="https://yours-tomorrow1.netlify.app/static/media/logo.3c776b7f.png" width="60px" height="60px"  alt="logo" className="nav-logo"/></NavLink>
                <ul className="right blue">
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;