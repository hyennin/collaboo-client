import Header from "./components/header";
import Project from "./components/project";

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header/>
      <Project/>
    </div>
  );
}

export default App;
