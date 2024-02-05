import Link from "next/link";

const Card = ({ title, category, name, blogId }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl m-4'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Title: {title}</h2>
        <p>Category: {category}</p>
        <p>Written By :{name}</p>
        <div className='card-actions'>
          <Link href={`/blog/${blogId}`}>
            <button className='btn btn-accent'>Open</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
