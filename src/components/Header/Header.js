import React from 'react';
import '../../styles/Header.css';

const Header = ({ background, text }) => {
    return (
        <div className="header">
            <div
                className="header__wrappe"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                    <h1 id='header__title'> {text} </h1>
            </div>
        </div>
    );
};

export default Header;