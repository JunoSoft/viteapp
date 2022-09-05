import { useState } from 'react'
import Header from "./components/header"
import Content from "./components/contents"
import Footer from "./components/footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header/>
      <Content/>
      <Footer/>

    </div>
  )
}

export default App
