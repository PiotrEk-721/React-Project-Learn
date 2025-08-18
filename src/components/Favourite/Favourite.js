import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardRedux.js';
import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';
import styles from './Favourite.module.scss';

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
