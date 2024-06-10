import { useState } from 'react'
import Header from './component/Header'
import Cards  from './component/Cards'
import Btn from './component/Btn'
import './App.css'
import SignSteps from './component/SignSteps'
import Footer from './component/Footer';


function App() {

  return (
    <>
    <Header></Header>
    <Cards></Cards>
    <Btn></Btn>
    <SignSteps></SignSteps>
    <Footer></Footer>
    </>
  )
}

export default App
