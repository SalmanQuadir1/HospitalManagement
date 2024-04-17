

import React from 'react';
import './Diagnostic/oncology.css'
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
        <>
            <div className='header-title text-center my-4 mx-2  p-4 bg-light rounded-lg'>
                <h2 className='text-dark'>About Us</h2>
            </div>
            <div className='container'>
                <div className=" bg-light rounded p-4  mt-5 row">
                    <h3 className='text-capitalize'>Our Purpose</h3>
                    <div className="col-md-6">
                        <div className="bg-light rounded p-4">
                            <div className="p-4 bg-white rounded shadow-lg card border-0 mb-4">
                                <h5 className="mb-2 text-capitalize">VISSION</h5>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <p className="mb-0 text-capitalize">
                                            To establish a specialty pharmaceutical company with a robust domestic and global footprint, leveraging cutting-edge technology and an innovative product pipeline to address unmet medical needs worldwide.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-light rounded p-4">
                            <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4">
                                <h5 className="mb-2 text-capitalize">MISSION</h5>
                                <div className="row g-4">
                                    <div className="col-12">
                                        <p className="mb-0 text-capitalize text-justify">
                                            To emerge as a leading generic manufacturer and marketer, providing high-quality chemotherapy and supportive medications at an affordable cost accessible to all.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className=" bg-light rounded p-4  directors-card mt-5 row">
                    <h3 className='text-capitalize'>Board of Directors</h3>

                    <div className="col-lg-6 col-xl-3">

                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-center bg-white p-3 rounded mb-2 directors-card1">
                                <Link to="#">
                                    <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                        <img
                                            src="img/user.png"
                                            className="img-zoomin img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                                <div className="d-flex flex-column ps-4 ">

                                    <Link to="#" className="h6 text-dark">
                                        Josh Gates
                                    </Link>
                                    <small className="text-dark d-block">
                                        <i className="fas fa-user me-1" /> CEO
                                    </small>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">

                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-center bg-white p-3 rounded mb-2 directors-card1">
                                <Link href="#">
                                    <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                        <img
                                            src="img/user.png"
                                            className="img-zoomin img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                                <div className="d-flex flex-column ps-4 ">

                                    <Link href="#" className="h6 text-dark">
                                        Josh Gates
                                    </Link>
                                    <small className="text-dark d-block">
                                        <i className="fas fa-user me-1" /> Director
                                    </small>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">

                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-center bg-white p-3 rounded mb-2 directors-card1">
                                <Link href="#">
                                    <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                        <img
                                            src="img/user.png"
                                            className="img-zoomin img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                                <div className="d-flex flex-column ps-4 ">

                                    <Link href="#" className="h6 text-dark">
                                        Josh Gates
                                    </Link>
                                    <small className="text-dark d-block">
                                        <i className="fas fa-user me-1" /> CTO
                                    </small>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">

                        <div className="d-flex flex-row">
                            <div className="d-flex align-items-center bg-white  p-3 rounded mb-2 directors-card1">
                                <Link href="#">
                                    <div className="rounded-circle border border-2 border-primary overflow-hidden">
                                        <img
                                            src="img/user.png"
                                            className="img-zoomin img-fluid rounded-circle w-100"
                                            alt=""
                                        />
                                    </div>
                                </Link>
                                <div className="d-flex flex-column ps-4 ">

                                    <Link href="#" className="h6 text-dark">
                                        Josh Gates
                                    </Link>
                                    <small className="text-dark d-block">
                                        <i className="fas fa-user me-1" />HR
                                    </small>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className=" bg-light rounded p-4 my-5  mt-5 row">
                    <h3 className='text-capitalize mx-4'>Director's Message</h3>
                    <div className="col-md-12">
                        <div className="bg-light rounded p-4">
                            <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <p className="mb-0 text-capitalize">
                                            We at Spinelle have a vision to make affordable cancer chemo and supportive therapy available to the poorest of the poor of this world. And to some extent, we are there. Supporting cancer survivors in terms of adding YEARS to their life and adding LIFE to their years by augmenting their quality of life post-cancer.
                                            We at spinelle achieve this through manufacturing the products at our latest GMP certified plant in India and our countrywide network of dedicated field force and distributors. Spinelle today is amongst the most trusted suppliers to most of the eminent public and private sector hospitals and institutions.
                                            Countries other than the US and Europe and most of the underdeveloped or developing nations look forward to India for supplementing their medical needs because of a wide price disparity. India today is considered as the Pharmacy of the world.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </>

    )
};

export default Aboutus;
