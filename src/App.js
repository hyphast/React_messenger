import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='main'>
        <NavBar />
      </div>
  </div>
  );
}

export default App;
