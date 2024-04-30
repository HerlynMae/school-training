import React from "react";

const StudentTable = () => {
  return (
    <div className='w-[1300px]'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Class</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <ul className='flex gap-4'>
              <li>
                <button>Edit</button>
              </li>
              <li>
                <button>Archive</button>
              </li>
            </ul>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
