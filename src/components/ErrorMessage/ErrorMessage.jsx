import { ERR_LOAD } from './constants';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ msg = ERR_LOAD }) => {
  return <p className={styles.error}>{msg}</p>;
};

export default ErrorMessage;
