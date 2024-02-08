import Link from "next/link";
import UserIcon from "./UserIcon";
import Create_Blog_Button from "./create-blog-button";
import Mobile_Navbar from "./mobile-navbar";
const Navbar = () => {
  return (
    <>
      <div className='navbar bg-base-100 w-full max-sm:hidden sticky z-10	'>
        <div className='flex-1'>
          <Link
            className='btn btn-ghost text-xl'
            href='/'>
            Blogging.com
          </Link>
        </div>
        <div className='flex-none gap-2'>
          <Create_Blog_Button />

          <UserIcon />
        </div>
      </div>
      {/* border */}
      <Mobile_Navbar />
    </>
  );
};

export default Navbar;
