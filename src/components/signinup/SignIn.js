import { Link } from 'react-router-dom';
import { useState } from 'react';
//import { useHistory } from 'react-router';
const SignIn = () => {
    const [person, setPerson] = useState({
        phone: "",
        password: ""
    });
    //onst history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
    }
    return (
        <div className="sign-in container">
            <h3>Sign In</h3>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="tel"
                        className="validate"
                        required
                        id="phone"
                        pattern="[0-9]{10}"
                        onChange={(e) => { setPerson({ ...person, phone: e.target.value }) }} />
                    <label htmlFor="phone">Phone +(91)</label>
                    <span className="helper-text" data-error="wrong" data-success="right">eg: 9XXXXXXX34</span>
                </div>
                <div className="input-field">
                    <input type="password"
                        required
                        id="password"
                        onChange={(e) => { setPerson({ ...person, password: e.target.value }) }} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                    <button type="submit" className="btn blue center">Login with OTP</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;<Link to="">Forgot Passsword</Link>
                </div>

            </form>
            <hr/>
            <div className="terms-conditions">
            <p>Create a new account if you do not have one. You will be asked to
             verify your phone number at the time of creation. By creating an account you agree to our <Link to="">PRIVACY POLICY</Link> &amp; <Link to="">TERMS AND CONDITIONS</Link></p>
             Get your account here 👉 <Link to="/signup">here</Link>
            </div>
        </div>
    )
}

export default SignIn;
