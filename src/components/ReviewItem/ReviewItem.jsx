import styles from './ReviewItem.module.css';

const ReviewItem = ({ item }) => {
  return (
    <div>
      <h5 className={styles.author}>Author: {item.author}</h5>
      <p>Content: {item.content}</p>
    </div>
  );
};

export default ReviewItem;
