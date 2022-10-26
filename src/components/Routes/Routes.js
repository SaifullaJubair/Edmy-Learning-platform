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
            element: <Home></Home>
         },
         {
            path: '/category/:_id',
            element: <Category></Category>
         },
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/course',
            element: <Course></Course>
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