import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/background2.png';
import Accordeon from '../../components/Accordeon/Accordeon';
import '../../index.css';
import './About.css';

const contentText = [ 
    {
        title: 'Fiabilité',
        desc: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        title: 'Respect',
        desc: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",   
     },
    {
        title: 'Service',
        desc: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
    {
        title: 'Responsabilité',
        desc: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
];

const About = () => {
    return (
        <main className="container__about">
            <div className="about__wrappe">
                <Header background={background} />
                <section className="container__accordeon">
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
