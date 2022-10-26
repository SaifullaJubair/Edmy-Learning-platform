import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../Blog/Blog";
import Category from "../Category/Category";
import Course from "../Course/Course";
import FAQ from "../FAQ/FAQ";
import Home from "../Home/Home";
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
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
         },

         {
            path: '/course/:id',
            element: <Course></Course>,
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
            path: '/faq',
            element: <FAQ></FAQ>
         },
      ]
   }
])