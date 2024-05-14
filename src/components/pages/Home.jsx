import React from 'react'
import OwlCarousel from 'react-owl-carousel'
const Home = () => {
    const options = {
        loop: true,
        margin: 8,
        nav: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    };

    return (
        <>

            <section className='carousel-section'>
                <OwlCarousel className='owl-theme'  {...options}>
                    <div className='item'>
                        <img style={{ height: "510px", width: '100%' }} src="img/health.jpg" alt="" />
                    </div>
                    <div className='item'>
                        <img style={{ height: "510px", width: '100%' }} src="img/hospitalfuture (1).jpg" alt="" />
                    </div>
                    <div className='item'>

                        <img style={{ height: "510px", width: '100%' }} src="img/hospt.jpg" alt="" />

                    </div>
                    {/* <div className='item'>
                        <h4>3</h4>
                        <img style={{ height: "400px", width: '100vw' }} src="img/news-7.jpg" alt="" />

                    </div>
                    <div className='item'>
                        <h4>4</h4>
                        <img style={{ height: "400px", width: '100vw' }} src="img/news-5.jpg" alt="" />

                    </div> */}

                </OwlCarousel>;
            </section>
            <div className="container">
                <section className='categories-section '>
                    <div className=" bg-light rounded my-5  row">
                        <h3 className='text-capitalize pt-4'>Our Focus,Your Wellbeing</h3>
                        <div className="col-md-12">
                            <div className="bg-light rounded p-4">
                                <div className="p-4 bg-white rounded shadow-lg card border-0 mb-4 cardBorder">
                                    <h5 className="mb-2 text-capitalize">Explore Our Clinical Excellence</h5>
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <p className="mb-0 text-capitalize">
                                                In our endeavor to enhance healthcare services and address the diverse medical needs, we propose the creation of an Integrated Healthcare Hub. This comprehensive facility is serving as a beacon of excellence, offering specialized diagnostic, treatment, and training services across various medical disciplines In response to the growing need for advanced cancer care facilities, we propose the establishment of an Advanced Medical Oncology Center. This state-of-the-art facility is offering a comprehensive diagnostic, treatment, and training services to address the rising incidence of Cardiology Diagnostic and cancer in the region.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </section>

            </div>
            <div className="container">
                <section className='categories-section'>
                    <div className=" bg-light rounded my-5  row">
                        <h3 className='text-capitalize mt-4'>Our Purpose</h3>
                        <div className="col-md-6">
                            <div className="bg-light rounded p-4">
                                <div className="p-4 bg-white rounded shadow-lg card border-0 mb-4 cardBorder">
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
                                <div className="p-4 bg-white rounded  shadow-lg card border-0 mb-4 cardBorder">
                                    <h5 className="mb-2 text-capitalize">MISSION</h5>
                                    <div className="row g-4">
                                        <div className="col-12">
                                            <p className="mb-0 text-capitalize">
                                                To emerge as a leading generic manufacturer and marketer, providing high-quality chemotherapy and supportive medications at an affordable cost accessible to all.

                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </div>


        </>
    )
}

export default Home