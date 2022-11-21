import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Accordeon.css';

const Accordeon = ({ content }) => {
    const [toggle, setToggle] = useState(false);
    const { title, desc, equipments } = content;
    console.log("ici", desc)
    console.log("prout", content.desc)
    console.log("POUET", content)
    return (
        <div className='wrappe_contain'>
            <div className="wrappe">
                <div className="wrappe__content">
                    <h2> {title}</h2>
                    <button
                        type="button"
                        className="btn-toggle"
                        onClick={() => setToggle(!toggle)}
                    >
                        {toggle ? (
                            // <FaChevronUp className="icon" />
                            <i class="fas fa-chevron-down icons"></i>
                        ) : (
                            // <FaChevronDown className="icon" />
                            <i class="fas fa-chevron-up icons"></i>
                        )}
                    </button>
                </div>
            </div>
            {toggle ? (
                <ul className="wrappe__text">
                    {/* {content.map((id, index)=> (
                        <li key={id}>{content[index]}</li>
                    ))} */}
                    <li> {desc}</li>
                    <li></li>
                    {/* {
                        dataID.equipments.map((equipment, i) => (
                            <li key={i}>{equipment}</li>
                        ))
                    } */}

                </ul>
            ) : null}
        </div>
    );
};

export default Accordeon;
