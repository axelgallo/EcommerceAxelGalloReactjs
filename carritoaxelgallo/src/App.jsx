import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import NavBar from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    
    <NavBar />
    <ItemListContainer />
    </>
  )

}

export default App
