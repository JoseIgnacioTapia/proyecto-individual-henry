import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments } from '../redux/action';
import { useForm } from '../hooks/useForm';
import Navbar from '../components/navbar/Navbar';
import { validationsForm } from '../helpers/helpers.js';
import styles from './CreatePage.module.css';
import Loading from '../components/loading/Loading';

const initialForm = {
  name: '',
  image: '',
  minWeight: '',
  maxWeight: '',
  minHeight: '',
  maxHeight: '',
  lifeSpan: '',
  temperaments: [],
};

function CreatePage() {
  const temperaments = useSelector(state => state.temperaments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleDeleteTemperament,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <Navbar />
      <h2 className={styles.title}>Crear Raza de Perro</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="image">Url Imagen:</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label>Peso</label>
          <div>
            <label htmlFor="minWeight">Min:</label>
            <input
              type="number"
              name="minWeight"
              value={form.minWeight}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.minWeight && <p>{errors.minWeight}</p>}
          </div>
          <div>
            <label htmlFor="maxWeight">Max:</label>
            <input
              type="number"
              name="maxWeight"
              value={form.maxWeight}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.maxWeight && <p>{errors.maxWeight}</p>}
          </div>
        </div>
        <div>
          <label>Altura</label>
          <div>
            <label htmlFor="minHeight">Min:</label>
            <input
              type="number"
              name="minHeight"
              value={form.minHeight}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.minHeight && <p>{errors.minHeight}</p>}
          </div>
          <div>
            <label htmlFor="maxHeight">Max:</label>
            <input
              type="number"
              name="maxHeight"
              value={form.maxHeight}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.maxHeight && <p>{errors.maxHeight}</p>}
          </div>
        </div>
        <div className={styles.lifeGroup}>
          <label htmlFor="lifeSpan"> Vida aproximadamente:</label>
          <input
            type="number"
            name="lifeSpan"
            value={form.lifeSpan}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lifeSpan && <p>{errors.lifeSpan}</p>}
        </div>
        <div>
          <div className={styles.options}>
            <label htmlFor="temperaments">Temperamentos:</label>
            <select
              name="temperaments"
              value={
                form.temperaments.length ? form.temperaments.at(-1) : 'default'
              }
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="default">Elegir temperamento</option>
              {temperaments?.map(t => (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            {errors.temperaments && <p>{errors.temperaments}</p>}
          </div>
          <div className={styles.wrapTemperament}>
            {form.temperaments?.map(c => {
              return (
                <div className={styles.temperament} key={c}>
                  <p className={styles.tempSelected}>{c}</p>
                  <button onClick={() => handleDeleteTemperament(c)}>X</button>
                </div>
              );
            })}
          </div>
        </div>

        <input
          className={styles.inputSubmit}
          type="submit"
          disabled={Object.keys(errors).length < 1 ? false : true}
          value="CREAR"
        />
      </form>
      {loading && <Loading />}
      {response && (
        <p className={styles.messagePositive}>
          Los datos se enviaron correctamente
        </p>
      )}
    </div>
  );
}

export default CreatePage;
