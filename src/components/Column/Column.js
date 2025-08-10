import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

const Column = (props) => {
  const cards = useSelector((state) => state.cards);
  const filteredCards = useMemo(() => cards.filter((card) => card.columnId === props.id), [cards, props.id]);

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
