import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store.js';
import Card from '../Card/Card.js';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div className={styles.favorites}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
