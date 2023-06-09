import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRouts from "./AdminRouts";
import ManageItems from "../pages/Shared/ManageItems/ManageItems";
import Payment from "../pages/DashBoard/Payment/Payment";
 


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
        {
            path:'order/:category',
            element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
      },
        {
          path:'signup',
          element:<SignUp></SignUp>
      },
        {
          path:'secret',
          element:<PrivetRoute><Secret></Secret></PrivetRoute>
      }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path: "mycart",
          element: <MyCart></MyCart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "allusers",
          element: <AdminRouts><AllUsers></AllUsers></AdminRouts>
        },
        {
          path: "additem",
          element: <AdminRouts><AddItem></AddItem></AdminRouts>
        },
        {
          path: "manageitem",
          element: <AdminRouts><ManageItems></ManageItems></AdminRouts>
        }
      ]
  },
  ]);