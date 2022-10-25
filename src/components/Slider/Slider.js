import React, { useState } from 'react';
import './Slider.css';
import nextImage from '../../assets/right.png';
import prevImage from '../../assets/left.png';

const Slider = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index >= pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(() => index + 1);
        }
        console.log(index);
    };

    const prev = () => {
        console.log('Prev');
        if (index <= 0) {
            setIndex(pictures.length - 1);
        } else {
            setIndex(() => index - 1);
        }
        console.log(index);
    };

    return (
        <header
            style={{
                backgroundImage: `url(${pictures[index]})`,
            }}
        >
            <img
                className="image-slider"
                src={prevImage}
                alt="prev"
                onClick={prev}
            />
            <img
                className="image-slider"
                src={nextImage}
                alt="next"
                onClick={next}
            />
        </header>
    );
};

export default Slider;
