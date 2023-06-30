import Header from '../components/header';
import styles from '../styles/GenProject.module.css';

const GenProject = () => {
  return (
    <div>
      <Header title='프로젝트 생성'/>
      <div>
        <form>
          <label>프로젝트명</label>
          <input/>
          <label>마감일</label>
          <div>
            <input/>
            ~ 
            <input/>
          </div>
          <label>인원</label>
          <div>
            <div></div>
            <p>명</p>
          </div>
          <label>프로젝트 소개</label>
          <textarea/>
        </form>
      </div>
      <button>프로젝트 생성</button>
    </div>
  );
}

export default GenProject;