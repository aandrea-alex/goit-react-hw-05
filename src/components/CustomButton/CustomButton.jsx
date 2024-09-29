import styles from './CustomButton.module.css';

const CustomButton = ({ children, ...props }) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
