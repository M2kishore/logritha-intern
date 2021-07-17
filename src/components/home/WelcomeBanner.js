import { useHistory } from "react-router";
const WelcomeBanner = () => {
    const history = useHistory();
    const handleClick = (e) => {
        history.push('/signup');
    }
    return ( 
        <div className="container row">
            <div className="col s12 m4">
                <h3><span className="purple-text">Online</span> Test</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit quisquam deleniti, itaque quo voluptatibus alias porro maxime tempora asperiores rem? Consequuntur, deserunt deleniti corrupti dolorum soluta saepe adipisci maiores?</p>
                <button className="btn purple" onClick={handleClick}>Register Now</button>
            </div>
            <div className="col s12 m5">
                <img src={"https://yours-tomorrow1.netlify.app/static/media/hero-img.d70cc318.svg"} alt="banner" width="1000px" height="700px"/>
            </div>
        </div>
     );
}
 
export default WelcomeBanner;