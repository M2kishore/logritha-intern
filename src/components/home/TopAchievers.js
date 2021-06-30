import Achiever from "./Achiever";
const TopAchievers = () => {
    return (
        <dic className="top-achievers container center-align">
            <h3 className="title">Top Achievers</h3>
            <div className="achievers row">
            <Achiever/>
            <Achiever/>
            <Achiever/>
            <Achiever/>
            <Achiever/>
            <Achiever/>
            </div>
        </dic>
    );
}

export default TopAchievers;