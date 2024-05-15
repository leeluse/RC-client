import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MyPage from './pages/MyPage'
import Post from './components/Post'
import { useSelector } from 'react-redux'


function App() {

  return (
    <Routes >
    <Route path="/" element={<MainPage />} />
    {/* <Route path='chat/:index' element={<ChatPage />} /> */}
    <Route path='sign-in' element={<LoginPage />} />
    <Route path='sign-up' element={<RegisterPage />} />
    <Route path='my-page' element={<MyPage />} />
    <Route path='posts' element={<Post />} />
    
      {/* <Route path='product/:id' element={<DetailPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='order' element={<OrderPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
    </Routes>
    )
}

export default App