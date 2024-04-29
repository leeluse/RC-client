import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {

  return (
    <Routes >
    <Route path="/" element={<MainPage />} />
    <Route path='chat/:index' element={<ChatPage />} />
    <Route path='signin' element={<LoginPage />} />
    <Route path='signup' element={<RegisterPage />} />
    
      {/* <Route path='product/:id' element={<DetailPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='order' element={<OrderPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
    )
}

export default App