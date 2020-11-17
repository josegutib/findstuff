import React from 'react';
import './App.css';
import Catalogo from "./components/Catalogo"
import NavBar from './components/NavBar';
import PageIndicator from './components/PageIndicator'

function App() {
  return (
    <div className="container-fluid" id="appcontainer">
      <NavBar/>
      <PageIndicator />
      <Catalogo/>
    </div>
  )
}
export default App;