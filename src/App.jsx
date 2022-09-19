// import logo from './logo.svg';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <main>
      Meal App
      <Favorites/>
      <Meals/>
      <Modal/>
      <Search/>
      
    </main>
    
  );
}

export default App;
