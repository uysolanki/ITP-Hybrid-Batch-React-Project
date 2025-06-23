import React from 'react'
import ShowProducts from './pages/ShowProducts'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AddProduct from './pages/AddProduct';
import Menubar from './components/Menubar';

const App = () => {
  return (
   <>
      <Router>
        <Menubar/>
          <Routes>
                <Route   path="/"     element={<Landingpage /> }      />
                <Route   path="/allproducts"     element={<ShowProducts /> }      />
                 <Route  path="/addproduct"     element={<AddProduct /> }      />
          </Routes>

      </Router>
   </>
  )
}

export default App