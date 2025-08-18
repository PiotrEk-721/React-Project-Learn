import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addList } from '../../redux/listsRedux.js';
import Button from '../Button/Button.js';
import styles from './ListForm.module.scss';

const ListForm = ({ listId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <span>Title:</span>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Icon:</span>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
