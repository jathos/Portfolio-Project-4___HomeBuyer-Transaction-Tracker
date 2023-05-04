import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

export default class SignUpForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        // alert(JSON.stringify(this.state));
        try {
            const formData = { ...this.state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form className="signupForm" autoComplete="off" onSubmit={this.handleSubmit}>
                        <label className="name-label">Name</label>
                        <input className="name" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label className="email-label">Email</label>
                        <input className="email" type="email" name="email" value={this.state.email} onChange={this.handleChange}
                            required />
                        <label className="password-label">Password</label>
                        <input className="password" type="password" name="password" value={this.state.password} onChange={this.handleChange}
                            required />
                        <label className="confirm-label">Confirm</label>
                        <input className="confirm" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange}
                            required />
                        <button className="signup" type="submit" disabled={disable}>Sign Up</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}