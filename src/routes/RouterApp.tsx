import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/AuthPage/Login"
import Movies from "../pages/MoviesPage/Movies"
import PrivateRoute from "./PrivateRoute"

const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/" element={<PrivateRoute/>}>
                    <Route path='/' element={<Movies/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp