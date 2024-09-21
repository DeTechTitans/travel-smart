import React from 'react'
import './Footer.css'
import { Carousel } from 'react-bootstrap';
import parisImage from '../Images/paris.avif';
import tokyoImage from '../Images/'
import { FaEnvelope, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaLocationArrow, FaGlobe } from 'react-icons/fa'
const Footer = () => {
    const destinations = [
        {
            name: "Paris",
            image:  parisImage,
            description: "Experience the romance and charm of the City of Light."
        },

        {
            name: "Tokyo",
            image: tokyoImage,
            description: "Immerse yourself in the bustling metropolis and rich traditions of Tokyo."
        },
        {
            name: "Bali",
            image: baliImage,
            description: "Relax on the tropical beaches and explore the vibrant culture of Bali."
        }
        // Add more destinations as needed
    ];
    return (
        <div className=''>
            <footer className='bg-black'>
                <div className='footer_container'>
                    <div className='wrapper  py-lg-5 ' >
                        <div className='footer_tab1 '>
                            <p className="navbar-brand text-light lead display-5 fs-2 fw-bold px-lg-2" href="#" >Travel Smart</p>
                            <div class="d-lg-flex gap-5 ">
                                <div class=" container-lg d-flex gap-4 py-4 ">
                                    <a id="" target='blank' className='text-light text-white link-secondary link-underline link-underline-opacity-25 link-underline-opacity-75-hover fw-light'>
                                        <FaFacebook size={20} />
                                    </a>

                                    <a className='text-light link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light' target='blank'>
                                        <FaYoutube size={20} />
                                    </a>
                                    <a className='text-light text-white link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light' target='blank'>
                                        <FaTwitter size={20} />
                                    </a>
                                    <a className='text-light text-white link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light' target='blank'>
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F1815218%3Fuclick_id%3Dcaba91ac-c5ae-47d5-8586-2f852fb7ac0f" target='blank' className='text-light text-white link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light'>
                                        <FaLinkedin size={20} />
                                    </a>
                                </div>

                            </div>
                            <div className='copy_right opacity-50 py-lg-2'>
                                <p className=' text-light'>© TECHTITANS © 2024. Privacy Policy</p>
                            </div>
                        </div>
                        <div className='footer_tab2 '>
                            <h2 className=' text-light'>About Us</h2>
                            <p className='text-light opacity-70 '>Welcome to Travel Smart, your reliable companion in exploring the world with ease and confidence. At Travel Smart, we believe that travel should be a seamless and enriching experience, and we are dedicated to facilitating just that for our valued customers.</p>

                        </div>
                        <div className='footer_tab3'>
                            <h2 className=' text-light lead '> Discover Our Destinations</h2>

                            <div className="destinations-section">
                                <Carousel>
                                    {destinations.map((destination, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={destination.image}
                                                alt={destination.name}
                                            />
                                            <Carousel.Caption>
                                                <h3>{destination.name}</h3>
                                                <p>{destination.description}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>

                        </div>


                        <div className='footer_tab4'>
                            <h2>Categories</h2>

                        </div>
                    </div>
                    <div class="justify-content-between py-4 ">
                        <div className='d-lg-flex gap-5 d-none '>
                            <a href="#sidebar" role="button" aria-controls="sidebar" data-bs-toggle="offcanvas" class="nav-link d-block">
                                <FaGlobe className='text-light mx-2' />
                                <span className='text-light text-white link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light '>English</span>
                            </a>
                            <a href="#sidebar" role="button" aria-controls="sidebar" data-bs-toggle="offcanvas" class="nav-link ">
                                <FaLocationArrow className='text-light mx-2' />
                                <span className='text-light text-white link-secondary link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-light'>Lagos</span>
                            </a>
                        </div>
                        <div class="offcanvas offcanvas-top h-auto" tabindex='-1' id="sidebar" aria-labelledby="sidebar-label">
                            <div class="offcanvas-header ">
                                <div className=' container py-5'>
                                    <h5 class="offCanvas-title fw-bolder" id="sidebar-label">Select your Preferred Language</h5>
                                    <button class="btn btn-dark d-inline-block fw-semibold py-2 px-lg-5">
                                        <span className=' text-start'>English</span>
                                    </button>
                                </div>
                                <button type="button" class="btn-close position-sticky  " data-bs-dismiss="offcanvas" aria-label="close"></button>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer