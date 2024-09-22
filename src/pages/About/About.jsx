import React from 'react'
import Trip from '../Tripcatalog/Trip'
const About = () => {
    return (
        <div>
            
            <section className="about-sec " id="About">
                <div className="container py-lg-5">
                    <div className="d-lg-flex align-items-center">

                        <div className="col-lg-6 col-md-12 ">
                            <img src={"images/540x540.jpg"} alt="Travelsmart" className="img-fluid mb-4 mb-lg-0" />
                        </div>

                        <div className="col-lg-6 col-md-12 text-lg-start px-3">
                            <div className="py-lg-5 my-lg-5 lh-lg">
                                <h1 className="lead display-4 subtitle text-center text-lg-start">TRAVEL SMART</h1>
                                <h1 className="title text-center text-lg-start">About Our Company</h1>
                                <hr className='.hr-gradient' />

                                <p className=" py-lg-4">
                                    Travel Smart is your one-stop destination for all things travel.
                                    itineraries and finding the best deals, we're here to assist you every step
                                    of the way. Our goal is to inspire and empower travelers to explore new horizons,
                                    create lasting memories, and broaden their perspectives.
                                    We've been helping adventurers like you discover the world since 2024.
                                    Our passion for exploration and commitment to providing exceptional
                                    travel experiences have driven us to become a leading online travel resource.
                                    As a travel portal, we offer a wide range of services to make your journey
                                    seamless and unforgettable. From booking flights and accommodations to planning

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Trip />
        </div>
    );
};


export default About