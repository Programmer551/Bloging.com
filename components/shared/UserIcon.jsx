"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const UserIcon = () => {
  const { user, isLoaded } = useUser();

  return (
    <>
      {isLoaded && user ? (
        <div className='w-10 rounded-full'>
          <UserButton afterSignOutUrl='/' />
        </div>
      ) : (
        <button className='btn btn-primary '>
          <Link href='/sign-in'>SignIn</Link>
        </button>
      )}
    </>
  );
};

export default UserIcon;
