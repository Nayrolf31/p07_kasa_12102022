import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ data }) => {
    const { id, cover, title } = data;
    return (
        <li className="card">
            <Link
                to={`single/${id}`}
                className="link"
                style={{
                    backgroundImage: `url(${cover})`,
                    textDecoration: 'none',
                }}
            >
                <h2 className="card-title">{title}</h2>
            </Link>
        </li>
    );
};

export default Card;
