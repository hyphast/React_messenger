import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app-wraper'>
      <Header />
      <div className='main'>
        <NavBar />
      </div>
  </div>
  );
}

export default App;
