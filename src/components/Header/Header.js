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
                <div>
                    <h1> {text} </h1>
                </div>
            </div>
        </div>
    );
};

export default Header;