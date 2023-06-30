import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';
import bell from '../assets/bell.png';
import back from '../assets/back.png';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      { !props.isMain && <img className={styles.back} onClick={() => navigate(-1)} src={back} alt='뒤로가기'/> }
      { props.isMain ? <img className={styles.logo} src={logo} alt='Collaboo'/> : <div>{props.title}</div> }
      <img className={styles.bell} src={bell} alt='알림'/>
    </div>
  );
}

export default Header;