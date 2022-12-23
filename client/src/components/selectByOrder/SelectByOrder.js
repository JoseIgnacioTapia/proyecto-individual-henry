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
      <div>
        <label>Orden alfabetico</label>
        <select onChange={handleSortAlpha}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div>
        <label>Orden por peso</label>
        <select onChange={handleSortWeight}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default SelectByOrder;
