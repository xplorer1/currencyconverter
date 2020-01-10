import React from 'react';
import {Utilities} from './home';
import {Link} from "react-router-dom";
import store from "store";
import alertify from "alertifyjs";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            kpassword: "",
            registrarname: "",
            secidnumber: "",
            registraraddress: "",
            phone: "",
            filename: "Upload Registrar Logo (PNG/JPG)",
            ajaxcalled: false
        }
    }

    handleFileUpload = (e) => {

        let file = e.target.files[0];
        let reader = new FileReader();

        if(file) {
            reader.readAsDataURL (file);

            reader.onloadend = function() {
                this.setState({
                    registrarlogo: reader.result,
                    filename: file.name
                });
            }.bind(this);
        }
    }

    handleInputClear = () => {

        this.setState({
            email: "",
            password: "",
            kpassword: "",
            registrarname: "",
            lastname: "",
            fname: "",
            secidnumber: "",
            registraraddress: "",
            phone: "",
            registrarlogo: "",
            file: "Upload Registrar Logo (PNG/JPG)",
            //inputkey: Math.random().toString(10) //for clearing file data after signup is successful.
        });
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        /*if(!this.state.registrarlogo) {
            alertify.warning("Please select a logo for your company.");
        }*/
        if(!this.state.registrarname) {
            alertify.warning("Registrar Name is required.");
        }
        else if(!this.state.secidnumber) {
            alertify.warning("SEC ID Number is required");
        }
        else if(!this.state.registraraddress) {
            alertify.warning("Please provide your address.");
        }
        else if(!this.state.fname) {
            alertify.warning("Please provide the first name of your admin.");
        }
        else if(!this.state.lastname) {
            alertify.warning("Please provide the last name of your admin.");
        }
        else if(!this.state.email) {
            alertify.warning("Please enter your email address.");
        }
        else if(!Utilities.validmail(this.state.email)) {
            alertify.warning("It appears your email address is not valid. Please verify.");
        }
        else if(!this.state.phone) {
            alertify.warning("Please enter your phone number");
        }
        else if(!this.state.password) {
            alertify.warning("Your password is required.");
        }
        else if(!this.state.kpassword) {
            alertify.warning("Please confirm your password.");
        }
        else if(this.state.password.toString() !== this.state.kpassword.toString()) {
            alertify.warning("Your passwords don't match. Please verify.");
        }
        else {
            this.setState({ajaxcalled: true});

            let data = {
                email: this.state.email,
                password: this.state.password,
                registrarName: this.state.registrarname,
                secIdNumber: this.state.secidnumber,
                lastName: this.state.lastname,
                firstName: this.state.fname,
                registrarAddress: this.state.registraraddress,
                phoneNumber: this.state.phone/*,
                registrarlogo: this.state.registrarlogo*/
            }

            fetch("/api/signup", {
                    method: 'POST', 
                    body: JSON.stringify(data),
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json' // 'application/json',
                    },
                })
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    console.log("response: ", response);
                    this.setState({ajaxcalled: false});

                    if(response.username) {
                        store.set("userdata", {firstname: response.firstName, lastname: response.lastName, registrarname: response.registrar.name, secid: response.registrar.secId});
                        this.props.history.push("/newprofile");
                    }
                    else {
                        alertify.warning("Unable to sign up at this point. Please try again later.");
                    }              
                })
                .catch((error) => {
                    this.setState({ajaxcalled: false});
                    console.log("erro: ", error);
                })
            }
    }

    render() {
        return (
            <article className="cont-mother">
                <Utilities.VerticalSpacing />

                <section className="row">
                    <div className="col-sm-6 stps">
                        <div className="stps-bd">
                            <Utilities.Logo />

                            <div className="stps-bd-inr">
                                <div className="col px-md-5"><div className="p-3"></div></div>
                                <div className="slidetitle font-weight-bolder">
                                    <p>Step 1</p>
                                    <p>Create Account</p>
                                </div>
                                <div className="col px-md-5"><div className="p-3"></div></div>

                                <div className="row slidestatus">

                                    <div className="col stp">
                                        <div className="step"></div>
                                    </div>

                                    <div className="col stp">
                                        <div className="step"></div>
                                    </div>

                                    <div className="col stp">
                                        <div className="step"></div>
                                    </div>

                                    <div className="col stp">
                                        <div className="step"></div>
                                    </div>

                                    <div className="status"></div>
                                    <div className="sliderline"></div>

                                </div>  
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <form className="w-50 frms mt-5" >
                            <h3 className="header mb-4">Create Account</h3>
                            
                            <div className="file mb-3">
                                <img src="assets/img/uplogo.png" alt="Logo"/>
                                <input type="file" name="registrarlogo" onChange={this.handleFileUpload} className="stubborn-input formbackground"/>
                                <span className="ml-3 upltxt">{this.state.filename}</span>
                            </div>

                            <div className="form-group">
                                <label htmlFor="registrarname" className="upltxt">Registrar Name</label>
                                <input type="text" placeholder="Registrar Name" onChange={this.handleInput} value={this.state.registrarname} name="registrarname" className="form-control formbackground" id="registrarname" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="secidnumber" className="upltxt">SEC ID Number</label>
                                <input type="text" placeholder="SEC ID Number" onChange={this.handleInput} value={this.state.secidnumber} name="secidnumber" className="form-control formbackground" id="secidnumber" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="registraraddress" className="upltxt">Registrar Address</label>
                                <input type="text" placeholder="Registrar Address" name="registraraddress" onChange={this.handleInput} value={this.state.registraraddress} className="form-control formbackground" id="registraraddress" />
                            </div>

                            <label htmlFor="" className="upltxt">Admin Name</label>
                            <div className="row">
                                <div className="col-sm form-group pr-0">
                                    <input type="text" placeholder="First Name" onChange={this.handleInput} value={this.state.fname} name="fname" className="form-control formbackground" id="fnamefname" />
                                </div>

                                <div className="col-sm form-group">
                                    <input type="text" placeholder="Last Name" onChange={this.handleInput} value={this.state.lastname} name="lastname" className="form-control formbackground" id="lastname" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"className="upltxt">Admin Email</label>
                                <input type="email" onChange={this.handleInput} value={this.state.email} name="email" className="form-control formbackground" id="email" placeholder="admin@company.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="upltxt">Phone Number</label>
                                <input type="tel" placeholder="+234XXXXXXXXX" onChange={this.handleInput} value={this.state.phone} name="phone" className="form-control formbackground" id="phone" />
                            </div>

                            <div className="form-group mb-0">
                                <label htmlFor="pwd" className="upltxt">Create Password</label>
                                <input type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} name="password" className="form-control formbackground" id="pwd" />

                                <div className="input-group-addon pwdeye">
                                    <a><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="kpassword" className="upltxt">Confirm Password</label>
                                <input type="password" placeholder="Confirm Password" onChange={this.handleInput} value={this.state.kpassword} name="kpassword" className="form-control formbackground" id="kpassword" />

                                <div className="input-group-addon pwdeye-op">
                                    <a><i className="fa fa-eye" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <div className="mt-4 pt-2">
                                <div className="">
                                    <button type="submit" 
                                    className="btn rounded text-white py-2 px-4" 
                                    style={{background: "#0246a6" }}
                                    onClick={this.handleSubmit}>
                                        Next
                                        <i className="fa fa-angle-right"></i>
                                    </button>
                                    {this.state.ajaxcalled ? Utilities.Indicator() : <div></div> }

                                    <div className="pt-4 ">
                                        <p>Already registered? <Link className="f-pwd" to="/login">Sign In </Link></p>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </section>

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

export default SignUp;
