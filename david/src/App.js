import './App.css';
import { Loader } from './components/Loader/Loader';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/Services';
import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []); 
  return (
    <div className="App">
      {loading ? <Loader/> : (
        <>
          <Header />
          <Hero />
          <Services />
          <Contacts />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
