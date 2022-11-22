import React from 'react';
import Headerabout from '../../components/Header_about/Header_about';
// import Header from '../../components/Header/Header';
import background from '../../assets/background2.png';
import Accordion from '../../components/AccordeonTest/AccordeonTest';
import '../../styles/index.css';
import '../../styles/About.css';

const About = () => {
    const fiable = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements , et toutes les informations sont régulièrement vérifiées par nos équipes.'
    const respect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrimatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme'
    const service = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous conctacter si vous avez la moindre question.`
    const Responsabilite = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standerds sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.`


    return (
        <main className="container__about">
            <div className="about__wrappe">
                <div className='header_about'>
                <Headerabout background={background} />
                {/* <Header background={background} /> */}
                </div>
                <section className="container__accordeon">
                    <div className='about_contain width_about'>
                    <Accordion title="Fiabilité" content={fiable} />
                    <Accordion title="Respect" content= {respect} />
                    <Accordion title="Service" content= {service} />
                    <Accordion title="Responsabilité" content= {Responsabilite} />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
