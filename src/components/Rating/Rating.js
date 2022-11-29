import React from 'react';
import '../../styles/Rating.css';

const Rating = ({rate}) => {


    const note = []
    for (let i = 0; i < 5; i++) {
        if ( i + 1 <= rate) {
            note.push(<div key={i} className="active">
                <i className="fas fa-star icon"></i>
                </div>)
        } else {
            note.push(<div key={i} className="negative">
                <i className="far fa-star icon"></i>
                </div>)
        }
    }


    return note
};

export default Rating;