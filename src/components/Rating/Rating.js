import React from 'react';
import '../Rating/Rating.css';

import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({rate}) => {

    const note = []
    for (let i = 0; i < 5; i++) {
        if ( i + 1 <= rate) {
            note.push(<div key={i} className="active">
                <FaStar className="icon-reviews" />
                {/* <i className="fa-solid fa-star"></i> */}
                </div>)
        } else {
            note.push(<div key={i} className="negative">
                <FaRegStar className="icon-reviews" />
                {/* <i className="fa-solid fa-star"></i> */}
                </div>)
        }
    }


    return note
};

export default Rating;