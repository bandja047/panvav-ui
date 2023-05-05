
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

import PageAllReport from './Page/PageReport/PageAllReport';
import PageRegisterReport from './Page/PageReport/PageRegisterReport';

function App() {
  return (
    <>
      <Routes>
        <Route path='register' element={<RegisterPage/>}/>
        <Route path='*' element={<LoginPage/>}/> 
       < Route path='qcr/register' element={<PageRegisterReport/>}/>
        <Route path='qcr' element={<PageAllReport/>}/>
        
      </Routes>

  



    </>
  );
}

export default App;
