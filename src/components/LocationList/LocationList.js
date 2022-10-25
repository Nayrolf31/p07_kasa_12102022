import React from 'react';
import Card from '../../components/Card/Card';
import './LocationList.css';

const LocationList = ({ data }) => {
    return (
        <div className="container">
            <ul className="location__list">
                {data.map((single) => (
                    <Card key={single.id} data={single} />
                ))}
            </ul>
        </div>
    );
};

export default LocationList;
