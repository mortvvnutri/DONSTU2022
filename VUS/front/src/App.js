import React from 'react';
import { Header } from './ui/header/header';
import {Routes, Route} from 'react-router-dom'
import { Spisok } from './components/pages/spisok';
import { Profile } from './components/pages/profile';
import Example from './ui/Tables/tables';
import MaxHeightTextarea from './ui/textarea/textarea';
import { Home } from './components/home';




function App() {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-[#F9FAFF] py-[15px] '>
        <Header/>
    </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/spisok' element={<Spisok/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>


    </>

  );
}

export default App;
