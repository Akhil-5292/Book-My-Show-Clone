import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Menubar from './Components/Menu/Menubar/Menubar';
import Navbar from './Components/Navbar/Navbar';
import Pathan from './Components/Pathan/Pathan';
import Premiere from './Components/Premiere/Premiere';
import Signup from './Components/Register/Signup';
function App() {

  return (
    <div className="App">
    {/* <Navbar/> */}
    {/* <Menubar/> */}
    {/* <Home/> */}
    {/* <Premiere/> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Pathaan' element={<Pathan/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
