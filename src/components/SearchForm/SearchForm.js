import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store.js';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput placeholder="Search..." value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
