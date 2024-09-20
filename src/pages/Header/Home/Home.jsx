import React from 'react'
import { useEffect } from 'react';
import About from '../../About/About';

const Home = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        < div>
            <div id="carouselExampleCaptions" className="carousel slide background-overlay" data-bs-ride="carousel">
                <div className="carousel-indicators" id='Home'>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1">
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
                    </button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                    </button>
                </div>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"images/1.jpg"} className="img-fluid" alt="..." />
                        <div className='overlay-text text-center'>
                            <h3 className='text-center fw-bold lead display-3  text-light'>
                                WELCOME OUR TRAVEL
                            </h3>
                            <div className='lead text-light my-lg-5'>
                                <p>Explore a world of possibilities with our curated travel destinations. From serene beaches to bustling
                                    cities, find your perfect escape.
                                </p>
                            </div>
                            <p class="btn btn-outline-warning my-5">DISCOVER MORE</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='overlay-text text-center'>
                            <h3 className='text-center fw-bold lead display-3  text-light'>
                                Personalized Travel Experiences

                            </h3>
                            <div className='lead text-light my-lg-5'>
                                <p>Tailor your trip to your preferences. Whether you're seeking adventure, relaxation, or cultural
                                    immersion, we have the perfect experience for you
                                </p>
                            </div>
                            <p class="btn btn-outline-warning my-5">DISCOVER MORE</p>
                        </div>
                        <img src={"images/2.jpg"} className="img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="hero-text">
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='overlay-text text-center'>
                            <h3 className='text-center fw-bold lead display-3  text-light'>
                                Book Smart, Travel Smarter
                            </h3>
                            <div className='lead text-light my-lg-5'>
                                <p>Enjoy hassle-free travel planning with our easy-to-use booking platform. Compare flights, hotels, and
                                    activities to find the best deals.
                                </p>
                            </div>
                            <p class="btn btn-outline-warning my-5">DISCOVER MORE</p>
                        </div>
                        <img src={"images/3 (1).jpg"} className=" img-fluid" alt="..." />
                    </div>
                </div>
            </div>
            <About />
        </div>
    )
}

export default Home