import { useState, useEffect } from 'react';
import M from 'materialize-css';
import './index.css'
const SignUp = () => {
    useEffect(() => {
        M.AutoInit();
    }, [])
    const [person, setPerson] = useState({
        firstName: "",
        phone: "",
        password: ""
    });
    //const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
    }
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, {
            format: 'dd-mm-yy'
        });
    });
    return (
        <div className="sign-up container row">
            <h3>Begin your Journey from here!</h3>
            <br />
            <form onSubmit={handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input type="text"
                            required
                            id="first-name"
                            onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }} />
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text"
                            required
                            id="last-name"
                            onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }} />
                        <label htmlFor="last-name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input type="tel"
                            className="validate"
                            required
                            id="phone"
                            pattern="[0-9]{10}"
                            onChange={(e) => { setPerson({ ...person, phone: e.target.value }) }} />
                        <label htmlFor="phone" className="phone-lable">Phone +(91)</label>
                        <span class="helper-text" data-error="wrong" data-success="right">eg: 9XXXXXXX34</span>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" className="datepicker" />
                        <label>Select your birthdate</label>
                    </div>
                    <label className="left col s12"><h6>Gender</h6></label>
                    <div className="input-field col s12">
                        <p className="col s3">
                            <label>
                                <input class="with-gap" name="group1" type="radio"/>
                                <span>Male</span>
                            </label>
                        </p>
                        <p className="col s3">
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span>Female</span>
                            </label>
                        </p>
                        <p className="col s3">
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span>Other</span>
                            </label>
                        </p>
                        <p className="col s3">
                            <label>
                                <input class="with-gap" name="group1" type="radio" />
                                <span>Prefer not to say</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Less than 1 year</option>
                            <option value="3">1-3 years</option>
                            <option value="6">3-6 years</option>
                            <option value="7">More than 6 years</option>
                        </select>
                        <label>How long have you been preparing?</label>
                    </div>
                    <div className="input-field col s6">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="g1">G1</option>
                            <option value="g2">G2/G2A</option>
                            <option value="g4">G4</option>
                        </select>
                        <label>What dou you aim for?</label>
                    </div>
                    <div className="input-field col s6">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <label>Are you currently enrolled in any other institutes?</label>
                    </div>
                    <div className="input-field col s6">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="tamil">Tamil</option>
                            <option value="english">English</option>
                        </select>
                        <label>Choose your medium of communication?</label>
                    </div>
                </div>
                <div className="input-field center">
                    <button type="submit" className="btn blue">Create Account</button>
                </div>

            </form>
            <hr />
        </div>
    )
}

export default SignUp;
