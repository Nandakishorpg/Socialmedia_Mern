// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Side from './components/side/Side';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/a" element={<Nav/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/s' element={<Side/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
