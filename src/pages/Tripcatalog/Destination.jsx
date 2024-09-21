import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Destination = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    
    return (
        <>
            <div>
                <div className="shadow-lg" id="Tripcatalog">
                    <div className="container py-5">
                        <div className="text-center">
                            <h2 className="lead display-4 fw-semibold">Top Destinations</h2>
                        </div>
                    </div>

                    <div id="destinationCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="0" className="active bg-warning" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=' bg-warning'> </button>
                            <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=' bg-warning'></button>
                        </div>

                        <div className="carousel-inner container">
                           
                            <div className="carousel-item active py-5">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 py-lg-4">
                                        <div>
                                            <h6>Romantic City of Lights</h6>
                                            <h2>Paris, France</h2>
                                            <hr />
                                        </div>
                                        <p className="fw-normal fs-5 lead">
                                            Immerse yourself in the timeless charm of Paris, with iconic landmarks like the Eiffel Tower and
                                            Louvre Museum.
                                            Explore world-class art, fashion, and cuisine in the city's vibrant neighborhoods.
                                            Enjoy scenic boat rides along the Seine River, passing by historic bridges and landmarks.

                                        </p>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            Click for more images
                                        </button>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">More images of Paris</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <img src={"images/paris 1.avif"} alt="" width="100%" />
                                                        <img src={"images/paris 2.avif"} alt="" width="100%" />
                                                        <img src={"images/paris 3.avif"} alt="" width="100%" />
                                                        <img src={"images/paris 4.avif"} alt="" width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-12 py-4" data-aos="flip-left">
                                        <img
                                            src={"images/paris.avif"}
                                            alt="Paris"
                                            className="img-fluid"
                                            style={{ height: "400px", width: "100%", objectFit:'cover' }}
                                        />
                                    </div>
                                </div>
                            </div>

                           
                            <div className="carousel-item py-5">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 py-4">
                                        <div>
                                            <h6>Tropical Paradise</h6>
                                            <h2>Bali, Indonesia</h2>
                                            <hr />
                                        </div>
                                        <p className="fw-normal fs-5 lead">
                                            Relax on pristine beaches, explore lush rice terraces, and experience the island's spiritual vibes.
                                            Enjoy surfing, snorkeling, hiking, and yoga retreats.
                                            Discover ancient temples, traditional villages, and vibrant festivals.
                                            Savor Indonesian delicacies like satay, nasi goreng, and rendang.
                                            Find inner peace and rejuvenation at luxurious spa resorts and wellness
                                        </p>
                                        <button
                                            type="button"
                                            className="btn btn btn-warning" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal2"
                                        >
                                            Click for more images
                                        </button>
                                        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModal2Label"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModal2Label">More images of Bali</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <img src={"images/bali 1.avif"} alt="" width="100%" />
                                                        <img src={"images/bali 2.avif"} alt="" width="100%" />
                                                        <img src={"images/bali 3.avif"} alt="" width="100%" />
                                                        <img src={"images/bali 4.avif"} alt="" width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-12 py-4">
                                        <img
                                            src={"images/bali.avif"}
                                            alt="Bali"
                                            className="img-fluid"
                                            style={{ height: "400px", width: "100%", objectFit: 'cover' }}
                                            data-aos="flip-left"
                                        />
                                    </div>
                                </div>
                            </div>

                            
                            <div className="carousel-item py-5">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 py-4">
                                        <div>
                                            <h6>Vibrant Mediterranean City</h6>
                                            <h2>Barcelona, Spain</h2>
                                            <hr />
                                        </div>
                                        <p className="fw-normal fs-5 lead">
                                            Relax on pristine beaches, explore lush rice terraces, and experience the island's spiritual vibes.
                                            Enjoy surfing, snorkeling, hiking, and yoga retreats.
                                            Discover ancient temples, traditional villages, and vibrant festivals.
                                            Savor Indonesian delicacies like satay, nasi goreng, and rendang.
                                            Find inner peace and rejuvenation at luxurious spa resorts and wellness
                                        </p>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal4"
                                        >
                                            Click for more images
                                        </button>
                                        <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModal4Label"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModal4Label">More images of Barcelona</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <img src="images/barcelona 1.avif" alt="" width="100%" />
                                                        <img src="images/barcelona 2.avif" alt="" width="100%" />
                                                        <img src="images/barcelona 3.avif" alt="" width="100%" />
                                                        <img src="images/barcelona 4.avif" alt="" width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-12 py-4">
                                        <img
                                            src={"images/barcelona.avif"}
                                            alt="Barcelona"
                                            className="img-fluid"
                                            style={{ height: "400px", width: "100%", objectFit: 'cover' }}
                                            data-aos="flip-left"
                                        />
                                    </div>
                                </div>
                            </div>

                         
                        </div>

                    

                    </div>
                </div>
            </div>
        </>
    );
}

export default Destination;
