import './index.css'
import Syllabus from './Syllabus';
const TestSyllabus = () => {
    return ( 
        <div className="test-syllabus container">
        <h3 className="title">Test <span className="purple-text">Syllabus</span></h3>
        <Syllabus/>
        <Syllabus/>
        <Syllabus/>
        </div>
     );
}
 
export default TestSyllabus;