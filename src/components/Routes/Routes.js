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
import Terms from "../Terms/Terms";
import Profile from "../User/Profile";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><Course></Course></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
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
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
         },
         {
            path: '/terms',
            element: <Terms></Terms>
         },
         {
            path: '/faq',
            element: <FAQ></FAQ>
         },
      ]
   }
])