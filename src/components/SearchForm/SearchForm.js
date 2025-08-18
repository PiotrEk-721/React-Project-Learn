import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux.js';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.searchString);

  const handleChange = (event) => {
    dispatch(updateSearchString(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput placeholder="Search..." value={searchString} onChange={handleChange} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
