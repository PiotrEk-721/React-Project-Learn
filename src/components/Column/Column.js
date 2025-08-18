import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardRedux.js';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import styles from './Column.module.scss';

const Column = ({ id, icon, title }) => {
  const cards = useSelector((state) => getFilteredCards(state, id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        <span>{title}</span>
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
