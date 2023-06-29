import styles from '../styles/Header.module.css';
import logo from '../assets/logo.png';
import bell from '../assets/bell.png';

const Header = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='Collaboo'/>
      <img className={styles.bell} src={bell} alt='알림'/>
    </div>
  );
}

export default Header;