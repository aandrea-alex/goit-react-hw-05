import styles from './ReviewList.module.css';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <ReviewItem item={item}></ReviewItem>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
