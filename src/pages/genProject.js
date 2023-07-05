import { useState } from 'react';
import Header from '../components/header';
import styles from '../styles/GenProject.module.css';
import down from '../assets/down.png';
import calendar from '../assets/calendar.png';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import { useNavigate } from 'react-router-dom';

const GenProject = () => {
  const navigate = useNavigate();

  // select custom
  const [currentValue, setCurrentValue] = useState("2");
  const [showOptions, setShowOptions] = useState(false);
  const handleOnChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  // datepicker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className={styles.container}>
      <Header title='프로젝트 생성'/>
      <div className={styles.gen_container}>
        <form className={styles.form}>
          <label className={styles.label}>프로젝트명</label>
          <input className={styles.input}/>
          <label className={styles.label}>마감일</label>
          <div className={styles.datepicker}>
            <DatePicker
              className={styles.picker}
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat='yy.MM.dd'
              locale={ko}
            />
            &nbsp;&nbsp;~&nbsp;&nbsp;
            <DatePicker
              className={styles.picker}
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat='yy.MM.dd'
              locale={ko}
            />
            {/* <div className={styles.to}><img className={styles.calendar} src={calendar} alt='날짜'/></div> */}
          </div>
          <label className={styles.label}>인원</label>
          <div className={styles.select_container}>
            <div className={styles.select} onClick={() => {
              console.log(showOptions)
              setShowOptions(!showOptions)
            }}>
              <div className={showOptions ? styles.selected2 : styles.selected}>
                <div className={styles.num}>{currentValue}</div>
                <img className={styles.down_btn} src={down} alt='down'/>
              </div>
              <div className={styles.option_container} style={{ display: showOptions ? 'block' : 'none'}}>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='2'>2</div>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='3'>3</div>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='4'>4</div>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='5'>5</div>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='6'>6</div>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='7'>7</div>
                <div className={styles.option} onClick={handleOnChangeSelectValue} value='8'>8</div>
              </div>
            </div>
            <p>명</p>
          </div>
          <label className={styles.label}>프로젝트 소개</label>
          <textarea className={styles.info}/>
        </form>
      </div>
      <button className={styles.gen_btn} onClick={() => navigate('/')}>프로젝트 생성</button>
    </div>
  );
}

export default GenProject;