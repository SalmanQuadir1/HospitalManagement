import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <>
                {/* Footer Start */}
                <div className="container-fluid bg-dark footer py-5">
                    <div className="container py-5">
                        <div
                            className="pb-4 mb-4"
                            style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}
                        >
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <Link to="#" className="d-flex flex-column flex-wrap">
                                        <p className="text-primary mb-0 display-6">SPINELLE</p>
                                        <small
                                            className="text-light"
                                            style={{ letterSpacing: 27, lineHeight: 0 }}
                                        >
                                            HEALTH
                                        </small>
                                    </Link>
                                </div>
                                {/* <div className="col-lg-9">
                                    <div className="d-flex position-relative rounded-pill overflow-hidden">
                                        <input
                                            className="form-control border-0 w-100 py-3 rounded-pill"
                                            type="email"
                                            placeholder="example@gmail.com"
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary border-0 py-3 px-5 rounded-pill text-white position-absolute"
                                            style={{ top: 0, right: 0 }}
                                        >
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6 col-xl-4">
                                <div className="footer-item-1">
                                    <h4 className="mb-4 text-white">Get In Touch</h4>
                                    <p className="text-secondary line-h">
                                        Address: <span className="text-white">EUNOS,Sector-5,AVE 7</span>
                                    </p>
                                    <p className="text-secondary line-h">
                                        Email: <span className="text-white">info@xyz.com.sg</span>
                                    </p>
                                    <p className="text-secondary line-h">
                                        Phone: <span className="text-white">+65 82388027</span>
                                    </p>
                                    <div className="d-flex line-h">
                                        <Link
                                            className="btn btn-light me-2 btn-md-square rounded-circle"
                                            to=""
                                        >
                                            <i className="fab fa-twitter text-dark" />
                                        </Link>
                                        <Link
                                            className="btn btn-light me-2 btn-md-square rounded-circle"
                                            to=""
                                        >
                                            <i className="fab fa-facebook-f text-dark" />
                                        </Link>
                                        <Link
                                            className="btn btn-light me-2 btn-md-square rounded-circle"
                                            to=""
                                        >
                                            <i className="fab fa-youtube text-dark" />
                                        </Link>
                                        <Link className="btn btn-light btn-md-square rounded-circle" to="">
                                            <i className="fab fa-linkedin-in text-dark" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <div className="footer-item-2">

                                    <div className="d-flex flex-column mb-4 ">
                                        <h4 className="mb-4 text-white">Recent Posts</h4>
                                        <Link to="#"></Link>
                                        <div className="d-flex align-items-center">
                                            <Link to="#">
                                                <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                                    <img
                                                        src="img/cancer1.jpg"
                                                        style={{ height: '80px', width: '80px' }}
                                                        className="img-zoomin  rounded-circle"
                                                        alt=""
                                                    />
                                                </div>
                                            </Link>
                                            <div className="d-flex flex-column ps-4">
                                                <Link to="#">
                                                    <p className="text-uppercase text-white mb-3"></p>
                                                </Link>
                                                <Link to="#" className="h6 text-white">
                                                    can cancer be asymptomatic                                                </Link>
                                                <small className="text-white d-block">
                                                    <i className="fas fa-calendar-alt me-1" /> JAN 9, 2024
                                                </small>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Link to="#">
                                                <div className="rounded-circle border border-2 border-primary overflow-hidden mt-3">
                                                    <img
                                                        src="img/cancer2.jpg"
                                                        style={{ height: '80px', width: '80px' }}
                                                        className="img-zoomin  rounded-circle"
                                                        alt=""
                                                    />
                                                </div>
                                            </Link>
                                            <div className="d-flex flex-column ps-4">
                                                <Link to="#">
                                                    <p className="text-uppercase text-white mb-3"></p>
                                                </Link>
                                                <Link to="#" className="h6 text-white">
                                                    Is cancer treatment expensive                                             </Link>
                                                <small className="text-white d-block">
                                                    <i className="fas fa-calendar-alt me-1" /> JAN 12, 2024
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="d-flex flex-column">
                                        <Link to="#"></Link>
                                        <div className="d-flex align-items-center">
                                            <Link to="#">
                                                <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                                    <img
                                                        src="img/cancer2.jpg"
                                                        style={{ height: '80px', width: '100px !important' }}
                                                        className="img-zoomin img-fluid rounded-circle "
                                                        alt=""
                                                    />
                                                </div>
                                            </Link>
                                            <div className="d-flex flex-column ps-4">
                                                <Link to="#">
                                                    <p className="text-uppercase text-white mb-3"></p>
                                                </Link>
                                                <Link to="#" className="h6 text-white">
                                                    Is cancer treatment expensive
                                                </Link>
                                                <small className="text-white d-block">
                                                    <i className="fas fa-calendar-alt me-1" /> Dec 9, 2024
                                                </small>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <div className="d-flex flex-column text-start footer-item-3">
                                    <h4 className="mb-4 text-white">Categories</h4>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Careers
                                    </Link>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Trainings
                                    </Link>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Partner With Us
                                    </Link>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Colloboration
                                    </Link>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Life At XYZ
                                    </Link>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Know About Cancer
                                    </Link>
                                    <Link className="btn-link text-white" to="">
                                        <i className="fas fa-angle-right text-white me-2" /> Clientele

                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer End */}
                {/* Copyright Start */}
                <div className="container-fluid copyright bg-dark py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                <span className="text-light">
                                    <Link to="#">
                                        <i className="fas fa-copyright text-light me-2" />
                                        ASTE
                                    </Link>
                                    , All right reserved.
                                </span>
                            </div>
                            <div className="col-md-6 my-auto text-center text-md-end text-white">
                                Developed and designed by ASTE
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright End */}
            </>

        </>
    )
}

export default Footer