import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MyPage from './pages/MyPage'
import Post from './components/Post'
import ProductPage from './pages/ProductPage'
import EditPage from './pages/EditPage'

function App() {

  return (
    <Routes >
    <Route path="/" element={<MainPage />} />
    {/* <Route path='chat/:index' element={<ChatPage />} /> */}
    <Route path='sign-in' element={<LoginPage />} />
    <Route path='sign-up' element={<RegisterPage />} />
    <Route path='my-page' element={<MyPage />} />
    <Route path='posts' element={<Post />} />
    <Route path='products/:productId' element={<ProductPage />} />
    <Route path='edit/:productId' element={<EditPage />} />
    </Routes>
    )
}

export default App