// import logo from './logo.svg';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';
import './App.css';

function App() {

  const {showModal, favorites } = useGlobalContext()

  return (

    <main>
      <Search/>
      {favorites.length > 0 && <Favorites/>}
      { showModal && <Modal/>}
      <Meals/>
      

      
    </main>
    
  );
}

export default App;
