import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchDog } from '../../redux/action';
import styles from './SearchBar.module.css';

function SearchBar({ setWordSearch }) {
  const [dogInput, setDogInput] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setDogInput(e.target.value);
    console.log(dogInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('');

    if (!dogInput) {
      setMessage('Debe ingresar el nombre de la raza');
    }

    dispatch(getSearchDog(dogInput));
    setWordSearch(dogInput);
    setDogInput('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.main} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          name="dog"
          value={dogInput}
          placeholder="Raza"
          onChange={e => handleInputChange(e)}
        />
        <input className={styles.buttonInput} type="submit" value="BUSCAR" />
      </form>
      {message && <p className={styles.errorMessage}>{message}</p>}
    </div>
  );
}

export default SearchBar;
