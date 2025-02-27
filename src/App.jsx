import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Register from './components/pages/Register/Register.jsx';


function App() {

    const Navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){
            Navigate('login/');
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="login/" element={<Login />}/>
                <Route path="register/" element={<Register />}/>
            </Route>
        </Routes>
    )

}

export default App;
