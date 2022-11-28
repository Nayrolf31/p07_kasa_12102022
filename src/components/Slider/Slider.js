import React, { useState } from 'react';
import '../../styles/Slider.css';
import nextImage from '../../assets/right.png';
import prevImage from '../../assets/left.png';

const Slider = ({ pictures }) => {
    const [index, setIndex] = useState(0);
    const multiplePictures = pictures.length > 1;

    const next = () => {
        if (index >= pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(() => index + 1);
        }
    };
    console.log("COUCOU", index);

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
            {
                multiplePictures && (
                    <img
                        className="image-slider"
                        src={prevImage}
                        alt="prev"
                        onClick={prev}
                    />
                )
            }
            {
                multiplePictures && (
                    <img
                        className="image-slider"
                        src={nextImage}
                        alt="next"
                        onClick={next}
                    />
                )
            }
        </header>
    );
};

export default Slider;
