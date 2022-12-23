import styles from '../selectByTemperament/Selects.module.css';
import styleContainer from './SelectByOrder.module.css';

function SelectByOrder({ setOrderAlpha, setCurrentPage, setOrderWeight }) {
  const handleSortAlpha = e => {
    setOrderAlpha(e.target.value);
    setCurrentPage(1);
  };

  const handleSortWeight = e => {
    setOrderWeight(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <h3>Ordenar por:</h3>
      <div className={styleContainer.selectsContainer}>
        <div>
          <label>Alfabeto</label>
          <select className={styles.selectInput} onChange={handleSortAlpha}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div>
          <label>Peso</label>
          <select className={styles.selectInput} onChange={handleSortWeight}>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectByOrder;
