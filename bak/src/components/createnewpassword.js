import React from 'react';
import {Utilities} from './home';
import {Link} from "react-router-dom";
import store from "store";
import alertify from "alertifyjs";

class CreateNewPassword extends React.Component {
    constructor() {
        super();

        this.state = {
            newpassword: "",
            confirmpassword: "",
            passwordtoken: "",
            ajaxcalled: false
        }
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        console.log("state: ", this.state);

        e.preventDefault();

        if(!this.state.newpassword) {
            alertify.warning("Please enter new password.");
        }
        else if(!this.state.confirmpassword) {
            alertify.warning("Please confirm your password.");
        }
        else if(this.state.newpassword.toString() !== this.state.confirmpassword.toString()) {
            alertify.warning("Your passwords don't match. Please verify.");
        }
        else {

            this.setState({ajaxcalled: true});

            let data = {
                password: this.state.newpassword,
                token: this.state.passwordtoken,
            }

            fetch("/api/password-reset", {
                    method: 'POST', 
                    body: JSON.stringify(data),
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json' // 'application/json',
                    },
                })
                .then((response) => {
                    this.setState({ajaxcalled: false});
                    return response.json();
                })
                .then((response) => {
                    this.setState({ajaxcalled: false});
                    console.log("response: ", response);
                })
                .catch((error) => {
                    console.log("erro: ", error);
                })
            }
    }

    render() {
        return (
            <article className="cont-mother">
                <Utilities.VerticalSpacing />
                <Utilities.Logo />
                <Utilities.VerticalSpacing />

                <section className="mx-auto w-25">
                    <form >
                        <div className="form-group">
                            <label htmlFor="newpassword">New Password</label>
                            <input onChange={this.handleInput} value={this.state.newpassword} name="newpassword" type="password" className="form-control formbackground" id="newpassword" />
                        </div>

                        <div className="form-group mt-4">

                            <div className="row">
                                <div className="col ">
                                    <label htmlFor="pwd">Confirm Password</label>
                                </div>
                            </div>

                            <input onChange={this.handleInput} value={this.state.confirmpassword} name="confirmpassword" type="password" className="form-control formbackground" id="confirmpassword" />
                        </div>

                        <div className="row mt-4">
                            <div className="col" style={{textAlign: "right"}}>
                                <button type="submit" className="btn btn-primary" 
                                style={{padding: ".3rem 2rem", background: "#0246a6"}} onClick={this.handleSubmit}>Submit</button>
                                {this.state.ajaxcalled ? Utilities.Indicator() : <div></div> }
                            </div>
                        </div>
                    </form>
                </section>

                <Utilities.VerticalSpacing />

                <Utilities.VerticalSpacing />

                <footer>
                    <div className="row">
                        <div className="col-lg-6 ">
                            <p className="row copyright mb-0 small">&copy;<script>document.write(new Date().getFullYear());</script> 
                                WealthTech Limited. All rights reserved <br /> 
                                "Wealth Registrax" is part of the Wealth.ng suit of applications.
                            </p>
                        </div>
                        <div className="col-lg-6 righty">
                            <div className="row mb-0">
                                <div className="ft">Terms of Service</div>
                                <div className="ft">Partnership & Intergration</div>
                                <div className="ft">Renew License</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </article>
        );
    }

    componentDidMount() {
        let token = this.props.match.params;
        console.log("token: ", token)

        if(token) {
            this.setState({
                passwordtoken: token.token
            })
        }
    }
}

export default CreateNewPassword;
