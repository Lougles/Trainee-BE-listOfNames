import './App.css';
import AppRouter from './pages/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './pages/NavBar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
