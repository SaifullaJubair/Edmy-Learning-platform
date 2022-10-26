import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
   const [categories, setCategories] = useState([])
   fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))

   useEffect(() => {

   })
   return (
      <div >
         <h2>ALL Categories {categories.length}</h2>
         <div className='m-3'>
            {
               categories.map(category => <p key={category.id}>
                  <Link to={`/category/${category.id}`}>{category.name}</Link>
               </p>)
            }
         </div>

      </div >
   );
};

export default Categories;