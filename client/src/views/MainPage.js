import { useState, useEffect } from 'react';
import CardsContainer from '../components/cardsContainer/CardsContainer';
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/searchBar/SearchBar';
import SelectByDog from '../components/selectByDog/SelectByDog';
import SelectByTemperament from '../components/selectByTemperament/SelectByTemperament';
import styles from './MainPage.module.css';

function MainPage() {
  const [wordSearch, setWordSearch] = useState('');

  return (
    <div>
      <Navbar />
      <SearchBar setWordSearch={setWordSearch} />
      <div>
        <h3 className={styles.titleFilter}>Filtrar por:</h3>
        <div className={styles.selectsContainer}>
          <SelectByTemperament />
          <SelectByDog />
        </div>
      </div>
      {wordSearch && (
        <p className={styles.searchMessage}>
          Resultados de la busqueda con la palabra "{wordSearch}"
        </p>
      )}
      <CardsContainer />
    </div>
  );
}

export default MainPage;
