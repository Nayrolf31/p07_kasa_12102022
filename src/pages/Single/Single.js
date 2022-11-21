//import React, { useState, useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
// import Accordeon from '../../components/Accordeon/Accordeon';
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
        // equipments,
        host,
        rating,
        tags,
    } = dataID;

    console.log("holà", dataID)

    // const Logement = () => {
    //     const { logementId } = useParams()
    //     let logement = {}
    //     for(let i = 0; i < data.length; i++) {
    //         if(data[i].id === logementId) {
    //             logement = data[i]
    //         }
    //     }

    // const contentText = [
    //     {
    //         title: 'Description',
    //         desc: description,
    //     },
    //     {
    //         title: 'Equipements',
    //         equipments: equipments,
    //     },
    // ];

    //const Rating  = data;

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
                                {/* <FaStar className="icon-reviews" />
                                <FaStar className="icon-reviews" />
                                <FaStar className="icon-reviews" />
                                <FaRegStar className="icon-reviews" />
                                <FaRegStar className="icon-reviews" /> */}

                                <Rating rate={rating} />

                                {/* <Rating name="read-only" value={Rating} readOnly /> */}
                            </div>
                        </div>
                    </div>

                    {/* <ul className="content">
                        {tags.map((description, equipements, index) => {
                            return (
                                <li className='description' key={index}>
                                    {description}
                                    {equipements}
                                </li>
                            );
                        })}
                    </ul> */}

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

                    {/* <div className="content"> */}
                    <div>

                        {/* {contentText.map((content, index) => {
                            return <Accordeon key={index} content={content} />
                        })} */}


                        {/* <Accordeon dataID={dataID} /> */}



                        {/* <div className="content">
                            <Accordeon title="description" content={host.description}/>
                        </div>

                        <div className="content">
                            <Accordeon title="Equipements" content={host.equipements}/>
                        </div> */}

                        {/* <p className="description">{description}</p> */}
                        {/* <ul>
                            {equipements.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul> */}

                    </div>





                </section>
            </div>
        </div>
    );
};

export default Single;
