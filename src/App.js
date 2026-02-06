import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurants from "./components/Restaurants"
import Home from "./components/Home";
import RestMenu from "./components/RestMenu";
import Search from "./components/Search";
import SecondaryHome from "./components/SecondaryHome";
import { Provider } from "react-redux";
import { store } from "./Stored/Store";
import Checkout from "./components/Checkout";

function App(){
    return(
        <>
        <Provider store ={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Home></Home>}></Route>
             <Route element = {<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurants" element={<Restaurants></Restaurants>}></Route>
            <Route path="/city/ghaziabad/:id" element={<RestMenu></RestMenu>}></Route>
            <Route path="/city/ghaziabad/:id/search" element={<Search></Search>}></Route>
            </Route>
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
