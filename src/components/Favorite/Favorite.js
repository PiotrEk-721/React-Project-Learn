import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div classNAme={styles.favorites}>
      <PageTitle>Favorite</PageTitle>
    </div>
  );
};

export default Favorite;
