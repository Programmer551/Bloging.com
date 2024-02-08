// "use client";

import Link from "next/link";
import UserIcon from "./UserIcon";
import Create_Blog_Button from "./create-blog-button-mobile";

const Mobile_Navbar = () => {
  return (
    <div className='collapse bg-base-200 sm:hidden'>
      <input
        type='checkbox'
        className='peer'
      />
      <div className='collapse-title  text-primary-content peer-checked:text-secondary-content'>
        <div className='flex flex-col cursor-pointer'>
          <div className='w-20 p-2 m-2 bg-slate-500'></div>
          <div className='w-20 p-2 m-2 bg-slate-500'></div>
          <div className='w-20 p-2 m-2 bg-slate-500'></div>
        </div>
      </div>
      <div className='collapse-content'>
        <div className='flex-1 flex justify-center flex-col items-center'>
          <UserIcon />
          <div>
            <Link
              className='btn btn-ghost text-xl'
              href='/'>
              Blogging.com
            </Link>
          </div>
          <div className='flex-none gap-2'>
            <Create_Blog_Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_Navbar;
