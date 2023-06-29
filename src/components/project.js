import styles from '../styles/Projects.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info_container}>
        <div>
          <p className={styles.title}>프로젝트명</p>
          <p className={styles.intro}>프로젝트 소개</p>
        </div>
        <p className={styles.deadline}>2023.06.29 ~ 2023.06.29</p>
      </div>
      <div className={styles.progress_bar}>
        <CircularProgressbar value={43} text='43%' strokeWidth={10} styles={buildStyles({
          pathColor: '#03D069',
          textColor: '#000000',
          trailColor: '#D4D4D4'
        })}/>
      </div>
    </div>
  );
}

export default Project;