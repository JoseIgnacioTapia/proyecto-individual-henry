import Navbar from '../components/navbar/Navbar';
import styles from './PageNotFound.module.css';
import Image from '../images/technical-difficulties.jpg';

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>PageNotFound</h2>
        <h3>Error 404</h3>
        <img src={Image} alt="404 error" />
      </div>
    </div>
  );
}

export default PageNotFound;
