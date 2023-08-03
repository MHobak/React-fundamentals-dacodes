import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/AuthPage/Login"
import Movies from "../pages/MoviesPage/Movies"

const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Movies" element={<Movies/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp