import React from "react";
import Header from "../../../partials/Header";
import Navigation from "../../../partials/Navigation";
import { Link } from "react-router-dom";
import StudentTable from "./StudentTable";

const Student = () => {
  return (
    <>
      <div className='flex w-[1300px]'>
        <div className='w-[300px] h-screen  p-5 bg-orange-50 border-r border-black/20'>
          <Header />
          <Navigation />
        </div>
        <div className='data p-7 w-full '>
          <input
            className='border border-black/20 py-3 px-2 w-96 rounded-lg mb-10'
            type='search'
            placeholder='  Search for student, teacher, document...'
          />
          <div className='title mb-7 flex justify-between items-center '>
            <h2 className='text-black font-medium text-2xl'>Database</h2>
            <button className='py-2 px-4 bg-red-400 text-white'>Add</button>
          </div>
          <nav>
            <ul className='flex gap-5 mb-5 border-b border-black/20'>
              <li className='p-2'>
                <Link>Student</Link>
              </li>
              <li className='p-2'>
                <Link>Teacher</Link>
              </li>
              <li className='p-2'>
                <Link>Staff</Link>
              </li>
            </ul>
          </nav>
          <StudentTable />
        </div>
      </div>
    </>
  );
};

export default Student;
