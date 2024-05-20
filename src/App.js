
import './App.css';
import SideBar from './Componentes/SiderBar/SideBar';
import Header from './Componentes/Header/Header';
import FormColab from './Componentes/FormColab/FormColab';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className='container-fluid'>
        <Header/>
        <div className='container'>
          <FormColab/>
        </div>
      </div>
    </div>
  );
}

export default App;
