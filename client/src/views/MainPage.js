import CardsContainer from '../components/cardsContainer/CardsContainer';
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/searchBar/SearchBar';
import SelectByDog from '../components/selectByDog/SelectByDog';
import SelectByTemperament from '../components/selectByTemperament/SelectByTemperament';
import styles from './MainPage.module.css';

function MainPage() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div>
        <h3>Filtrar por:</h3>
        <div className={styles.selectsContainer}>
          <SelectByTemperament />
          <SelectByDog />
        </div>
      </div>
      <CardsContainer />
    </div>
  );
}

export default MainPage;
