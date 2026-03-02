import { Sobremim2 } from './pages/Sobremim2'
import './app.css'
import { Routes } from 'react-router-dom'
import { Principal } from './pages/Principal'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobremim" element={<Sobremim2 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
