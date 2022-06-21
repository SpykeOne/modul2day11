import "./assets/styles.css";
import Navbar from "./components/Navbar/Navbar";
import { useState, React } from "react";

import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/HomePage";
import BandPage from "./pages/BandPage";
import NotFoundPage from "./pages/NotFoundPage";
import BandMember from "./pages/BandMember";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import CounterPage from "./pages/CounterPage";
import { useDispatch } from "react-redux";
import user_types from "./redux/reducers/user/types";
import ProtectedPage from "./pages/ProtectedPage";
import Navbar2 from "./components/Navbar/Navbar2";
function App() {
  const dispatch = useDispatch();

  const savedDataUser = localStorage.getItem("user_data");

  if(savedDataUser){
  const parseDataUser = JSON.parse(savedDataUser);

  dispatch({
    type: user_types.USER_LOGIN,
    payload: parseDataUser
  })
}

const routes = [
  {
  path:'/',
  element: <HomePage/>
  },
  {
  path:'/band',
  element: <ProtectedPage needLogin={true}>
  <HomePage />
  </ProtectedPage>
  },
  {
  path:'/member/:id',
  element: <BandMember/>
  },
  {
  path:'*',
  element: <NotFoundPage/>
  },
  {
  path:'/home',
  element: <Home/>
  },
  {
  path:'/products',
  element: <ProtectedPage authRoles={['admin']}>
  <ProductPage /> 
  </ProtectedPage>
  },
  {
  path:'/login',
  element: <ProtectedPage guestOnly={true}>
  <LoginPage />
</ProtectedPage>
  }, 
  {
  path:'/counter',
  element: <CounterPage/>
  },   
]

  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <Routes>
        {routes.map((route)=>{
          return <Route path={route.path} element={route.element}></Route>
        })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


//ubah navbar kalo blom login hanya home contact login
//abis login user navbar home band username logout
//login admin navbar home band product username logout