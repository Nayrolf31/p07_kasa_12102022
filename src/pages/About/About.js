import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/background2.png';
import Accordeon from '../../components/Accordeon/Accordeon';
import '../../index.css';
import './About.css';

const contentText = [ 
    {
        title: 'Fiabilité',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        title: 'Respect',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        title: 'Service',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
        title: 'Responsabilité',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
];

const About = () => {
    return (
        <main className="container__about">
            <div className="about__wrappe">
                <Header background={background} />
                <section className="container__accordion">
                    <div>
                        {contentText.map((content, index) => {
                            return <Accordeon key={index} content={content} />;
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
