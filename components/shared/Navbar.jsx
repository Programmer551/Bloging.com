import Link from "next/link";
import UserIcon from "./UserIcon";
import Create_Blog_Button from "./create-blog-button";
const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link
          className='btn btn-ghost text-xl'
          href='/'>
          Blogging.com
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <Create_Blog_Button />
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
};

export default Navbar;
