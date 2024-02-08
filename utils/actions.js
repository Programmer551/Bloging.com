"use server";
import { auth, clerkClient } from "@clerk/nextjs";
require("dotenv").config();

import ConnectDB from "./connect";
import { revalidatePath } from "next/cache";

ConnectDB(process.env.MONGO_URI);
let blogs = require("./model");
let Contact = require("./contact-model");
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
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
      comments: SingleBlog[0].comments,
    };

    return obj;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleBlogAndUser = async (id1) => {
  try {
    const obj = await getSingleBlog(id1);

    const { blog, id, title, category, comments } = obj;

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
          comments,
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
export const getUserBlogs = async (userId) => {
  try {
    const userBlogs = await blogs.find({ id: userId });
    return userBlogs;
  } catch (error) {
    console.log(error);
  }
};
export const Delete_Blog = async (formData) => {
  try {
    const { userId } = auth();
    const blogId = formData.get("blogId");
    const blog = await blogs.find({ _id: blogId });
    if (userId == blog[0].id) {
      await blogs.deleteOne({ _id: blogId });
      revalidatePath("/");
      return "Done";
    }
  } catch (error) {
    console.log(error);
  }
};
export const createComment = async () => {
  try {
    const { userId } = auth();
    if (!userId) {
      return;
    }

    const users = await clerkClient.users.getUserList();
    const userPromises = users.map(async (user) => {
      if (user.id == userId) {
        const obj2 = {
          image: user.imageUrl,
          name: user.username,
        };
        return obj2;
      }
    });

    return Promise.all(userPromises);
  } catch (error) {
    console.log(error);
  }
};
export const addComment = async (formData) => {
  try {
    let obj = await createComment();
    for (let i of obj) {
      if (!i) {
      } else {
        obj = i;
      }
    }

    const comment = formData.get("comment");
    const blogId = formData.get("blogId");

    // Fetch the blog
    const blog = await blogs.findOne({ _id: blogId });

    const newComments = blog.comments;

    const new2 = { ...obj, comment };

    newComments.push(new2);

    console.log("new comments ", newComments);

    await blogs.findOneAndUpdate(
      { _id: blogId },
      { $set: { comments: newComments } },
    );

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};
export const SubmitContact = async (formData) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return;
    }
    const email = formData.get("email");
    const message = formData.get("message");
    await Contact.create({ email, message });
  } catch (err) {
    console.log(err);
  }
};
