import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import LocationList from '../../components/LocationList/LocationList';
import background from '../../assets/Background.png';
import DataLocation from '../../data.json';


const Home = () => {
  const [headerTitle] = useState(
    'Chez vous, partout et ailleurs'
  );
  const [data] = useState(DataLocation);


  return (
    <main className="Home">
      <div className="Home-wrappe">
        <div className='home_header'>
          <Header text={headerTitle} background={background} />
        </div>
        <LocationList data={data} />
      </div>
    </main>
  );
};

export default Home;
