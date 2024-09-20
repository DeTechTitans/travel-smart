import React from 'react'
import Trip from '../Tripcatalog/Trip'

const About = () => {
    return (
        <div>
            <section class="about-sec" id="About">
                <div class="container py-5 ">
                    <div class=" row">
                        <div class="col">
                            <img src={"images/540x540.jpg"} alt="Travelsmart" />
                        </div>
                        <div class="col py-5 my-5">
                            <h5 class="lead display-4 subtitle">TRAVEL SMART</h5>
                            <h1 class="title">About Our Company</h1>
                            <p className='fs-6 lead'>
                                Travel Smart is your one-stop destination for all things travel.
                                We've been helping adventurers like you discover the world since 2024.
                                Our passion for exploration and commitment to providing exceptional
                                travel experiences have driven us to become a leading online travel resource.
                                As a travel portal, we offer a wide range of services to make your journey
                                seamless and unforgettable. From booking flights and accommodations to planning
                                itineraries and finding the best deals, we're here to assist you every step
                                of the way. Our goal is to inspire and empower travelers to explore new horizons,
                                create lasting memories, and broaden their perspectives.

                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <Trip/>
        </div>
    )
}

export default About