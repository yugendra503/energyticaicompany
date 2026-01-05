import './App.css';
import Header from './Header/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Routing from './Routing';
import { createContext, useState } from 'react';
import Footer from './Footer/Footer';
export const Store=createContext();
function App() {
  const[token,setToken]=useState("");
  return (
      <Store.Provider value={[token,setToken]}>
          <Header/>
          <Routing/>
          <Footer/>
      </Store.Provider>
  );
}

export default App;