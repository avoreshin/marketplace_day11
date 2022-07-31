import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import MyOrders from "./pages/MyOrders";

function App() {
    return (
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path={'/my-orders'} element={<MyOrders/>}/>
            <Route path={'*'} element={<MainPage/>}/>

        </Routes>

    );
}

export default App;
