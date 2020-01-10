import React from 'react';
import {Utilities} from './home';
import {Link} from "react-router-dom";
import store from "store";
import alertify from "alertifyjs";

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            ajaxcalled: false
        }
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.email) {
            alertify.warning("Please enter your email address.");
        }
        else if(!this.state.password) {
            alertify.warning("Your password is required.");
        }
        else {

            this.setState({ajaxcalled: true});

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("username", this.state.email);
            urlencoded.append("password", this.state.password);

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: urlencoded
            };

            fetch("/api/login", requestOptions)
              .then(response => response.json())
              .then(result => {
                    this.setState({ajaxcalled: false})
                    if(result.accessToken) {
                        store.set("token", result.accessToken);

                        if(result.accessToken.length) {
                            let tokendata = window.atob(result.accessToken.split(".")[1]);
                            let parseddata = JSON.parse(tokendata);

                            store.set("userdata", {firstname: parseddata.fname, lastname: parseddata.lname, registrarname: parseddata.regnm, secid: parseddata.secid});

                            this.props.history.push("/newprofile");
                        }
                    }
                    else {
                        alertify.warning("Unable to login at this time. Please try later.");
                        console.log("Login failed")
                    }
              })
              .catch(error => {
                console.log('error', error)
                this.setState({ajaxcalled: false})
            });
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
                            <label htmlFor="email">Email</label>
                            <input onChange={this.handleInput} value={this.state.email} name="email" type="email" className="form-control formbackground" id="email" placeholder="myname@company.com" />
                        </div>

                        <div className="form-group mt-4">

                            <div className="row">
                                <div className="col ">
                                    <label htmlFor="pwd">Password</label>
                                </div>
                                <div className="col" style={{textAlign: "right"}}>
                                    <Link className="f-pwd" to="/lostpassword">Forgot Password? </Link>
                                </div>
                            </div>

                            <input onChange={this.handleInput} value={this.state.password} name="password" type="password" className="form-control formbackground" id="pwd" />
                        </div>

                        <div className="row mt-4">
                            <div className="col ml-4">
                                <input className="form-check-input" type="checkbox" /> Remember me
                            </div>
                            <div className="col" style={{textAlign: "right"}}>
                                <button type="submit" className="btn btn-primary" 
                                style={{padding: ".3rem 2rem", background: "#0246a6"}} 
                                onClick={this.handleSubmit}>Login</button>
                                {this.state.ajaxcalled ? Utilities.Indicator() : <div></div> }
                            </div>
                        </div>

                    </form>
                </section>

                <Utilities.VerticalSpacing />

                <div>
                    <p style={{textAlign: "center"}}>Don't have an account? <Link className="f-pwd" to="/signup">Sign up </Link></p>
                </div>

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
        store.remove("userdata");

    }
}

export default Login;
