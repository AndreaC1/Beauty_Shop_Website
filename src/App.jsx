
import { HomePage, ProductsPage } from "./pages/index"
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'



import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
      <p>Salon Rose | Santa Monica, CA | 425-867-5309</p>
    </>
  )
}

export default App
