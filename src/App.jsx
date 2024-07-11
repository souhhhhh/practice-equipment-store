import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CartPage from './pages/CartPage';

const App = () => {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='cart' element={<CartPage />}></Route>
      </Routes>
    {/* <NotFound /> */}
    </>
  )
}

export default App
