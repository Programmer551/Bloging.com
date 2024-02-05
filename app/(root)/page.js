// "use client";
import Card from "../../components/shared/card";
import { getAllBlog } from "../../utils/actions";

const Home = async () => {
  const blogs = await getAllBlog();

  return (
    <>
      <div className='flex'>
        {blogs.map((blog) => {
          return (
            <Card
              title={blog.title}
              category={blog.category}
              name={blog.name}
              id={blog.id}
              blogId={blog._id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
