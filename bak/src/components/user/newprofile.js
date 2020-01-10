import React from 'react';
import {Utilities} from '../home';
import {Link} from "react-router-dom";
import store from "store";
import alertify from "alertifyjs";

function EventBar() {
    return (
        <div className="pl-3 pr-3 pt-4">
            <div className="d-flex mb-3 justify-content-between">
                <Utilities.SectionTitle text="What's Next" />

                <div className="round btn btn-primary" data-toggle="modal" data-target="#addeventmodal">
                    <i className="fa fa-plus " aria-hidden="true"></i>
                    Add Event
                </div>
            </div>

            <div className="row cboxes">
                <div className="col-sm-2 media">
                    {/*<span alt="John Doe" className="rounded-circle indi indi-red"></span>*/}
                    <div className="media-body">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="agm" name="Age" />
                            <label className="custom-control-label" htmlFor="agm">AGM</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 media">
                    {/*<span alt="John Doe" className="rounded-circle indi indi-green"></span>*/}
                    <div className="media-body">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="publicoffer" name="Public Offer" />
                            <label className="custom-control-label" htmlFor="publicoffer">Public Offer</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm media rempad">
                    {/*<span alt="John Doe" className="rounded-circle indi indi-purple"></span>*/}
                    <div className="media-body">
                        <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="corporateaction" name="Corporate Action"/>
                            <label className="custom-control-label" htmlFor="corporateaction">Corporate Action</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dropdown">
                <button className="text-left dropdown-toggle w-100 bg-white py-2 rounded border border-secondary" 
                    type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false">
                    All Clients
                    <i className="fa fa-angle-down w-100 ang-ic" aria-hidden="true" style={{right: "-23rem"}}></i>
                </button>
                <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item dpimg" href="#"><img src="assets/img/uplogo.png" alt="Logo"/> All Clients</a>
                    <a className="dropdown-item dpimg" href="#"><img src="accesslogo.png" alt="Logo"/> Access Bank PLC</a>
                    <a className="dropdown-item dpimg" href="#"><img src="afrinvestlogo.png" alt="Logo"/> AfrInvest WA LTD</a>
                    <a className="dropdown-item dpimg" href="#"><img src="aiico.jpg" alt="Logo"/> AIICO Insurance PLC</a>
                    <a className="dropdown-item dpimg" href="#"><img src="aiico.jpg" alt="Logo"/> AIICO Money Market Fund PLC</a>
                    <a className="dropdown-item dpimg" href="#"><img src="assets/img/uplogo.png" alt="Logo"/> BSS Industries Ltd</a>
                    <a className="dropdown-item dpimg" href="#"><img src="cavertonlogo.png" alt="Logo"/> Caverton Offshore Support Group</a>
                </div>
            </div>
        </div>
    )
}

function StatsCards() {
    return (
        <section className="pl-3 pr-3 pt-3 mr-3">
            <div className="row">
                <div className="col-sm-4">
                    <div>Wednesday</div>
                    <div>16</div>
                </div>

                <div className="col-sm-8 ntet rounded">
                    <div className="nxt-evt text-white">Next Event</div>
                </div>
            </div>

            <div className="evt-counter">
                 <Utilities.VerticalSpacing />
                <div className="evt-ic">
                    <img src="calendar.png" alt="Logo"/>
                </div>
                <div className="evt-count pt-3">No Upcoming Events</div>

            </div>
        </section>
    )
}

function MidPaneOne() {
    return (
        <section className="row text-center mx-auto md bg-white shadow rounded">

            <div className="col sects border-right m-3">
                <img src="folders.png" alt="Logo"/>
                <div className="tradecolordk pt-2">Registers</div>
                <div className="text-secondary cnt">0</div>
            </div>

            <div className="col sects border-right m-3">
                <img src="people.png" alt="Logo"/>
                <div className="tradecolordk pt-2">Shareholders</div>
                <div className="text-secondary cnt">0</div>
            </div>

            <div className="col sects m-3">
                <img src="moneybill.png" alt="Logo"/>
                <div className="tradecolordk pt-2">Total Unpaid Dividends</div>
                <div className="text-muted cnt">
                <img src="naira.png" alt="Logo" style={{marginTop: "-7px"}}/>0</div>
            </div>

        </section>
    )
}

function MidPaneTwo() {
    return (
        <section className="md my-3">
            <div className="card-deck">

                <div className="card bg-white shadow rounded">
                    <div className="card-body bg-white rounded">
                        <Utilities.SectionTitle text="Shareholder Satisfaction" />

                        <div className="row pt-4">
                            <div className="col-3 pb-4">&#128516;</div>
                            <div className="col-3 pb-4 genfont text-muted">--%</div>
                            <div className="col-6 pb-4 text-muted fontsmaller">Happy</div>
                        </div>

                        <div className="row">
                            <div className="col-3 pb-4">&#128528;</div>
                            <div className="col-3 pb-4 genfont text-muted">--%</div>
                            <div className="col-6 pb-4 text-muted fontsmaller">Indifferent</div>
                        </div>

                        <div className="row">
                            <div className="col-3">&#128545;</div>
                            <div className="col-3 genfont text-muted">--%</div>
                            <div className="col-6 text-muted fontsmaller">Unhappy</div>
                        </div>
                    </div>
                </div>

                <div className="card bg-white shadow rounded">
                    <div className="card-body">
                        <Utilities.SectionTitle text="Tickets Resolved" />

                        <p className="text-center pt-3 text-muted"> Rate of custormer support resolution occurs here</p>

                        <div className="text-center pt-5">
                            <Link type="button" className="rounded-lg btn btn-primary w-50 btn-wht" to="/">
                                <i className='fa fa-plus mlr' aria-hidden='true'></i>
                            Setup CX
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-white shadow rounded">
                    <div className="card-body">
                        <Utilities.SectionTitle text="Operations" />

                        <p className="text-center pt-3 text-muted">Reconciliation of Trades should occur daily by uploading the 
                        "Diskette" file form the CSCS</p>

                        <div className="text-center pt-4">
                            <Utilities.ModalButton btntitle="Upload CSCS File" destination="#tradesmodal" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function MidPaneThree() {
    return (
        <section className="md bg-white shadow rounded p-3 my-3">
            <Utilities.SectionTitle text="Clients" />

            <table className="table table-hover m-0">
                <thead>
                    <tr>
                        <th className="border border-0 small tradecolordk pl-0 w30">
                            Security Name
                            <i className="fa fa-sort text-primary px-1 ml-3" aria-hidden="true"></i>
                        </th>

                        <th className="border border-0 small tradecolordk w20">
                            Shareholders 
                            <i className="fa fa-sort text-primary px-1 ml-3" aria-hidden="true"></i>
                        </th>

                        <th className="border border-0 small tradecolordk w30">
                            Last Dividend(<Utilities.NairaSympbol />/Share)
                            <i className="fa fa-sort text-primary px-1 ml-3" aria-hidden="true"></i>
                        </th>

                        <th className="border border-0 small tradecolordk pr-0 w20">
                            Email(<Utilities.NairaSympbol />)
                            <i className="fa fa-sort text-primary px-1 ml-3" aria-hidden="true"></i>
                        </th>
                    </tr>
                </thead>
            </table>

            <hr className="m-0 ml-n3 mr-n3" />

            <div className="text-center p-5">
                <div>
                    <img src="assets/img/uplogo.png" alt="Logo"/>
                    <div className="text-muted">List of Clients/Registers</div>

                </div>

                <Utilities.VerticalSpacing />

                <Utilities.ModalButton btntitle="Setup A Register" destination="#setupregistermodal" icon="fas fa-pen" />
            </div>
        </section>
    )
}

function AddEventModal() {
    return (
        <div className="modal fade" id="addeventmodal">
            <div className="modal-dialog w30">
                <div className="modal-content">

                    <div className="modal-header border-0">

                        <div className="modal-title font-weight-bold">New Event</div>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body pt-0">
                            <div className="form-group">
                                <label htmlFor="venue" className="small">Client</label>
                                <div className="dropdown">
                                    <button className="text-left dropdown-toggle w-100 bg-white py-2 rounded border border-secondary" 
                                        type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                                        aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-angle-down w-100 newp-ic" aria-hidden="true"></i>
                                    </button>
                                    <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item dpimg" href="#"><img src="accesslogo.png" alt="Logo"/> Access Bank PLC</a>
                                        <a className="dropdown-item dpimg" href="#"><img src="afrinvestlogo.png" alt="Logo"/> AfrInvest WA LTD</a>
                                        <a className="dropdown-item dpimg" href="#"><img src="aiico.jpg" alt="Logo"/> AIICO Insurance PLC</a>
                                        <a className="dropdown-item dpimg" href="#"><img src="aiico.jpg" alt="Logo"/> AIICO Money Market Fund PLC</a>
                                        <a className="dropdown-item dpimg" href="#"><img src="assets/img/uplogo.png" alt="Logo"/> BSS Industries Ltd</a>
                                        <a className="dropdown-item dpimg" href="#"><img src="cavertonlogo.png" alt="Logo"/> Caverton Offshore Support Group</a>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="nameofevent" className="small">Name of the Event</label>
                                <input type="text" className="form-control" id="nameofevent" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="eventtype" className="smallsmall">Event Type</label>
                                <div className="dropdown">
                                    <button className="text-left dropdown-toggle w-100 bg-white py-2 rounded border border-secondary" 
                                        type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                                        aria-haspopup="true" aria-expanded="false">
                                        Event Type
                                        <i className="fa fa-angle-down w-100 newp-ic" aria-hidden="true" style={{right: "-21.9rem"}}></i>
                                    </button>

                                    <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">

                                        <div className="media">
                                            <span alt="John Doe" className="rounded-circle indi-newp"></span>
                                            <div className="media-body">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <a className="dropdown-item dpimg" href="#"> Corporate Action</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="date" className="small">Date</label>
                                <input className="form-control text-uppercase" type="date" id="example-datetime-local-input" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="time" className="small">Time</label>
                                <input className="form-control text-uppercase" type="time" id="example-datetime-local-input" />
                            </div>

                            <label htmlFor="venue" className="small">Venue</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="venue" 
                                aria-describedby="venueaddon" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-white border-secondary" id="venueaddon">
                                    <i className="fas fa-map-marker-alt"></i>Map</span>
                                </div>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Create Event</button>
                        </div>

                </div>
            </div>
        </div>
    )
}

class NewProfile extends React.Component {
    constructor() {
        super();

        this.state = {
            firstname: "",
            lastname: "",
            registrarname: ""
        }
    }

    handleSignOut = () => {
        store.remove("userdata");
        this.props.history.push("/login");

        fetch("/api/logout", {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json' // 'application/json',
                },
            })
            .then((response) => {
                console.log("response: ", response);
                return response.json();
            })
            .then((response) => {
                console.log("response: ", response);            
            })
            .catch((error) => {
                console.log("erro: ", error);
            })
    }

    render() {
        return (
            <article className="cont-mother other-mother">
                <Utilities.NavBar 
                    firstname={this.state.firstname} 
                    lastname={this.state.lastname} 
                    handleSignOut={this.handleSignOut}
                    registrarname={this.state.registrarname}
                    />

                <section className="otherpages row mt-3">

                    <div className="col-3 mr-3 ml-5 bg-white shadow rempad rounded" 
                        style={{flex: "0 0 28%", maxWidth: "28%", height: "1000px"}}>
                            <EventBar />
                            <StatsCards />

                            <Utilities.VerticalSpacing />
                    </div>

                    <div className="col-9 rempad "
                        style={{flex: "0 0 64%", maxWidth: "64%"}}>
                        <MidPaneOne />
                        <MidPaneTwo />
                        <MidPaneThree />
                    </div>

                </section>

                <div className="modal fade" id="addeventmodal">
                    <div className="modal-dialog w30">
                        <div className="modal-content">

                            <div className="modal-header border-0">

                                <div className="modal-title font-weight-bold">New Event</div>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body pt-0">
                                    <div className="form-group">
                                        <label htmlFor="venue" className="small">Client</label>
                                        <div className="dropdown">
                                            <button className="text-left dropdown-toggle w-100 bg-white py-2 rounded border border-secondary" 
                                                type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                                                aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-angle-down w-100 newp-ic" aria-hidden="true"></i>
                                            </button>
                                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item dpimg" href="#"><img src="accesslogo.png" alt="Logo"/> Access Bank PLC</a>
                                                <a className="dropdown-item dpimg" href="#"><img src="afrinvestlogo.png" alt="Logo"/> AfrInvest WA LTD</a>
                                                <a className="dropdown-item dpimg" href="#"><img src="aiico.jpg" alt="Logo"/> AIICO Insurance PLC</a>
                                                <a className="dropdown-item dpimg" href="#"><img src="aiico.jpg" alt="Logo"/> AIICO Money Market Fund PLC</a>
                                                <a className="dropdown-item dpimg" href="#"><img src="assets/img/uplogo.png" alt="Logo"/> BSS Industries Ltd</a>
                                                <a className="dropdown-item dpimg" href="#"><img src="cavertonlogo.png" alt="Logo"/> Caverton Offshore Support Group</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="nameofevent" className="small">Name of the Event</label>
                                        <input type="text" className="form-control" id="nameofevent" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="eventtype" className="smallsmall">Event Type</label>
                                        <div className="dropdown">
                                            <button className="text-left dropdown-toggle w-100 bg-white py-2 rounded border border-secondary" 
                                                type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                                                aria-haspopup="true" aria-expanded="false">
                                                Event Type
                                                <i className="fa fa-angle-down w-100 newp-ic" aria-hidden="true" style={{right: "-21.9rem"}}></i>
                                            </button>

                                            <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">

                                                <div className="media">
                                                    <span alt="John Doe" className="rounded-circle indi-newp"></span>
                                                    <div className="media-body">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <a className="dropdown-item dpimg" href="#"> Corporate Action</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="date" className="small">Date</label>
                                        <input className="form-control text-uppercase" type="date" id="example-datetime-local-input" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="time" className="small">Time</label>
                                        <input className="form-control text-uppercase" type="time" id="example-datetime-local-input" />
                                    </div>

                                    <label htmlFor="venue" className="small">Venue</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" id="venue" 
                                        aria-describedby="venueaddon" />
                                        <div className="input-group-append">
                                            <span className="input-group-text bg-white border-secondary" id="venueaddon">
                                            <i className="fas fa-map-marker-alt"></i>Map</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Create Event</button>
                                </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="tradesmodal">
                    <div className="modal-dialog w40 modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header border-0 text-center mx-auto">

                                <div className="modal-title font-weight-bold">Update Trades</div>
                                    <button type="button" className="close cl-times" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body pt-0 w-75 mx-auto">

                                    <p className="text-center py-4">Upload the latest CSV or XLS File gotten from the<br />
                                    Central Securities Clearing System (CSCS)</p>

                                    <div className="input-group mb-3">
                                        <div className="custom-file myformfile">
                                        <input type="file" className="custom-file-input myinput" id="inputGroupFile02" />
                                        <label className="custom-file-label mylabel" htmlFor="inputGroupFile02">File name...</label>
                                        </div>
                                        <div className="input-group-preppend">
                                        {/*<span className="input-group-text" id="">Upload</span>*/}
                                        </div>
                                    </div>

                                </div>

                                <div className="modal-footer mx-auto border-top-0 pb-4">
                                    <button type="button" className="btn btn-primary tradebg" data-dismiss="modal">Create Event</button>
                                </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="setupregistermodal">
                    <div className="modal-dialog " style={{width: "26%"}}>
                        <div className="modal-content">

                            <div className="modal-header border-0 mx-auto">

                                <div className="modal-title font-weight-bold">Setup New Register</div>
                                    <button type="button" className="close cl-times" data-dismiss="modal" style={{right: "-73px"}}>&times;</button>
                                </div>

                                <div className="modal-body pt-0 mx-auto" style={{width: "90%"}}>

                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">Security Type</label>

                                        <div className="col-sm-7">
                                            <div className="dropdown">
                                                <button className="text-left dropdown-toggle w-100 bg-white py-1 rounded border border-secondary" 
                                                    type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-angle-down w-100 newp-ic" aria-hidden="true" style={{right: "-7rem"}}></i>
                                                </button>
                                                <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item dpimg" href="#">Bond</a>
                                                    <a className="dropdown-item dpimg" href="#">More Bond</a>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="file mb-3">
                                        <img src="../assets/img/uplogo.png" alt="Logo" style={{width: "40px"}} />
                                        <input type="file" name="file" className="stbn-inpt"/>
                                        <span className="ml-3 upltxt small">Upload Registrar Logo (PNG/JPG)</span>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="symbol" className="small">Symbol</label>
                                        <input type="text" className="form-control" id="symbol" placeholder="ALL-CAPS" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Description</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="outshares" className="small">Outstanding Shares</label>
                                        <input type="number" className="form-control" id="outshares" placeholder="0" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="date" className="small">Date</label>
                                        <input className="form-control text-uppercase" type="date" id="example-datetime-local-input" />
                                    </div>

                                    <label htmlFor="csvxlx" className="small">Upload Data (XLS/CSV)</label>
                                    <div className="input-group mb-3">
                                        <div className="custom-file myformfile1">

                                        <input type="file" className="custom-file-input myinpu1" id="inputGroupFile02" />
                                        <label className="custom-file-label mylabel1" htmlFor="inputGroupFile02">Browse...</label>
                                        </div>
                                        <div className="input-group-preppend">
                                        {/*<span className="input-group-text" id="">Upload</span>*/}
                                        </div>
                                    </div>

                                </div>

                                <div className="modal-footer mx-auto border-0">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Next</button>
                                </div>

                        </div>
                    </div>
                </div>

            </article>
        );
    }

    componentDidMount() {
        let tokendata = store.get("userdata");

        console.log("token: ", tokendata);

        if(tokendata) {
            this.setState({
                firstname: tokendata.firstname,
                lastname: tokendata.lastname,
                registrarname: tokendata.registrarname
            })
        }
        else if(!tokendata) {
            alertify.notify("Oooops! Looks like session time has expired. Please sign in again.", "warning", 3, 
                function() {
                    this.props.history.push('/login');
                }.bind(this)
            )
        }
    }
}

export {NewProfile};
