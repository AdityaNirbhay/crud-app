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
          <Route path='crud-app-frontend-ochre.vercel.app' element={<CrudApp/>}/>
          <Route path='crud-app-frontend-ochre.vercel.app/all' element={<AllUsers/>}/>
          <Route path='crud-app-frontend-ochre.vercel.app/add' element={<AddUser/>}/>
          <Route path='crud-app-frontend-ochre.vercel.app/edit/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
