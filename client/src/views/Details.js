import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import { getDogDetail, clearDogDetail, setLoading } from '../redux/action.js';
import styles from './Details.module.css';

function Details() {
  const { id } = useParams();

  const dogDetail = useSelector(state => state.dogDetail);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogDetail(id));

    return () => {
      dispatch(clearDogDetail());
    };
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {Object.keys(dogDetail).length === 0 ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.photoContainer}>
            <img src={dogDetail.image} alt={dogDetail.name} />
          </div>
          <div className={styles.description}>
            <h2>{dogDetail.name}</h2>
            <h3>Altura: {dogDetail.height} cm</h3>
            <h3>Peso: {dogDetail.weight} kgs</h3>
            <h3>Años de vida (aproximados): {dogDetail.lifeSpan}</h3>
            <p className={styles.temperaments}>
              <span>{dogDetail.temperament}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
