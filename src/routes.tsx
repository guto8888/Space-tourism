import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Destination from "./components/destination/Destination"
import Crew from "./components/crew/Crew"
import Technology from "./components/technology/technology"

const RouterComponent = () => {
    return(
        <BrowserRouter >
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/destination" element={<Destination />}></Route>
            <Route path="/crew" element={<Crew />}></Route>
            <Route path="/technology" element={<Technology />}></Route> 
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent