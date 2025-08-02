import styles from './Button.module.scss';

const TextInput = (props) => {
  return (
    <button className={styles.button} type="button">
      {props.children}
    </button>
  );
};

export default TextInput;
