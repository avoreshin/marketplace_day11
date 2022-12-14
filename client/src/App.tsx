import './App.css';
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import MyOrders from "./pages/MyOrders";
// import {useDispatch, useSelector} from "react-redux";
import React from 'react';

const App: React.FC = () => {
    return (
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path={'/my-orders'} element={<MyOrders/>}/>
            <Route path={'*'} element={<MainPage/>}/>
        </Routes>

    );
}
export default App;
