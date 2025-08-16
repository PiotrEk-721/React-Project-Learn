import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById, getFilteredCards } from '../../redux/store.js';
import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import SearchForm from '../SearchForm/SearchForm.js';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));
  const cards = useSelector((state) => state.cards);
  const searchString = useSelector((state) => state.searchString);

  if (!listData) return <Navigate to="/" />;

  return (
    <div className="list">
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
          <span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns
          .filter((column) => {
            const filteredCards = getFilteredCards({ cards, searchString }, column.id);
            return filteredCards.length > 0;
          })
          .map((column) => (
            <Column key={column.id} {...column} />
          ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
