import './index.css'
const Achiever = () => {
    return ( 
        <div className="col s12 m6">
        <div className="achiever container">
                    <div className="card-image">
                        <img style={{ width: 120, height: 120, borderRadius: 60 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxxWUL3K0Vq1Ax9454RSfBkjJGup3RPeyaQ&usqp=CAU" alt="achiever" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="card-title"><h5>John</h5></div>
                            <p>Economics</p>
                        </div>
                        <div className="card-action">
                            <p>1900/2000</p>
                        </div>
                    </div>
                </div>
                </div>
     );
}
 
export default Achiever;