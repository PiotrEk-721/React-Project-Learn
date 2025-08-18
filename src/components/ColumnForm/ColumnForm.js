import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addColumn } from '../../redux/columnRedux.js';
import Button from '../Button/Button.js';
import styles from './ColumnForm.module.scss';

const ColumnForm = ({ listId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Icon:</span>
      <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
