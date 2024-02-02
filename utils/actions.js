"use server";
import { auth, clerkClient } from "@clerk/nextjs";
require("dotenv").config();
// import { NextResponse } from "next/server";
import ConnectDB from "./connect";
import { UserSearchIcon } from "lucide-react";

let Blog = require("./model");

export const submitBlog = async (formData) => {
  try {
    const users = await clerkClient.users.getUserList();
    console.log("users : ", users[1].username);
    const { userId } = auth();
    if (!userId) {
      // console.log("You must be signed");
      return;
    } else {
      const id = formData.get("id");
      const category = formData.get("category");
      const blog = formData.get("blog");
      const title = formData.get("title");
      ConnectDB(process.env.MONGO_URI);
      await Blog.create({ title, category, blog, id });
    }
  } catch (error) {
    console.log(error);
  }
};
