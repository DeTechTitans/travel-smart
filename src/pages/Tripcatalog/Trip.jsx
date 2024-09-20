import React from 'react'
import Destination from './Destination'
import Contact from '../Contact/Contact'
import { FaMarker, FaMoneyBill, FaMountain, FaRainbow, FaAccusoft } from 'react-icons/fa'

const Trip = () => {
    return (
        <div>
            <Destination />
            <section class="">
                <div class=" container-fluid py-5">
                    <h2 class=" text-center"> Our Pricings</h2>
                    <div class="container-lg ">
                        <div class="row my-5 align-items-center justify-content-center g-0 ">
                            <div class="col-8 col-lg-4 col-xl-3">
                                <div class="card border-2 border-warning">
                                    <div class="card-body text-center py-4 ">
                                        <h4 class="card-title">Silver Plan</h4>
                                        <p class="display-5 my-4 text fw-bold">$12.99</p>
                                        <p class="lead card-subtitle py-lg-1 my-2">One Time Installation</p>
                                        <p className='lead card-subtitle my-2 text-warning fw-bold'>With 3 features</p>

                                        <div class=" ">
                                            <div class="text-start mx-lg-5 ">
                                                <div class=" d-flex gap-3">
                                                    <FaMarker class="bi bi-check2-circle text-warning"></FaMarker>
                                                    <p> Family Tours</p>
                                                </div>
                                                <div class="d-flex gap-3 ">
                                                    <FaMoneyBill class="bi bi-check2-circle text-warning "></FaMoneyBill>
                                                    <p> Adventure Tours</p>
                                                </div>
                                                <div class=" d-flex gap-3">
                                                    <FaMountain class="bi bi-check2-circle text-warning"></FaMountain>
                                                    <p> Mountain Tours</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="" class="btn btn-outline-warning btn-lg mt-3">PURCHASE NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-9 col-lg-4 ">
                                <div class="card border-warning border-3">
                                    <div class="card-body text-center py-5 ">
                                        <h4 class="card-title">Gold plan</h4>
                                        <p class="display-5 my-4 text  fw-bold">$18.99</p>
                                        <p class="lead card-subtitle py-lg-1 my-2">One Time Installation</p>
                                        <p className='lead card-subtitle my-2 text-warning fw-bold'>With 5 features</p>

                                        <div class=" mx-4">
                                            <div class="text-start mx-lg-5 ">
                                                <div class=" d-flex gap-3">
                                                    <FaMarker class="bi bi-check2-circle text-warning"></FaMarker>
                                                    <p> Family Tours</p>
                                                </div>
                                                <div class="d-flex gap-3 ">
                                                    <FaMoneyBill class="bi bi-check2-circle text-warning "></FaMoneyBill>
                                                    <p> Adventure Tours</p>
                                                </div>
                                                <div class=" d-flex gap-3">
                                                    <FaMountain class="bi bi-check2-circle text-warning"></FaMountain>
                                                    <p> Mountain Tours</p>
                                                </div>
                                                <div class=" d-flex gap-3">
                                                    <FaRainbow class="bi bi-check2-circle text-warning"></FaRainbow>
                                                    <p> Romantic Tours</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="" class="btn btn-outline-warning btn-lg mt-3">PURCHASE NOW</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-8 col-lg-4 col-xl-3">
                                <div class="card  border-3 border-warning">
                                    <div class="card-body text-center py-4 ">
                                        <h4 class="card-title">Diamond Plan</h4>
                                        <p class="display-5 my-4 text fw-bold">$24.99</p>

                                        <p class="lead card-subtitle my-2 py-3"> One Time Installation </p>
                                        <p className='lead card-subtitle my-2 text-warning fw-bold'>With 4 features</p>

                                        <div class=" ">
                                            <div class="text-start mx-lg-5 ">
                                                <div class="d-flex gap-2 ">
                                                    <FaMoneyBill class="bi bi-check2-circle text-warning "></FaMoneyBill>
                                                    <p> Adventure Tours</p>
                                                </div>
                                                <div class=" d-flex gap-3">
                                                    <FaMountain class="bi bi-check2-circle text-warning"></FaMountain>
                                                    <p> Mountain Tours</p>
                                                </div>
                                                <div class=" d-flex gap-3">
                                                    <FaAccusoft class="bi bi-check2-circle text-warning"></FaAccusoft>
                                                    <p> Romantic Tours</p>
                                                </div>
                                                <div class=" d-flex gap-3">
                                                    <FaRainbow class="bi bi-check2-circle text-warning"></FaRainbow>
                                                    <p>Cruises</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="" class="btn btn-outline-warning mt-3">PURCHASE NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </section>
        </div>
    )
}

export default Trip