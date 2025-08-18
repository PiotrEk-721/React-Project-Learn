import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardRedux.js';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemove = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <div>
        <button className={styles.cardButton} onClick={handleToggle}>
          <i className={isFavorite ? 'fas fa-star' : 'far fa-star'}></i>
        </button>
        <button className={styles.cardButton} onClick={handleRemove}>
          <i className={'fa fa-trash'}></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
