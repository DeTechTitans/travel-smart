import React from 'react'
import './Footer.css'
import { Carousel } from 'react-bootstrap';
import parisImage from '../Images/New Delhi.avif';
import tokyoImage from '../Images/tokyo.avif'
import baliImage from '../Images/Amsterdam.avif'
import {
    FaFacebook, FaYoutube, FaTwitter, FaInstagram,
    FaLinkedin, FaLocationArrow,
    FaGlobe, FaEnvelope, FaPhoneSlash, FaAddressCard
} from 'react-icons/fa'
const Footer = () => {
    const destinations = [
        {
            name: "New Delhi",
            image: parisImage,
            description: "a vibrant city known for its rich history, cultural diversity, and modern infrastructure."
        },

        {
            name: "Tokyo",
            image: tokyoImage,
            description: "Immerse yourself in the bustling metropolis and rich traditions of Tokyo."
        },
        {
            name: "Amsterdam",
            image: baliImage,
            description: "Relax on the tropical beaches and explore the vibrant culture of Amsterdam."
        }
    ];
    return (
        <footer className='bg-dark text-light'>
            <div className='footer_container container py-lg-5'>
                <div className='wrapper row py-4'>
                    <div className='col-lg-4 footer_tab1'>
                        <p className="navbar-brand text-light fs-2 fw-bold">Travel Smart</p>
                        <p className='opacity-75'>
                            Join us in discovering beautiful places across the world. We make your travel experience easy and unforgettable!
                        </p>
                        <div className='d-flex gap-4 py-4'>
                            <a href target='_blank' rel='noopener noreferrer' className='text-light'>
                                <FaFacebook size={20} />
                            </a>
                            <a href target='_blank' rel='noopener noreferrer' className='text-light'>
                                <FaYoutube size={20} />
                            </a>
                            <a href target='_blank' rel='noopener noreferrer' className='text-light'>
                                <FaTwitter size={20} />
                            </a>
                            <a href target='_blank' rel='noopener noreferrer' className='text-light'>
                                <FaInstagram size={20} />
                            </a>
                            <a href target='_blank' rel='noopener noreferrer' className='text-light'>
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3 footer_tab2'>
                        <h4 className='text-light mb-3' id="About">About Us</h4>
                        <p className='opacity-70'>
                            Welcome to Travel Smart, your reliable companion in exploring the world with ease and confidence. We ensure seamless and enriching travel experiences for our customers.
                        </p>
                        <a href="/about" className="text-light fw-bold link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Learn more about us</a>
                    </div>
                    <div className='col-lg-2 footer_tab3'>
                        <h4 className='text-light mb-3'>Newsletter</h4>
                        <p className='opacity-75'>Stay updated with our latest travel deals and guides.</p>
                        <form className='d-flex'>
                            <input type="email" className='form-control me-2' placeholder="Your Email" />
                            <button className='btn btn-warning'>Subscribe</button>
                        </form>
                    </div>
                    <div className='col-lg-3 footer_tab4'>
                        <h4 className='text-light mb-3'>Contact Us</h4>
                        <p className="text-light"><FaEnvelope size={20} /> support@travelsmart.com</p>
                        <p className="text-light"><FaPhoneSlash size={20} /> +234 76230 0213</p>
                        <p className="text-light"><FaAddressCard size={20} /> 78 AKJ Lagos, Nigeria</p>
                    </div>
                </div>
                <div className='my-4'>
                    <h4 className='text-light mb-4'>Discover More Of Our Destinations</h4>
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
            <div className='bg-black py-2'>
                <p className='text-center text-light mb-0'>© 2024 Travel Smart. All Rights Reserved | Privacy Policy</p>
            </div>
        </footer>
    )
}

export default Footer