import styles from '../styles/Main.module.css'
import Header from "../components/header";
import Project from "../components/project";
import plus from '../assets/plus.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const navigate = useNavigate();
  const [isCurrent, setIsCurrent] = useState(0);

  return (
    <div className={styles.container}>
      <Header isMain='true'/>
      <div className={styles.tab_container}>
        <div className={styles.tabs}>
          <div className={isCurrent ? styles.disable_tab : styles.tab} onClick={() => setIsCurrent(0)}>진행 중인 프로젝트</div>
          <div className={isCurrent ? styles.tab : styles.disable_tab} onClick={() => setIsCurrent(1)}>완료한 프로젝트</div>
        </div>
        <div className={isCurrent ? styles.disable_content : styles.content}>
          <Project value={43}/>
          <Project value={54}/>
        </div>
        <div className={isCurrent ? styles.content : styles.disable_content}>
          <Project value={100}/>
          <Project value={100}/>
          <Project value={100}/>
        </div>
      </div>
      <div className={styles.plus_btn}>
        <img onClick={() => navigate('/gen-project')} src={plus}/>
      </div>
    </div>
  );
}

export default Main;