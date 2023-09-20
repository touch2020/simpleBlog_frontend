import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import axios from 'axios';
import { auth } from './_actions/user_action';
import { getCookie } from './utils/cookie';
import NavBar from './components/views/NavBar/NavBar';
import AboutPage from './components/views/LandingPage/AboutPage';
import ContactUsPage from './components/views/LandingPage/ContactUsPage';
import PostPage from './components/views/PostPage/PostPage';
import PostViewPage from './components/views/PostPage/PostViewPage';

function App() {
  const AuthLandingPage = Auth(LandingPage, null)
  const AuthLoginPage = Auth(LoginPage, false)
  const AuthRegisterPage = Auth(RegisterPage, false)
  const AuthPostPage = Auth(PostPage, null)
  axios.defaults.headers.common['Authorization'] = `Bearer ${getCookie("access_token")}`
 return (
   <div className="App">
   <BrowserRouter>
    <NavBar/>
       <Routes>
         <Route path="/" element={<AuthLandingPage/>} />
         <Route path="/login" element={<AuthLoginPage/>} />
         <Route path="/register" element={<AuthRegisterPage/>} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/contact" element={<ContactUsPage/>} />
         <Route path="/post" element={<AuthPostPage/>} />
         <Route path="/postView/:id" element={<PostViewPage></PostViewPage>}/>
        </Routes>
       
  </BrowserRouter>
  </div>
 )
}

export default App;
