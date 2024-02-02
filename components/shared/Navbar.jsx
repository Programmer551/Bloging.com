"use client";

import { useUser } from "@clerk/nextjs";
import UserIcon from "./UserIcon";

import Link from "next/link";

const Navbar = () => {
  const { isLoaded, user } = useUser();

  if (isLoaded) {
    return (
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>Blogging.com</a>
        </div>
        <div className='flex-none gap-2'>
          <Link href={`/dashboard/create-blog/${user.id}`}>
            <button className='btn btn-outline btn-info'>
              Create your Blog
            </button>
          </Link>

          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-bordered w-24 md:w-auto mr-10'
            />
          </div>

          <UserIcon />
        </div>
      </div>
    );
  }
};

export default Navbar;
