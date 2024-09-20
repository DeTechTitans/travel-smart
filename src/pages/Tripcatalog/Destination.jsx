import React from 'react'

const Destination = () => {
    return (
        <>
            <div>
                <div className=' shadow-lg' id='Tripcatalog'>
                    <div class=" container py-5">
                        <div class=" text-center">
                            <h2 class=" lead display-4 fw-semibold">Top Destinations</h2>
                        </div>
                    </div>

                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner container 1875rem" data-bs-interval="10000">
                            <div class="carousel-item active py-5 ">
                                <div class="row">
                                    <div class="col-5 py-lg-5 my-lg -5">
                                        <div class="">
                                            <h6> Romantic City of Lights</h6>
                                            <h2>
                                                Paris, France
                                            </h2>
                                            <hr />
                                        </div>
                                        <div class="my-lg-5">
                                            <p class="fw-normal fs-5 lead ">
                                                Immerse yourself in the timeless charm of Paris, with iconic landmarks like the Eiffel Tower and
                                                Louvre Museum.
                                                Explore world-class art, fashion, and cuisine in the city's vibrant neighborhoods.
                                                Enjoy scenic boat rides along the Seine River, passing by historic bridges and landmarks.
                                            </p>
                                            <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Click for more images
                                            </button>

                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="exampleModalLabel">More images of paris</h1>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-body">
                                                    <img src={"images/paris 1.avif"} alt="" width="100%" />
                                                    <img src={"images/paris 2.avif"} alt="" width="100%" />
                                                    <img src={"images/paris 3.avif"} alt="" width="100%" />
                                                    <img src={"images/paris 4.avif"} alt="" width="100%" />
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-lg-5 py-lg-5 my-lg-4">
                                        <img src={"images/paris.avif"} alt="" class="" style={{ height: "400px", width: "635px" }} />
                                    </div>

                                </div>
                            </div>

                            <div class="carousel-item py-5">
                                <div class="row">
                                    <div class="col-lg-5 py-lg-5 my-lg-5">
                                        <div class="">
                                            <h6>Tropical Paradise</h6>
                                            <h2>Bali, Indonesia</h2>
                                            <hr />
                                        </div>
                                        <p class="fw-normal fs-5 lead">
                                            Relax on pristine beaches, explore lush rice terraces, and experience the island's spiritual vibes.
                                            Enjoy surfing, snorkeling, hiking, and yoga retreats.
                                            Discover ancient temples, traditional villages, and vibrant festivals.
                                            Savor Indonesian delicacies like satay, nasi goreng, and rendang.
                                            Find inner peace and rejuvenation at luxurious spa resorts and wellness centers.
                                        </p>
                                        <button type="button" class="btn btn-outline-warning " data-bs-toggle="modal"
                                            data-bs-target="#exampleModal2">Click for more images
                                        </button>
                                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModallLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModal2Label">More images of bali</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <img src={"images/bali 1.avif"} alt="" width="100%" />
                                                        <img src={"images/bali 2.avif"} alt="" width="100%" />
                                                        <img src={"images/bali 3.avif"} alt="" width="100%" />
                                                        <img src={"images/bali 4.avif"} alt="" width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-lg-5 py-lg-5 my-lg-4">
                                        <img src={"images/bali.avif"} alt="" class="" style={{ height: "400px", width: "635px" }} />
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item py-5">
                                <div class="row">
                                    <div class="col-lg-5 py-lg-5 my-lg -5">
                                        <div class="">
                                            <h6>Vibrant Mediterranean City</h6>
                                            <h2>Barcelona, Spain</h2>
                                            <hr />
                                        </div>
                                        <p class="fw-normal fs-5 lead">
                                            Explore the stunning architecture of Antoni Gaudí, including the Sagrada Familia and Park Güell.
                                            Enjoy sunbathing, swimming, and water sports on the beautiful beaches of Barcelona.
                                            Indulge in a variety of small dishes and drinks at tapas bars.
                                            Experience the city's lively music, art, and nightlife.
                                            Visit the Camp Nou stadium, home to the legendary FC Barcelona.
                                        </p>
                                        <button type="button" class="btn btn-outline-warning " data-bs-toggle="modal"
                                            data-bs-target="#exampleModal4">Click for more images
                                        </button>
                                        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModa4lLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModal4Label">More images of Spain</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <img src="images/barcelona 1.avif" alt="" width="100%" />
                                                        <img src="images/barcelona 2.avif" alt="" width="100%" />
                                                        <img src="images/barcelona 3.avif" alt="" width="100%" />
                                                        <img src="images/barcelona 4.avif" alt="" width="100%" />
                                                        <div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" col-lg-7 col-lg-5 py-lg-5 my-lg-4">
                                        <img src={"images/barcelona.avif"} alt="" class="" style={{ height: "400px", width: "635px" }} />
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item py-5">
                                <div class="row">
                                    <div class="col-lg-5 py-lg-5 my-lg-5">
                                        <div class="">
                                            <h6>The City That Never Sleeps</h6>
                                            <h2>New York City, USA</h2>
                                            <hr />
                                        </div>
                                        <p class="fw-normal fs-5 lead">
                                            Experience the energy and diversity of this iconic metropolis.
                                            Visit the Statue of Liberty, Central Park, Times Square, and the Empire State Building.
                                            Explore a variety of neighborhoods, each with its own unique culture and cuisine.
                                            Enjoy world-class theater performances on Broadway.
                                            Discover designer brands, vintage shops, and bustling markets.
                                        </p>
                                        <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal5">Click for more images
                                        </button>
                                        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModa5lLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModal5Label">More images of New york</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <img src="images/new york 1.avif" alt="" width="100%" />
                                                        <img src="images/new york 2.avif" alt="" width="100%" />
                                                        <img src="images/new york 3.avif" alt="" width="100%" />
                                                        <img src="images/new york 4.avif" alt="" width="100%" />
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="  col-lg-7 col-lg-5 py-lg-5 my-lg-4">
                                        <img src={"images/new york.avif"} alt="" class="" style={{ height: "400px", width: "635px" }} />
                                    </div>
                                </div>

                            </div>
                            <div class="carousel-item py-5">
                                <div class="row">
                                    <div class="col-lg-5 py-lg-5 my-lg-5">
                                        <div class="">
                                            <h6>Picturesque Island</h6>
                                            <h2>Santorini, Greece</h2>
                                            <hr />
                                        </div>
                                        <p class="fw-normal fs-5 lead">
                                            Admire the stunning whitewashed buildings perched on cliffs overlooking the Aegean Sea.
                                            Enjoy breathtaking views of the sunset over the caldera.
                                            Explore the archaeological sites of Akrotiri and Therasia.
                                            Sample delicious local wines produced on the island's vineyards.
                                            Visit the black sand beaches of Perissa and Kamari.
                                        </p>
                                        <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal2">Click for more images
                                        </button>
                                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModallLabel"
                                            aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModal2Label">More images of bali</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <img src={"images/santorini 1.avif"} alt="" width="100%" />
                                                        <img src={"images/santorini 2.avif"} alt="" width="100%" />
                                                        <img src={"images/santorini 3.avif"} alt="" width="100%" />
                                                        <img src={"images/santorini 4.avif"} alt="" width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" col-lg-7 col-lg-5 py-lg-5 my-lg-4">
                                        <img src={"images/bali.avif"} alt="" class="" style={{ height: "400px", width: "635px" }} />
                                    </div>
                                </div>
                            </div>
    
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Destination