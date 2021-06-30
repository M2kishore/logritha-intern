import WelcomeBanner from "./WelcomeBanner";
import TopAchievers from "./TopAchievers";
import TestSyllabus from './TestSyllabus';
import Footer from '../layout/Footer';
const HomePage = () => {
    return ( 
        <div className="container-fluid">
        <div className="container-fluid">
            <WelcomeBanner />
            <TopAchievers />
            <TestSyllabus />
        </div>
        <Footer />
        </div>
     );
}
 
export default HomePage;