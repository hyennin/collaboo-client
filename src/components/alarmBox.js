import styles from '../styles/AlarmBox.module.css';
import { useSwipeable } from 'react-swipeable';

const AlarmBox = (props) => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData)
  });

  return (
    <div className={styles.container} {...handlers}>
      <div>{props.contents}</div>
    </div>
  );
}

export default AlarmBox;