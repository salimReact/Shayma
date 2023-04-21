import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Login from './pages/login/Login'
import CreateRondoAdmin from './pages/login/CreateRondoAdmin'
import CreateRondoGuide from './pages/login/CreateRondoGuide'
import CreateRondoUser from './pages/login/CreateRondoUser'
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CreateRondoAdmin" element={<CreateRondoAdmin />} />
        <Route path="/CreateRondoGuide" element={<CreateRondoGuide />} />
        <Route path="/CreateRondoUser" element={<CreateRondoUser />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
