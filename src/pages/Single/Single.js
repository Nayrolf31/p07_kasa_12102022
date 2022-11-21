//import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import Accordion from '../../components/AccordeonTest/AccordeonTest';
import Rating from '../../components/Rating/Rating'
//import DataDescription from '../../data.json';
//import DataEquipements from '../../data.json';
//import { FaStar, FaRegStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import './Single.css';

const Single = ({ data }) => {
    const params = useParams();

    const dataID = data.find(({ id }) => id === params.id);

    const {
        pictures,
        title,
        location,
        description,
        host,
        rating,
        tags,
    } = dataID;

    console.log("holà", dataID)

    return (
        <div className="container__single">
            <div className="single__wrappe">
                <Slider pictures={pictures} />
                <section className="single__content">
                    <div className="single__content--header">
                        <div className="title">
                            <h1>{title}</h1>
                            <address>{location}</address>
                            <ul className="tags">
                                {tags.map((tag, index) => {
                                    return (
                                        <li className="tag-item" key={index}>
                                            {tag}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="user">
                            <div className="user--name">
                                <h3>{host.name}</h3>
                                <img src={host.picture} alt={host.name} />
                            </div>
                            <div className="reviews">
                                <Rating rate={rating} />
                            </div>
                        </div>
                    </div>

                    {/* ACCORDEON */}

                    <div className='content'>
                        <div className='accordions radius'>
                            <div className='accordions_description width' >
                                <Accordion title="Description" content={description} />
                            </div>
                            <div className='accordions_equipements width'>
                                <Accordion title="Equipements" content={dataID.equipments} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Single;
