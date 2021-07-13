import { useState, useEffect, useRef } from 'react';
import M from 'materialize-css';
import './index.css'
const SignUp = () => {
    const ref = useRef(null)
    useEffect(() => {
        M.AutoInit();
    }, [])
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        date: "",
        gender: "",
        password: "",
        howLong: 1,
        group: 1,
        otherEnrollment: "true",
        language: "tamil"

    });
    //const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
    }
   
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
                        <span className="helper-text" data-error="Invalid" data-success="Valid">eg: 9XXXXXXX34</span>
                    </div>
                    <div className="input-field col s6">
                        <input type="text"
                         className="validate"
                        pattern="(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))"
                        onChange={(e) => {setPerson({...person,date: e.target.value})}}
                        />
                        <label>Birthdate</label>
                        <span className="helper-text" data-error="Invalid" data-success="Valid">DD/MM/YYYY</span>
                    </div>
                    <label className="left col s12"><h6>Gender</h6></label>
                    <div className="input-field col s12">
                        <p className="col s3">
                            <label>
                                <input className="with-gap"
                                    name="group1"
                                    type="radio"
                                    value="male"
                                    onChange={(e) => { setPerson({ ...person, gender: e.target.value }) }}
                                />
                                <span>Male</span>
                            </label>
                        </p>
                        <p className="col s3">
                            <label>
                                <input className="with-gap"
                                    name="group1"
                                    type="radio"
                                    value="female"
                                    onChange={(e) => { setPerson({ ...person, gender: e.target.value }) }}
                                />
                                <span>Female</span>
                            </label>
                        </p>
                        <p className="col s3">
                            <label>
                                <input className="with-gap"
                                    name="group1"
                                    type="radio"
                                    value="other"
                                    onChange={(e) => { setPerson({ ...person, gender: e.target.value }) }}
                                />
                                <span>Other</span>
                            </label>
                        </p>
                        <p className="col s3">
                            <label>
                                <input className="with-gap"
                                    name="group1"
                                    type="radio"
                                    value="no-preference"
                                    onChange={(e) => { setPerson({ ...person, gender: e.target.value }) }}
                                />
                                <span>Prefer not to say</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select
                            onChange={(e) => { setPerson({ ...person, howLong: +e.target.value}) }}
                        >
                            <option disabled>Choose your option</option>
                            <option value={1}>Less than 1 year</option>
                            <option value={3}>1-3 years</option>
                            <option value={6}>3-6 years</option>
                            <option value={7}>More than 6 years</option>
                        </select>
                        <label>How long have you been preparing?</label>
                    </div>
                    <div className="input-field col s6">
                        <select
                            onChange={(e) => { setPerson({ ...person, group: +e.target.value }) }}
                        >
                            <option disabled>Choose your option</option>
                            <option value={1}>G1</option>
                            <option value={2}>G2/G2A</option>
                            <option value={4}>G4</option>
                        </select>
                        <label>What dou you aim for?</label>
                    </div>
                    <div className="input-field col s6">
                        <select
                            onChange={(e) => {setPerson({ ...person, otherEnrollment: e.target.value})}}
                        >
                            <option disabled>Choose your option</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <label>Are you currently enrolled in any other institutes?</label>
                    </div>
                    <div className="input-field col s6">
                        <select
                            onChange={(e) => {setPerson({ ...person, language: e.target.value }) }}
                        >
                            <option disabled>Choose your option</option>
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
