import React, { useEffect, useState } from 'react';
import About from '../../About/About';
import { Carousel } from 'react-bootstrap';
import Spin from '../../Spinner/Spin';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timer); 
    }, []);

  
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    if (loading) {
        return (
            <div className="Big-Spinner d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <Spin/>
            </div>
        );
    }

    
    return (
        <>
            <Carousel className="background-overlay">
           
                <Carousel.Item className="position-relative text-center">
                    <img
                        className="d-block w-100 img-fluid"
                        src={"images/1.jpg"}
                        alt="Sydney, Australia"
                    />
                    <Carousel.Caption className="d-lg-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle overlay-text text-center">
                        <h3 className="display-5 text-white">WELCOME TO OUR TRAVEL</h3>
                        <p className="lead text-white d-none  d-lg-flex">
                            A beautiful coastal city with iconic landmarks like the Sydney Opera House and Bondi Beach.
                        </p>
                        <a href="#Travel Packages" className="btn btn-outline-warning mt-3 d-lg-flex d-none">
                            Explore Sydney
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

               
                <Carousel.Item className="position-relative text-center">
                    <img
                        className="d-block w-100 img-fluid"
                        src={"images/2.jpg"}
                        alt="Kyoto, Japan"
                    />
                    <Carousel.Caption className="d-lg-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle overlay-text text-center">
                        <h3 className="display-5 text-white">Kyoto, Japan</h3>
                        <p className="lead text-white  d-none  d-lg-flex">
                            A historic city known for its ancient temples, shrines, and traditional culture.
                        </p>
                        <a href="#Travel Packages" className="btn btn-outline-warning mt-3 d-lg-flex d-none">
                            Discover Kyoto
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

            
                <Carousel.Item className="position-relative text-center">
                    <img
                        className="d-block w-100 img-fluid"
                        src={"images/3.jpg"}
                        alt="Dubai, UAE"
                    />
                    <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center position-absolute top-50 start-50 translate-middle overlay-text text-center">
                        <h3 className="display-5 text-white">Dubai, UAE</h3>
                        <p className="lead text-white  d-none  d-lg-flex">
                            A vibrant city known for luxury shopping, ultramodern architecture, and lively nightlife.
                        </p>
                        <a href="#Travel Packages" className="btn btn-outline-warning mt-3 d-lg-flex d-none">
                            Experience Dubai
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <About />
        </>
    );
};

export default Home;
