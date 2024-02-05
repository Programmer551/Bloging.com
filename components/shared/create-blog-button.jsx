"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
const Create_Blog_Button = () => {
  const { isLoaded, user } = useUser();
  if (isLoaded) {
    return (
      <Link href={`/dashboard/create-blog/${user.id}`}>
        <button className='btn btn-outline btn-info'>Create your Blog</button>
      </Link>
    );
  }
};

export default Create_Blog_Button;
