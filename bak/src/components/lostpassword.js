import React from 'react';
import {Utilities} from './home';
import {Link} from "react-router-dom";
import store from "store";
import alertify from "alertifyjs";

class LostPassword extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            ajaxcalled: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.email) {
            alertify.warning("Please enter your email address.");
        }
        else {

            this.setState({ajaxcalled: true});

            fetch("/api/password-reset?email=" + this.state.email , {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                return response.json();
                console.log("response: ", response); 
            })
            .then((response) => {
                this.setState({ajaxcalled: false})
                console.log("response: ", response);           
            })
            .catch((error) => {
                this.setState({ajaxcalled: false})
                alertify.warning("Please try again later.");
                console.log("erro: ", error);
            })
        }
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <article className="cont-mother">
                <Utilities.VerticalSpacing />
                <Utilities.Logo />
        
                <section className="mx-auto w-25">
                    <div className="w-100 text-center mt-5 mb-3 tradecolordk font-weight-bold">
                        Provide your email address to reset your password.
                    </div>

                    <form >
                        <div className="form-group">
                            <input type="email" name="email" onChange={this.handleInput} value={this.state.email} className="form-control formbackground" id="email" placeholder="myname@company.com" />
                        </div>

                        <div className="mt-5">
                            <div className="col-sm rempad" style={{textAlign: "right"}}>
                                <button type="submit" className="btn btn-primary" 
                                style={{padding: ".3rem 2rem", background: "#0246a6"}} onClick={this.handleSubmit}>Submit
                                </button>
                                {this.state.ajaxcalled ? Utilities.Indicator() : <div></div> }
                            </div>
                        </div>

                    </form>
                </section>

                <Utilities.VerticalSpacing />
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
}

export default LostPassword;
