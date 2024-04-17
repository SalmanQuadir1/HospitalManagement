import React from 'react'
import './Diagnostic/oncology.css'

const Accreditations = () => {
    return (
        <>
            <div className='header-title text-center my-4 mx-2  p-4 bg-light rounded-lg'>
                <h2 className='text-dark'>Accreditations</h2>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-light rounded  p-4">
                            <h4 className="mb-4 text-uppercase">Awards & Certification</h4>
                            <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <p className="mb-0 text-capitalize">
                                            Spinelle has garnered numerous accolades, certifications, and affiliations, solidifying its standing as a prominent player in the healthcare industry.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-light rounded p-4">
                            <h4 className="mb-4 text-uppercase">Membership</h4>
                            <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="col-12">
                                            <p className="mb-0 text-capitalize">
                                                Spinelle also has a broad network of memberships with prestigious industry associations, fostering collaboration and promoting advancements in healthcare.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="row my-5 mx-auto">
                    <div className="col-lg-12 col-xl-12 mb-3">
                        <div className="footer-item-4 gap-4">

                            <div className="row g-2 bg-light rounded acc-icons">

                                <p className="mb-0 text-capitalize p-4">
                                    These awards illustrate our commitment to providing new solutions and exceptional patient care.
                                </p>

                                <div className="col-2">
                                    <div className="rounded overflow-hidden p-5 acc-icon1">
                                        <img
                                            src="img/promoters/limca.png"
                                            className="img-zoomin img-fluid rounded w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="rounded overflow-hidden p-5 acc-icon2">
                                        <img
                                            src="img/promoters/extr.png"
                                            className="img-zoomin img-fluid rounded w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="rounded overflow-hidden p-5 acc-icon3">
                                        <img
                                            src="img/promoters/risingstars.png"
                                            className="img-zoomin img-fluid rounded w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="rounded overflow-hidden mt-4 p-4 acc-icon4">
                                        <img
                                            src="img/promoters/idma.jpg"
                                            className="img-zoomin img-fluid rounded w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="rounded overflow-hidden mt-5 p-4 acc-icon5 ">
                                        <img
                                            src="img/promoters/pharmexil.png"
                                            className="img-zoomin img-fluid rounded w-100"
                                            alt=""
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Accreditations