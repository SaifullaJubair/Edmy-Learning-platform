import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import CheckOut from "../CheckOut/CheckOut";
import Course from "../Course/Course";
import Courses from "../Courses/Courses";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import User from "../User/User";

export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch(`http://localhost:5000/course`)
         },
         {
            path: '/courses',
            element: <Courses></Courses>,
            loader: () => fetch(`http://localhost:5000/course`)
         },
         {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
         },

         {
            path: '/course/:id',
            element: <Course></Course>,
            loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/user',
            element: <User></User>
         },
         {
            path: '/signup',
            element: <User></User>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/checkout',
            element: <CheckOut></CheckOut>
         },
         {
            path: '/faq',
            element: <FAQ></FAQ>
         },
      ]
   }
])