import logo from './logo.svg';
import './App.css';

//components should be named in capital
import AddUser from './components/AddUser.jsx';
import Navbar from './components/Navbar.jsx';
import CrudApp from './components/CrudApp.jsx';
import AllUsers from './components/AllUsers.jsx';
import EditUser from './components/EditUser.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CrudApp/>}/>
          <Route path='/all' element={<AllUsers/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
