"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
const Create_Blog_Button = () => {
  const { isLoaded, user } = useUser();
  if (isLoaded && user) {
    return (
      <div className='flex flex-col'>
        <Link href={`/dashboard/create-blog/${user.id}`}>
          <button className='btn btn-outline btn-info m-2'>Create your Blog</button>
        </Link>

        <Link href={`/dashboard/delete-blog/${user.id}`}>
          <button className='btn btn-outline btn-info m-2'>Delete your Blog</button>
        </Link>
      </div>
    );
  }
};

export default Create_Blog_Button;
