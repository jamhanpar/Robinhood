import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.resetErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state)
            .then(() => this.props.history.push('/dashboard'));
    }

    renderErrors() {
        const { errors } = this.props

        return (
            <div className="session-error-container">
                {
                    errors.map((error, i) => (
                        <p key={`error-#${i}`}>{error}</p>
                    ))
                }
            </div>
        );
    }

    render() {
        const { formType } = this.props;

        const emailInput = (formType === "Sign Up") ? 
            <div className="email-input-container">
                <div className="input-label">
                    <label htmlFor="username">Email</label>
                </div>
                <div className="input-container">
                    <input className="username" type="text" autoComplete="current-email" value={this.state.email} onChange={this.update('email')}/>
                </div>
            </div> :
            null;

        const forgotPassword = (formType === "Sign In") ? 
            <div className="forgot-password-container">
                <a className="forgot-password-link" href="#">Forgot your username or password?</a>
            </div> :
            null;
        
        
        return (
            <div className="session-page-container">
                <div className="session-side-img-container">
                    <img className="session-img" src="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg"/>
                </div>
                <div className="session-form-container">
                    <form className="session-form-box" onSubmit={this.handleSubmit}>
                        <header>
                            <p className="welcome">Welcome to Robinhoot</p>
                        </header>

                        {emailInput}

                        <div className="input-label">
                            <label htmlFor="username">Email</label>
                        </div>
                        <div className="input-container">
                            <input className="session-input" type="text" autoComplete="current-email" value={this.state.email} onChange={this.update('email')}/>
                        </div>

                        <div className="input-label">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-container">
                            <input className="session-input" type="password" autoComplete="current-password" value={this.state.password} onChange={this.update('password')}/>
                        </div>

                        {forgotPassword}

                        {this.renderErrors()}

                        <button className="session-submit-btn" type="submit">{formType}</button>
                        <button className="session-submit-btn" type="submit" onClick={() => this.setState({ email: this.props.demo.email, password: this.props.demo.password })}>Demo</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;