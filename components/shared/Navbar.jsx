"use client";

import { useUser } from "@clerk/nextjs";
import UserIcon from "./UserIcon";

import Link from "next/link";

const Navbar = () => {
  // const { user } = useUser();
  // console.log(user);
  const { isLoaded, user } = useUser();

  console.log({ user });
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Blogging.com</a>
      </div>
      <div className='flex-none gap-2'>
        <Link href={`/dashboard/`}>
          <button className='btn btn-outline btn-info'>Your Blogs</button>
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
    // </div>
  );
};

export default Navbar;
