import React from 'react';
import './Header_about.css';

const Headerabout = ({ background, text }) => {
    return (
        <div className="header">
            <div
                className="header__wrappe_about"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                    <h1> {text} </h1>
            </div>
        </div>
    );
};

export default Headerabout;