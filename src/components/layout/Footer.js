import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <footer className="page-footer black lighten-3">
            <div className="container white-text">
            <div className="row center">
            <p>2020 &copy; Yours Tomorrow</p>
            <p>Drafted by <Link to="https://logritha.com/">Logritha Technologies</Link></p>
            </div>
        </div>
        </footer>
     );
}
 
export default Footer;