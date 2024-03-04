import React from 'react'

const Blogs = () => {
    return (
        <>
            <div className="bg-light rounded my-4 p-2">
                <h4 className="mb-4">Blogs</h4>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="d-flex align-items-center p-3 bg-white rounded ">
                            <img src="img/cancer1.jpg" style={{ height: '80px' }} className="img-fluid rounded" alt="" />
                            <div className="ms-3">
                                <a href="#" className="h6 mb-2 text-capitalize">
                                    Is cancer treatment expensive
                                </a>
                                <p className="text-dark mt-3 mb-0 me-3">
                                    <i className="fa fa-clock" /> Get Started
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="d-flex align-items-center p-3 bg-white rounded">
                            <img src="img/cancer4.jpg" className="img-fluid rounded" style={{ height: '80px' }} alt="" />
                            <div className="ms-3 text-capitalize">
                                <a href="#" className="h6 mb-2">
                                    can cancer be asymptomatic
                                </a>
                                <p className="text-dark mt-3 mb-0 me-3">
                                    <i className="fa fa-clock" /> Get Started
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Blogs