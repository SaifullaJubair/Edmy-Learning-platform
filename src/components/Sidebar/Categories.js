import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
   const [categories, setCategories] = useState([])
   fetch('https://server-edmy-a10-saifullajubair.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))

   useEffect(() => {

   })
   return (
      <div className='text-center mt-4' >
         <h2 className='text-primary text-xl '>ALL Categories {categories.length}</h2>
         <div className='my-4  text-lg'>
            {
               categories.map(category => <p className='mb-3' key={category.id}>
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
               </p>)
            }
         </div>

      </div >
   );
};

export default Categories;