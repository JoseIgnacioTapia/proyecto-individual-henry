import { useDispatch, useSelector, useSlecetor } from 'react-redux';
import styles from './Paginated.module.css';
import { setPage } from '../../redux/action.js';

function Paginated({ dogsPerPage, totalDogs, paginated }) {
  const pageNumbers = [];

  let statePage = useSelector(state => state.statePage);
  let dispatch = useDispatch();

  for (let i = 0; i <= Math.floor(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const onClickHandler = num => {
    paginated(num);
    dispatch(setPage(num));
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.pagination}>
        {pageNumbers &&
          pageNumbers.map(num => {
            return (
              <li key={num} style={{ margin: '0 5px' }}>
                <button
                  className={statePage === num ? styles.active : styles.buttons}
                  onClick={() => onClickHandler(num)}
                >
                  {num}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Paginated;
