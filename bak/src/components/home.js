import React from 'react';
import {Link} from "react-router-dom";

const Utilities = {
    ModalButton: function (props) {
        return (
            <div className="">
                <div className="round btn btn-primary" 
                    style={{padding: ".3rem 2rem", background: "#0246a6" }}
                    data-toggle="modal" data-target={props.destination}>

                    <i className={props.icon} aria-hidden="true"></i>
                    {props.btntitle}
                </div>
            </div>
        )
    },

    validmail: function (email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },

    TableTitle: function (props) {
        return (
        
            <div className="row d-flex intro mb-3 p-2">
                <div className=" col text-left">
                    <h6 className="mt-2">{props.title}</h6>
                </div>

                {!props.showsearch ? <div></div> : 
                    <div className="col p-1 bg-light mb-4 border border-secondary">
                        <div className="input-group">
                            <input type="search" placeholder="Search..." 
                                aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                            <div className="input-group-append">
                                <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                }

                <div className="col text-right">
                    <div className="">
                        <div className="round btn btn-primary" 
                            style={{padding: ".3rem 2rem", background: "#0246a6" }}
                            data-toggle="modal" data-target={props.destination}
                            >
                            <i className="fas fa-pen " aria-hidden="true"></i>
                            {props.btntitle}
                        </div>
                    </div>
                </div>
            </div>
        )   
    },

    TableTitleAfter: function(props) {
        return (
            
            <div className="row d-flex intro mb-3 p-2 ttlsec mx-0">
                <div className="col text-left">
                    <h6 className="mt-2">{props.title}</h6>
                </div>

                <div className="col text-right">
                    <div className="">
                        <div className="" data-toggle="modal" data-target="#setupregistermodal"
                            >
                            <i className= {props.icon} aria-hidden="true"></i>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    VerticalSpacing: function () {
        return (
            <div>

                <div className="row mx-md-n5">
                    <div className="col px-md-5"><div className="p-3"></div></div>
                </div>

                <div className="row mx-md-n5">
                    <div className="col px-md-5"><div className="p-3"></div></div>
                    <div className="col px-md-5"><div className="p-3"></div></div>
                </div>

                <div className="row mx-md-n5">
                    <div className="col px-md-5"><div className="p-3"></div></div>
                    <div className="col px-md-5"><div className="p-3"></div></div>
                </div>
            </div>
        )
    },

    Logo: function() {
        return (
            <div className="logo-img">
                <img src="assets/img/logos/logo.png" alt="Logo"/>
            </div>
        )
    },

    NairaSympbol: function() {
        return (<span>₦</span>)
    },

    SectionTitle: function (props) {
        return (
            <h5 className="tradecolordk">{props.text}</h5>
        )
    },

    WhiteButton: function(props) {
        return (
            <div>
                <Link type="button" className="rounded btn btn-pad bg-white 
                tradecolor font-weight-bold btn-ppl shadow-sm" to={"/"+props.destination} >{props.title}
                </Link>
            </div>
        )
    },

    GeneralButton: function (props) {
        return (
            <div>
                <Link type="button" className="rounded btn btn-pad shadow-sm btn-primary" to={"/"+props.destination} >{props.title}
                </Link>
            </div>
        )
    },

    NavBar: function (props) {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light pr-3 pl5 mx-6 bg-white shadow-sm">
                <Link className="navbar-brand" to="/" className="nv">
                    <img src="userlogo.png" alt="Logo"/>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link style={{fontSize: "1.2rem"}} className="nav-link tradecolor font-weight-bold" to="/">{props.registrarname} 
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>

                    <Link className="d-flex" to="/editprofile">
                        <div className="right-txt px-1">
                            <span className="tradecolor">{props.firstname} {props.lastname}</span>
                            <span className="text-right small text-muted">Management</span>
                        </div>
                        
                        <div className="">
                            <img src="assets/img/placeholder.png" alt="Logo" className="rounded-circle px-1" style={{height: "40px"}} />
                            <i className="fa fa-sort-down text-secondary px-1" aria-hidden="true"></i>
                        </div>
                    </Link>

                    <a className="cp pl-2" onClick={props.handleSignOut}>Sign Out</a>
                </div>
            </nav>
        )
    },

    Indicator: function () {
        return (
            <div className="spinner-grow" role="status" style={{verticalAlign: "middle"}}>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

function Home() {
  return (
    <article className="cont-mother">
        <section className="cont service-33">
            <div className="container-fluid cont-main">

                <Utilities.VerticalSpacing />
                <Utilities.VerticalSpacing />

                <div className="row wrap-service-33">
                    <div className="col-lg-4 st-lft">
                        <img src="assets/img/logos/logo.png" className="img-fluid" />
                        <p className="mt-4 mb-4 bl-logo">Securities and Shareholder Records <br /> for the Mordern Age. </p>
                        <div className="row omb_row-sm-offset-3 omb_socialButtons">

                            <div className="col-xs-6 col-sm-6">
                                <Link type="button" className="btn btn-primary btn-pad btn-ppl" to="/signup">Sign Up</Link>
                            </div> 

                            <div className="col-xs-6 col-sm-6">
                                <Utilities.WhiteButton destination="login" title="Login" />
                            </div>  
                        </div>
                    </div>
                    <div className="col-lg-7 st-img">
                        <img src="assets/img/pageright1.png" className="img-fluid"/>
                    </div>
                </div>
            </div>

        </section>

        <section className="testimonies bg-white">
            <Utilities.VerticalSpacing />
            <Utilities.VerticalSpacing />

            <div className="test-txt">
                used by
            </div>    

            <div className="row test-imgs">
                <div className="test-img">
                    <img src="assets/img/cent.png" className="img-fluid"/>
                </div>
                <div className="test-img">
                    <img src="assets/img/security.png" className="img-fluid"/>
                </div>
                <div className="test-img mti">
                    <img src="assets/img/stone.png" className="img-fluid"/>
                </div>

                <div className="test-img mti">
                    <img src="assets/img/first.png" className="img-fluid"/>
                </div>
            </div>

            <Utilities.VerticalSpacing />
        </section>

        <footer>
            <div className="row">
                <div className="col-lg-6 ">
                    <p className="row copyright small">&copy;<script>document.write(new Date().getFullYear());</script> 
                        WealthTech Limited. All rights reserved <br /> 
                        "Wealth Registrax" is part of the Wealth.ng suit of applications.
                    </p>
                </div>
                <div className="col-lg-6 righty">
                    <div className="row">
                        <div className="ft">Pricing</div>
                        <div className="ft">Renew License</div>
                        <div className="ft">Terms of Service</div>
                        <div className="ft">Partnership & Intergration</div>
                    </div>
                </div>
            </div>
        </footer>
    </article>
  );
}

export {Home, Utilities};
