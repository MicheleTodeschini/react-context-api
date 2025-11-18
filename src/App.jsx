import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} /> 
        <Route path='/ChiSiamo' element={<ChiSiamo/>}/>
        <Route path='/Prodotti' element={<Prodotti/>}/>
        <Route path='/Prodotto/:id' element={<Prodotto />} />
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
