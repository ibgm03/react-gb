import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import HeadNav from './components/HeadNav';
import Footer from './components/Footer';

function App() {
  return (    
  <>

    <HeadNav/> 
      <Home/>
    <Footer/>
  </>
  );
}

export default App;
