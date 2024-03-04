import React from 'react'

const Pressreleases = () => {
    return (
        <>
            <div className="bg-light rounded p-4">
                <h4 className="mb-4">Press Releases</h4>
                <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h5 className='text-uppercase'>XYZ Participated in cancer walk rally</h5>
                                <a href="#" className="link-hover text-body fs-6">
                                    <i className="fas fa-long-arrow-alt-right me-1" /> Read more
                                </a>
                            </div>
                            <small className="text-body d-block mb-3">
                                <i className="fas fa-calendar-alt me-1" /> Dec 9, 2024
                            </small>
                            <p className="mb-0 text-capitalize">
                                XYZ company  successfully participated and happy to take part with leading sponsorship in cancer awarness social...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-0">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <h5 className='text-uppercase'>Taking the flight to the streets</h5>
                                <a href="#" className="link-hover text-body fs-6">
                                    <i className="fas fa-long-arrow-alt-right me-1" /> Read more
                                </a>
                            </div>
                            <small className="text-body d-block mb-3">
                                <i className="fas fa-calendar-alt me-1" /> Dec 9, 2024
                            </small>
                            <p className="mb-0 text-capitalize">
                                XYZ company  is back with the second edition of its cancer awareness drive,The pink street campaign...
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Pressreleases