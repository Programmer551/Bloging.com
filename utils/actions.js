"use server";
import { auth, clerkClient } from "@clerk/nextjs";
require("dotenv").config();
// import { NextResponse } from "next/server";
import ConnectDB from "./connect";
import { NextResponse } from "next/server";
ConnectDB(process.env.MONGO_URI);
let blogs = require("./model");

export const submitBlog = async (formData) => {
  try {
    const users = await clerkClient.users.getUserList();
    const { userId } = auth();
    if (!userId) {
      return;
    }

    const id = formData.get("id");
    const category = formData.get("category");
    const blog = formData.get("blog");
    const title = formData.get("title");
    let name;

    users.map((user) => {
      if (user.id == id) {
        name = user.username;
      }
    });

    await blogs.create({ title, category, blog, id, name });
  } catch (error) {
    console.log(error);
  }
};
export const getAllBlog = async () => {
  try {
    const blog = await blogs.find();
    return blog;
  } catch (error) {
    console.log(error);
  }
};
const getSingleBlog = async (id) => {
  try {
    const SingleBlog = await blogs.find({ _id: id });

    const obj = {
      blog: SingleBlog[0].blog,
      id: SingleBlog[0].id,
      title: SingleBlog[0].title,
      category: SingleBlog[0].category,
    };

    return obj;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleBlogAndUser = async (id1) => {
  try {
    const obj = await getSingleBlog(id1);

    const { blog, id, title, category } = obj;

    const users = await clerkClient.users.getUserList();
    const { userId } = auth();
    if (!userId) {
      return null;
    }

    const userPromises = users.map(async (user) => {
      if (user.id == id) {
        const obj2 = {
          image: user.imageUrl,
          name: user.username,
          blog,
          title,
          category,
        };

        return obj2;
      }
    });

    return Promise.all(userPromises);
  } catch (error) {
    console.log(error);
    return null;
  }
};
