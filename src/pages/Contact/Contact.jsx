import React, { useState, useEffect } from 'react';
import Oppinions from '../Feedback/Oppinions';
import { FaPhone, FaEnvelope, FaAddressBook } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        Aos.init();
    }, []);

   
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName) {
            newErrors.fullName = 'Full Name is required.';
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!formData.phoneNumber || !phonePattern.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.subject) {
            newErrors.subject = 'Subject is required.';
        }

        if (!formData.message) {
            newErrors.message = 'Message cannot be empty.';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
          
            console.log('Form data submitted:', formData);
        } else {
           
            setErrors(formErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <section className="contact-us py-4" id="contactus" data-aos="fade-down">
                <div className='text-center container py-lg-5'>
                    <h2 className='lead display-5 opacity-100 px-2 fw-bold'>Contact Us</h2>
                    <p className="divider border-black" />
                    <p className=' dividers border-black'></p>
                </div>
                <form className='needs-validation' onSubmit={handleSubmit}>
                    <div className='d-lg-flex container py-lg-5'>
                       
                        <div className="container">
                            <h2 className='lead display-5 opacity-100 px-2 fw-bold'>Make a Request</h2>
                            <div className="py-lg-4 row gap-3">
                                <div className="d-lg-flex gap-3 py-lg-4">
                                  
                                    <input
                                        type="text"
                                        className={`form-control px-lg- my-lg-0 my-4 ${errors.fullName ? 'is-invalid' : ''}`}
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter Full Name"
                                        required
                                    />
                                    {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}

                                   
                                    <input
                                        type="text"
                                        className={`form-control px-lg-4 ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                    />
                                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                                </div>

                                <div className="d-lg-flex gap-3">
                                   
                                    <input
                                        type="email"
                                        className={`form-control px-lg-4 my-lg-0 my-4 ${errors.email ? 'is-invalid' : ''}`}
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                                   
                                    <select
                                        className={`form-control px-4 form-select opacity-75 ${errors.subject ? 'is-invalid' : ''}`}
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Subject</option>
                                        <option value="Travel Inquiry">Travel Inquiry</option>
                                        <option value="Booking Issue">Booking Issue</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                </div>

                               
                                <div className="py-lg-5">
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        style={{ minHeight: "180px" }}
                                        required
                                    />
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>
                            </div>
                        </div>

                        
                        <div className="container">
                            <div className="container my-lg-0 my-4">
                                <h2 className='lead display-5 opacity-100 px-lg-2 fw-bold'>Catch us here</h2>
                                <div className="py-lg-5 py-3 px-lg-2 fs-5 opacity-50">
                                    <p>We are committed to offering travel services of the highest quality, combining our energy and
                                        enthusiasm, with our years
                                        of experience.
                                    </p>
                                </div>
                                <div className="row g-4">
                                    <div className="d-lg-flex gap-lg-3">
                                        <div><FaPhone size={20} /></div>
                                        <div>
                                            <p>Phone number</p>
                                            <h6 className="mb-0">706-230-0213</h6>
                                        </div>
                                    </div>
                                    <div className="d-lg-flex gap-lg-3">
                                        <div><FaEnvelope size={20} /></div>
                                        <div>
                                            <p>Email address</p>
                                            <h6 className="mb-0">TechWiz@example.com</h6>
                                        </div>
                                    </div>
                                    <div className="d-lg-flex gap-lg-3">
                                        <div><FaAddressBook size={20} /></div>
                                        <div>
                                            <p>Office Address</p>
                                            <h6 className="mb-0">14/A, Mixlix City Hall, NYC</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-outline-warning" type="submit" style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>
                            Contact Us
                        </button>
                    </div>
                </form>

                <section className="my-lg-5 ">
                    <h3 className='text-center py-lg-5 my-5'>CHECK US OUT HERE</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.642424494312!2d3.3101309999999997!3d6.606948999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9171cc1003e7%3A0x41b094d0120d48e7!2sAptech%20Computer%20Education%2C%20Akowonjo!5e0!3m2!1en!2sng!4v1726652446410!5m2!1en!2sng"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </section>
            </section>

            <Oppinions />
        </div>
    );
};

export default Contact;
