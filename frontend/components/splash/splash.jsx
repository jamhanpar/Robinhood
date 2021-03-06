import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle } from "react-icons/fa";

// Temporary headers and paragraphs taken from Robinhood, but will replace
class Splash extends React.Component {
    render() {
        return (
            <div>
                <div className="main-nav-container">
                    <div className="main-logo">
                        <img src={window.robinhootLogo} />
                    </div>
                    <nav className="main-nav">
                        <ul className="nav-list">
                            <li className="nav-list-item"><a href="https://www.jameshansungpark.com/" target="_blank">Portfolio</a></li>
                            <li className="nav-list-item"><a href="https://www.linkedin.com/in/jameshansungpark/" target="_blank">LinkedIn</a></li>
                            <li className="nav-list-item"><a href="https://github.com/jamhanpar/Robinhoot" target="_blank">Github</a></li>
                            <li className="nav-list-item"><a href="https://angel.co/u/jameshansungpark" target="_blank">AngelList</a></li>
                            <li className="nav-list-item"><a href="mailto:james.hansung.park@gmail.com">Email</a></li>
                        </ul>
                    </nav>
                    <div className="sign-up-options">
                        <span className="login-btn"><Link to='/login'>Log In</Link></span>
                        <Link to='/signup'><button className="sign-up-btn">Sign up</button></Link>
                    </div>
                </div>

                <div className="info-container">
                    <div className="content-container">
                        <div className="sub-content-container">
                            <div className="info-1">
                                <h1 className="info-title-1">Investing for Everyone</h1>
                                <p className="info-p-1">Commission-free investing, plus the tools you need to put your money in motion. Sign up and get your first stock for free. Certain limitations apply.</p>
                                <button className="sign-up-btn-2">
                                    <Link to='/signup'><span>Sign up</span></Link>
                                </button>
                                <div className="free-stock-disclosure">
                                    <h4><FaInfoCircle className="info-icon"/> Free Stock Disclosure</h4>
                                </div>
                            </div>
                            <div className="image-container">
                                <img className="img-1" src={window.frontPageImage} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info-container-2">
                    <h1 className="info-title-2">Break Free from Commission Fees</h1>
                    <p className="info-p-2">Make unlimited commission-free trades in stocks, ETFs, and options with Robinhoot Financials, as well as buy and sell cryptocurrencies with Robinhoot Crypto. See our fee schedule to learn more about cost.</p>
                    <div className="general-disclosure">
                        <h4><FaInfoCircle className="info-icon-grey"/> Commissions Disclosure</h4>
                    </div>
                </div>

                <div className="info-container-3">
                    <div className="content-container-3">
                        <div className="info-subcontainer-3">
                            <div className="info-card">
                                <h1 className="info-title-2 info-title-3">Introducing Fractional Shares</h1>
                                <p className="info-p-3">Invest in thousands of stocks with as little as $1.</p>
                            </div>
                            <div className="info-card-container">
                                <div className="info-card-2">
                                    <h2 className="info-card-title">Invest Any Amount</h2>
                                    <p className="info-card-p">Choose how much you want to invest, and we'll convert from dollars to parts of a whole share.</p>
                                </div>

                                <div className="info-card-2">
                                    <h2 className="info-card-title">Build a Balanced Portfolio</h2>
                                    <p className="info-card-p">Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                                </div>

                                <div className="info-card-2">
                                    <h2 className="info-card-title">Trade in Real Time</h2>
                                    <p className="info-card-p">Trades placed during market hours are executed at that time, so you'll always know the share price.</p>
                                </div>
                            </div>
                            <div className="fractional-shares-disclosure">
                                <h4 className="general-disclosure"><FaInfoCircle className="info-icon-grey"/> Fractional Shares Disclosure</h4>
                            </div>
                        </div>
                        <div className="image-container-3">
                            <img className="image-3" src="https://images.unsplash.com/photo-1587822409067-d887373e7324?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </div>
                </div>

                {/* <div className="info-container-4">
                    <img href="https://images.unsplash.com/photo-1611061614338-6ca5bed41ea3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80"></img>
                    <h1>Learn As You Grow</h1>
                    <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don't have).</p>
                </div> */}

                <div className="info-container-6">
                    <div className="content-container-6">
                        <div className="info-list">
                            <ul>
                                <li className="info-list-item">Stocks {"&"} Funds</li>
                                <li className="info-list-item">Options</li>
                                <li className="info-list-item">Gold</li>
                                <li className="info-list-item">Cash Management</li>
                                <li className="info-list-item">Crypto</li>
                            </ul>
                        </div>

                        <div className="info-list">
                            <ul>
                                <li className="info-list-item">Learn</li>
                                <li className="info-list-item">Support</li>
                                <li className="info-list-item">Snacks</li>
                            </ul>
                        </div>

                        <div className="info-list">
                            <ul>
                                <li className="info-list-item">About us</li>
                                <li className="info-list-item">Careers</li>
                                <li className="info-list-item">Blog</li>
                            </ul>
                        </div>

                        <div className="info-list-2">
                            <h1 className="info-title-6">Robinhoot Snacks</h1>
                            <p className="info-p-6">The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
                            <form className="email-subscribe-input">
                                <input className="email-input-2" placeholder="name@email.com" />
                                <button className="subscribe-btn">Subscribe</button>
                            </form>

                            <ul className="info-list-container">
                                <li className="info-list-item-2">Check the background of the firm on FINRA's BrokerCheck</li>
                                <li className="info-list-item-2">Brokerage Customer Relationship Summary</li>
                                <li className="info-list-item-2">Robinhoot Terms {"&"} Conditions</li>
                                <li className="info-list-item-2">Disclosure Library</li>
                                <li className="info-list-item-2">Privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-container">
                    <div className="content-container">
                        <div className="financial-disclosure">
                            <p>© 2021 Robinhoot. All rights reserved.</p>
                            <br/>
                            <p>Robinhoot means Robinhoot Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhoot Financial, Robinhoot Securities, and Robinhoot Crypto.</p>
                            <br/>
                            <p>All investments involve risks, including the possible loss of capital.</p>
                            <br/>
                            <p>Securities trading is offered to self-directed customers by Robinhoot Financial. Robinhoot Financial is a member of the <a className="finra-link" href="https://www.finra.org/#/">Financial Industry Regulatory Authority (FINRA)</a>.</p>
                            <br/>
                            <div className="view-important-disclosures">
                                <h1 className="general-disclosure"><FaInfoCircle className="info-icon-grey"/> View Important Disclosures</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splash;