

import React from 'react';
import './Diagnostic/oncology.css'
import { Link } from 'react-router-dom';

const Ourcenters = () => {
    return (
        <>
            <div className='header-title text-center my-4 mx-2  p-4 bg-light rounded-lg'>
                <h2 className='text-dark'>Our Centers</h2>
            </div>
            <div className='container'>
                <div className=" bg-light rounded p-4  mt-5 row">
                    <h3 className='text-capitalize'></h3>
                    <div className="col-md-6">
                        <div className="bg-light rounded p-4">
                            <div className="p-4 bg-white rounded shadow-lg card border-0 mb-4">
                                <p className="mb-2 text-capitalize mb-3  shadow-lg card border-0  bg-white p-3 rounded">
                                    228 Changi Rd,<br /> #01-01 El Bayan Institute,<br /> Singapore 419741
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.763945295033!2d103.90210147410447!3d1.317249961681566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19195225f763%3A0xe8bf828230fa66d1!2sEl%20Bayan%20Institute!5e0!3m2!1sen!2sin!4v1712898962288!5m2!1sen!2sin" width="430" height="250" allowfullscreen="" title='maps' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-light rounded p-4">
                            <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4">
                                <p className="mb-2 text-capitalize mb-3  shadow-lg card border-0  bg-white p-3 rounded">
                                    2 VENTURE DRIVE,<br /> #02-02, VISION EXCHANGE <br /> Singapore
                                </p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.743192307615!2d103.74214982410437!3d1.3301509116406574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11dbf465c3df%3A0xd4524aa8ece03d34!2sVision%20Exchange!5e0!3m2!1sen!2sin!4v1712899575918!5m2!1sen!2sin" width="430" height="250" title='mapq' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                            </div>

                        </div>
                    </div>

                </div>




            </div>


        </>

    )
};

export default Ourcenters;
