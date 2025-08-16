import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button className={styles.cardButton} onClick={handleToggle}>
        <i className={isFavorite ? 'fas fa-star' : 'far fa-star'}></i>
      </button>
    </li>
  );
};

export default Card;
