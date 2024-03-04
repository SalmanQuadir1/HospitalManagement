import React from 'react'

const ResearchPublications = () => {
    return (
        <div className="bg-light rounded p-4 mb-4 overflow-hidden">
            <h4 className="mb-4">Research Publications</h4>
            <div className="p-4 bg-white rounded   shadow-lg card border-0 mb-4">
                <div className="row g-4">
                    <div className="col-12 ">
                        <div className="d-flex justify-content-between">
                            <h5 className='text-uppercase'>publication 2020</h5>

                        </div>
                        <small className="text-body d-block mb-3">
                            <i className="fas fa-calendar-alt me-1" /> Dec 9, 2020
                        </small>
                        <p className="mb-0 text-capitalize">
                            Chawla ,R shah SB,Pahade A.SOPAPC advisory on anaesthesia.                        </p>
                        <a href="#" className=" btn btn-primary align-items-center mt-3  text-white fs-6">
                            <i className="fas fa-long-arrow-alt-right me-1" /> Read More
                        </a>
                    </div>


                </div>
            </div>
            <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-0">
                <div className="row g-4">
                    <div className="col-6">
                        <div className="d-flex justify-content-between">
                            <h5 className='text-uppercase'>Reasearch published in 2019</h5>

                        </div>
                        <small className="text-body d-block mb-3">
                            <i className="fas fa-calendar-alt me-1" /> Dec 10, 2019
                        </small>
                        <p className="mb-0 text-capitalize">
                            Anita Kulkarni, Manish k keshri , Amit Mittal,Sunny Malik,Samarjit Dey
                        </p>
                        <a href="#" className=" btn btn-primary align-items-center mt-3  text-white fs-6">
                            <i className="fas fa-long-arrow-alt-right me-1" /> Read More
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ResearchPublications