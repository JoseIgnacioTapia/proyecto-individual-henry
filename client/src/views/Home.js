import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { ButtonPrimary } from '../components/Button/Button';

function Home() {
  return (
    <div className={styles.background}>
      <div>
        <h1 className={styles.title}>Dogs App</h1>
        <h2 className={styles.subTitle}>Bienvenidos!</h2>
        <ButtonPrimary to="/dogs">Ingresar</ButtonPrimary>
      </div>
    </div>
  );
}

export default Home;
