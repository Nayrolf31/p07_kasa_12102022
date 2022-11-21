import React from 'react';
import './Header.css';

const Header = ({ background, text }) => {
    return (
        <div className="header">
            <div
                className="header__wrappe"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                    <h1> {text} </h1>
            </div>
        </div>
    );
};

export default Header;