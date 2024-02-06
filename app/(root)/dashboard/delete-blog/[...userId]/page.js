import { getUserBlogs } from "../../../../../utils/actions";
import Card from "../../../../../components/shared/card";
const Delete_Blog = async ({ params }) => {
  const { userId } = params;
  const blogs = await getUserBlogs(userId);
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {blogs.map((blog) => {
          return (
            <Card
              title={blog.title}
              category={blog.category}
              name={blog.name}
              id={blog.id}
              blogId={blog._id}
              del={true}
            />
          );
        })}
      </div>
    </>
  );
};
export default Delete_Blog;
