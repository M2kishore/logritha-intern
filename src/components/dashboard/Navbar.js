import { NavLink, Link } from 'react-router-dom';
import M from 'materialize-css';
import { FaAngleRight, FaBell } from 'react-icons/fa';
const Navbar = () => {
    document.addEventListener('DOMContentLoaded', function () {
        var dropdown = document.querySelectorAll('.dropdown-trigger');
        var sidenav = document.querySelectorAll('.sidenav');
        M.Dropdown.init(dropdown, {
            coverTrigger: false,
        });
        M.Sidenav.init(sidenav);
    });
    return (

        <div>
            <ul id='dropdown1' className="dropdown-content right-align">
                <li><Link to="/">one</Link></li>
                <li><Link to="/">2</Link></li>
            </ul>
            <nav>
                <div className="nav-wrapper white">
                    <Link to="#" data-target="mobile-demo" className="sidenav-trigger left"><i className="material-icons blue-text"><FaAngleRight /></i></Link>
                    <NavLink to="/" className="blue-text"><img className="center" src="https://yours-tomorrow1.netlify.app/static/media/logo.3c776b7f.png" width="60px" height="60px" alt="logo" className="nav-logo" /></NavLink>
                    <ul className="right">
                        <li><Link><i className="material-icons yellow-text"><FaBell /></i></Link></li>
                        <li><NavLink className="dropdown-trigger" to="#" data-target="dropdown1">&nbsp;<img className="circle right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxxWUL3K0Vq1Ax9454RSfBkjJGup3RPeyaQ&usqp=CAU" alt="profile_pic" height="60px" width="60px" /></NavLink></li>
                    </ul>

                </div>
            </nav>
            <ul className="sidenav sidenav-fixed" id="mobile-demo">
                <li><div className="user-view center">
                    <div className="background side_nav_background">
                    </div>
                    <img className="circle center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxxWUL3K0Vq1Ax9454RSfBkjJGup3RPeyaQ&usqp=CAU" alt="profile_pic" />
                    <span class="name">John Doe</span>
                    <span class="phone_number">(+91) 984568524</span>
                </div></li>
                <li><Link className="waves-effect" to='/'>Home</Link></li>
                <li><Link className="waves-effect" to='/events'>Events</Link></li>
                <li><Link className="waves-effect" to='/videos'>Videos</Link></li>

            </ul>
            {/* <nav>
                <div className="nav-wrapper white">
                <NavLink to="/" className="left"><img src="https://yours-tomorrow1.netlify.app/static/media/logo.3c776b7f.png" width="60px" height="60px"  alt="logo" className="nav-logo"/></NavLink>
                </div>
            </nav>
            <Sidenav className="right"/> */}
        </div>

    );
}

export default Navbar;