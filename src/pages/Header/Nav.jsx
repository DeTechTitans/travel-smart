import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
const Nav = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [confirmedLocation, setConfirmedLocation] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLocationSelection = (event) => {
        setSelectedLocation(event.target.value);
    };


    const handleConfirmLocation = () => {
        if (selectedLocation.trim()) {
            setLoading(true);
            setTimeout(() => {
                setConfirmedLocation(selectedLocation);
                alert(`Location confirmed: ${selectedLocation}`);
                setSelectedLocation("");
                setLoading(false);
            }, 1000);
        } else {
            alert("Please enter a location.");
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container py-lg-4">
                    <a className="navbar-brand text-black lead display-5 fs-2 fw-bold my-lg-3" href="#">
                        Travel Smart
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-a active text-black fw-semibold fs-6 mx-lg-5" href="#Home" aria-current="page">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a text-black fw-semibold fs-6" href="#About">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a text-black fw-semibold fs-6 mx-lg-5" href="#Tripcatalog">
                                    Trip Catalog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a text-black fw-semibold fs-6 mx-lg-4" href="#Contactus">
                                    Contact Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#sidebar"
                                    role="button"
                                    className="nav-a d-flex align-items-center mx-lg-5"
                                    data-bs-toggle="offcanvas"
                                    aria-controls="offcanvasSearch"
                                >
                                    <FaSearch className="text-black me-2" />
                                    <span className="text-black">Search</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {<div className="offcanvas offcanvas-top h-auto" tabIndex='-1' id="sidebar" aria-labelledby="sidebar-label">
                <div className='container py-5'>
                    <h5 className="offCanvas-title fw-bolder" id="sidebar-label">Select your Preferred Location</h5>

                    <button
                        className="btn btn-dark element-fullwidth"
                        type="button"
                        style={{ maxWidth: "200px", minWidth: "180px", minHeight: "50px" }}
                        onClick={handleConfirmLocation}
                        disabled={loading}
                    >
                        {loading ? "Confirming..." : "Click Me"}
                    </button>

                    <input
                        type="text"
                        className="form-control px-lg- my-lg-5 my-4"
                        id="validationCustom03"
                        required
                        style={{ minHeight: "70px" }}
                        placeholder="Enter Your Location"
                        onChange={handleLocationSelection}
                        value={selectedLocation}
                    />
                    <div className="invalid-feedback">
                        Please provide the required text
                    </div>

                    <section className="my-5">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.642424494312!2d3.3101309999999997!3d6.606948999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9171cc1003e7%3A0x41b094d0120d48e7!2s${encodeURIComponent(confirmedLocation)}!5e0!3m2!1en!2sng!4v1726652446410!5m2!1en!2sng`}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <button type="button" className="btn-close ms-3" data-bs-dismiss="offcanvas" aria-label="close"></button>
                        </div>
                    </section>
                </div>
            </div>
            }

        </div>
    )
}

export default Nav