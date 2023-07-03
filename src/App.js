import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GenProject from './pages/genProject';
import Main from './pages/main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Main/>}/>
        <Route path = "/gen-project" element={<GenProject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
