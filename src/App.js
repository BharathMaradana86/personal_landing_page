import React from 'react'
import {Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/home/About';
import Surveillance from './pages/home/Surveillance';
import Action from './pages/home/Action';
import Inspection from './pages/home/Inspection';
import Navbar from './components/Navbar';
import Preloader from './Preloader';
import Contact from './pages/home/Contact'


function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);


  return (
    <>
      {isLoading ? <Preloader /> :<Routes>
        <Route path='/' element={<Navbar/>} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/action' element={<Action />} />
        <Route path='/surveillance' element={<Surveillance />} />
        <Route path='/inspection' element={<Inspection />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>}
    </>
  )
}

export default App
