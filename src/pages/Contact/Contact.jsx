import React from 'react'
import Oppinions from '../Feedback/Oppinions'
import { FaPhone, FaEnvelope, FaAddressBook } from 'react-icons/fa'


const Contact = () => {
    return (
        <div>

            <section class="contact-us py-4" id="contactus">
                <div className='text-center container py-lg-5'>
                    <h2 class='lead display-5 opacity-100 px-2 fw-bold'>Contact Us</h2>
                    <p className="divider border-black" />
                    <p className=' dividers border-black'></p>
                </div>
                <form className=' '>
                    <div class='d-lg-flex container py-lg-5'>
                        <div class="container">
                            <h2 class='lead display-5 opacity-100 px-2 fw-bold'>Make a Request</h2>
                            <div class="py-lg-4 row gap-3">
                                <div class=" d-lg-flex gap-3 py-lg-4 ">
                                    <input type="text" class="form-control px-lg- my-lg-0 my-4" id="validationCustom03" required
                                        style={{ maxWidth: "", minHeight: "70px" }} placeholder="Enter Full Name" />
                                    <div class="invalid-feedback">
                                        Please provide the required text
                                    </div>
                                    <input type="number" class="form-control px-lg-4" id="validationCustom03" required style={{ maxWidth: "", minHeight: "70px" }}
                                        placeholder="Phone Number" />
                                    <div class="invalid-feedback">
                                        Please provide your phoneNumber
                                    </div>
                                </div>
                                <div class="d-lg-flex gap-3 ">
                                    <input type="email" class="form-control px-lg-4  my-lg-0 my-4" id="validationCustom03" required
                                        style={{ maxWidth: "", minHeight: "70px" }} placeholder="Email Address" />
                                    <div class="invalid-feedback">
                                        Please provide your Email
                                    </div>
                                    <select class="form-control px-4 form-select opacity-75" id="form-filter-location"
                                        style={{ maxWidth: "", minHeight: "70px" }}>
                                        <option value="1">Select Subject</option>
                                        <option value="2">Option</option>
                                        <option value="3">Option</option>
                                        <option value="4">Option</option>
                                    </select>
                                </div>
                                <div class=" py-lg-5">
                                    <textarea type="text" name="" id="" class="form-control" style={{ maxWidth: "", minHeight: "180px" }}>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="container my-lg-0 my-4">
                                <h2 class='lead display-5 opacity-100 px-lg-2 fw-bold'>Catch us here</h2>
                                <div class=" py-lg-5 py-3 px-lg-2 fs-5 opacity-50">
                                    <p>We are committed to offering travel services of the highest quality, combining our energy and
                                        enthusiasm, with our years
                                        of experience.
                                    </p>
                                </div>
                                <div class=" row g-4">
                                    <div class=" d-lg-flex gap-lg-3">
                                        <div class="">
                                            <FaPhone size={20} />
                                        </div>
                                        <div>
                                            <p>Phone number</p>
                                            <h6 class=" mb-0">706-230-0213</h6>
                                        </div>
                                    </div>
                                    <div class=" d-lg-flex gap-lg-3">
                                        <div class="">
                                            <FaEnvelope size={20} />
                                        </div>
                                        <div>
                                            <p>Email address</p>
                                            <h6 class=" mb-0">TechWiz@example.com</h6>
                                        </div>
                                    </div>
                                    <div class=" d-lg-flex gap-lg-3">
                                        <div class="">
                                            <FaAddressBook size={20} />
                                        </div>
                                        <div>
                                            <p>Office Address</p>
                                            <h6 class=" mb-0">14/A, Mixlix City Hall, NYC</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button class="btn btn-outline-warning element-fullwidth" type="button"
                            style={{ maxWidth: "170px", minWidth: "170px", minHeight: "50px" }}>Contact
                            Us
                        </button>
                    </div>
                </form>
                <section className="my-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.642424494312!2d3.3101309999999997!3d6.606948999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9171cc1003e7%3A0x41b094d0120d48e7!2sAptech%20Computer%20Education%2C%20Akowonjo!5e0!3m2!1en!2sng!4v1726652446410!5m2!1en!2sng"
                        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </section>
            </section>

            <Oppinions />
        </div>
    )
}

export default Contact