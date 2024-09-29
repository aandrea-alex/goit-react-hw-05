import styles from './CustomInput.module.css';

const CustomInput = props => {
  return <input className={styles.input} {...props} />;
};

export default CustomInput;
