import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
   return (
      <div className='flex flex-col justify-center items-center min-h-[62vh]'>
         <div className=' w-3/4'>
            <h3 className='text-3xl font-semibold my-3'>Terms of Use</h3>
            <p className='text-xl'>These Terms of Use ("Terms") were last updated on Sept. 23, 2022.

               Udemys mission is to improve lives through learning. We enable anyone anywhere to create and share educational content (instructors) and to access that educational content to learn (students). We consider our marketplace model the best way to offer valuable educational content to our users. We need rules to keep our platform and services safe for you, us, and our student and instructor community. These Terms apply to all your activities on the Udemy website, the Udemy mobile applications, our TV applications, our APIs, and other related services (“Services”).

               If you publish a course on the Udemy platform, you must also agree to the Instructor Terms. We also provide details regarding our processing of personal data of our students and instructors in our Privacy Policy. If you are using Udemy as part of your employers Udemy Business learning and development program, you can consult our Udemy Business Privacy Statement.

               If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with Udemy through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in class actions, as detailed in the Dispute Resolution section.</p>
         </div>
      </div>
   );
};

export default Terms;