import React, { useEffect } from 'react'
import Destination from './Destination'
import Contact from '../Contact/Contact'
import { FaMarker, FaMoneyBill, FaMountain, FaRainbow, FaAccusoft } from 'react-icons/fa'
import PackageReviews from '../Packages/PackagesReview'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Trip = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>
            <Destination />
            <section className=" overflow-hidden" data-aos="zoom-in">
                <div className=" container-fluid py-5">
                    <h2 className=" text-center"> Our Pricings</h2>
                    <div className="container-lg ">
                        <div className="row my-5 align-items-center justify-content-center g-0 ">
                            <div className="col-8 col-lg-4 col-xl-3">
                                <div className="card border-2 border-warning">
                                    <div className="card-body text-center py-4 ">
                                        <h4 className="card-title">Silver Plan</h4>
                                        <p className="display-5 my-4 text fw-bold">₦10M</p>
                                        <p className="lead card-subtitle py-lg-1 my-2">One Time Installation</p>
                                        <p classNameName='lead card-subtitle my-2 text-warning fw-bold'>With 3 features</p>

                                        <div className=" ">
                                            <div className="text-start mx-lg-5 ">
                                                <div className=" d-flex gap-3">
                                                    <FaMarker className="bi bi-check2-circle text-warning"></FaMarker>
                                                    <p> Family Tours</p>
                                                </div>
                                                <div className="d-flex gap-3 ">
                                                    <FaMoneyBill className="bi bi-check2-circle text-warning "></FaMoneyBill>
                                                    <p> Adventure Tours</p>
                                                </div>
                                                <div className=" d-flex gap-3">
                                                    <FaMountain className="bi bi-check2-circle text-warning"></FaMountain>
                                                    <p> Mountain Tours</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-outline-warning btn-lg mt-3">PURCHASE NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 col-lg-4 ">
                                <div className="card border-warning border-3">
                                    <div className="card-body text-center py-5 ">
                                        <h4 className="card-title">Gold plan</h4>
                                        <p className="display-5 my-4 text  fw-bold">₦18M</p>
                                        <p className="lead card-subtitle py-lg-1 my-2">One Time Installation</p>
                                        <p classNameName='lead card-subtitle my-2 text-warning fw-bold'>With 5 features</p>

                                        <div className=" mx-4">
                                            <div className="text-start mx-lg-5 ">
                                                <div className=" d-flex gap-3">
                                                    <FaMarker className="bi bi-check2-circle text-warning"></FaMarker>
                                                    <p> Family Tours</p>
                                                </div>
                                                <div className="d-flex gap-3 ">
                                                    <FaMoneyBill className="bi bi-check2-circle text-warning "></FaMoneyBill>
                                                    <p> Adventure Tours</p>
                                                </div>
                                                <div className=" d-flex gap-3">
                                                    <FaMountain className="bi bi-check2-circle text-warning"></FaMountain>
                                                    <p> Mountain Tours</p>
                                                </div>
                                                <div className=" d-flex gap-3">
                                                    <FaRainbow className="bi bi-check2-circle text-warning"></FaRainbow>
                                                    <p> Romantic Tours</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-outline-warning btn-lg mt-3">PURCHASE NOW</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-8 col-lg-4 col-xl-3">
                                <div className="card  border-3 border-warning">
                                    <div className="card-body text-center py-4 ">
                                        <h4 className="card-title">Diamond Plan</h4>
                                        <p className="display-5 my-4 text fw-bold">₦24M</p>

                                        <p className="lead card-subtitle my-2 py-3"> One Time Installation </p>
                                        <p classNameName='lead card-subtitle my-2 text-warning fw-bold'>With 4 features</p>

                                        <div className=" ">
                                            <div className="text-start mx-lg-5 ">
                                                <div className="d-flex gap-2 ">
                                                    <FaMoneyBill className="bi bi-check2-circle text-warning "></FaMoneyBill>
                                                    <p> Adventure Tours</p>
                                                </div>
                                                <div className=" d-flex gap-3">
                                                    <FaMountain className="bi bi-check2-circle text-warning"></FaMountain>
                                                    <p> Mountain Tours</p>
                                                </div>
                                                <div className=" d-flex gap-3">
                                                    <FaAccusoft className="bi bi-check2-circle text-warning"></FaAccusoft>
                                                    <p> Romantic Tours</p>
                                                </div>
                                                <div className=" d-flex gap-3">
                                                    <FaRainbow className="bi bi-check2-circle text-warning"></FaRainbow>
                                                    <p>Cruises</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-outline-warning mt-3">PURCHASE NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <PackageReviews />
            <Contact />
        </div>
    )
}

export default Trip