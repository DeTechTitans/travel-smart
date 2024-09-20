import React from 'react'
import Footer from '../Footer/Footer'

const Oppinions = () => {
  return (
    <>
      <div className=' Py-lg-5'>
        <section className="feedback-form py-lg-5">
          <div className="container mt-5">
            <div className="card">
              <div className="card-header">
                <h2>Share Your Feedback</h2>
              </div>
              <div className="card-body">
                <form id="feedbackForm">
                  <div className="mb-3">
                    <label for="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" required />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label for="testimonial" className="form-label">Testimonial</label>
                    <textarea className="form-control" id="testimonial" rows="3" required></textarea>
                  </div>
                  <div className="mb-0 d-lg-flex gap-5 py-lg-3">
                    <div className="">
                      <label for="rating" className="form-label "> Give us a rating</label>
                    </div>

                    <div id="starRating" className="">
                      <span className="star" onclick="setRating(1)">&#9733;</span>
                      <span className="star" onclick="setRating(2)">&#9733;</span>
                      <span className="star" onclick="setRating(3)">&#9733;</span>
                      <span className="star" onclick="setRating(4)">&#9733;</span>
                      <span className="star" onclick="setRating(5)">&#9733;</span>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                  </div>
                  <button type="submit" className="btn btn-outline-warning">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>

  )
}

export default Oppinions