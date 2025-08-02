import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';

const ColumnForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: title, icon: icon });
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
