import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container py-4">
                    <a className="navbar-brand text-black lead display-5 fs-2 fw-bold" href="#">Travel Smart</a>
                    <button className="navbar-toggler bg-body-secondary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><img src="" alt=""/></span>
                    </button>
                    <div className="collapse navbar-collapse mx-lg-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-black fw-semibold fs-6 mx-lg-5" href="#Home" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold fs-6" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a to="/jobspost" className="nav-link text-black fw-semibold fs-6 mx-lg-5" href="#Tripcatalog">Trip Catalog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold fs-6 mx-lg-4" href="#contactus">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold fs-6 text-black mx-lg-4" href="Tours">Tour Review</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav