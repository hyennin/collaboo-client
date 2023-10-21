import styles from '../styles/Alarm.module.css';
import Header from "../components/header";
import AlarmBox from '../components/alarmBox';

const Alarm = () => {
  return (
    <div className={styles.container}>
      <Header title='알림창'/>
      <div className={styles.alarm_container}>
        <AlarmBox contents = '알림입니다~~!'/>
        <AlarmBox contents = '알림입니다~~!'/>
        <AlarmBox contents = '알림입니다~~!'/>
        <AlarmBox contents = '알림입니다~~!'/>
        <AlarmBox contents = '알림입니다~~!'/>
      </div>
    </div>
  );
}

export default Alarm;