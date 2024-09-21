import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (rate) => {
        setRating(rate);
    };

    return (
        <div className="mb-0 d-lg-flex gap-5 py-lg-3">
            <div id="starRating" className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`star ${rating >= star ? 'filled' : ''}`}
                        onClick={() => handleClick(star)}
                    >
                        &#9733; {}
                    </span>
                ))}
                <div className='my-lg-2 mx-lg-3 my-2 mx-3'>{rating > 0 ? `You rated us ${rating} star(s)` : "Click a star to rate us"}</div>
            </div>
        </div>
    );
};

export default StarRating;
