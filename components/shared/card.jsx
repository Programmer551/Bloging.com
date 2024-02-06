import Link from "next/link";
import { Delete_Blog } from "../../utils/actions";
const Card = ({ title, category, name, blogId, del }) => {
  if (!del) {
    return (
      <div className='card w-96  shadow-xl m-4 bg-emerald-200	'>
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
  }
  if (del) {
    return (
      <div className='card w-96  shadow-xl m-4 bg-emerald-200'>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Title: {title}</h2>
          <p>Category: {category}</p>
          <p>Written By :{name}</p>
          <div className='card-actions'>
            {}
            <form action={Delete_Blog}>
              <a href='#my_modal_8'>
                <input
                  type='submit'
                  className='btn btn-error'
                  value='Delete'
                />
              </a>
              <input
                type='hidden'
                value={blogId}
                name='blogId'
              />
            </form>
            {/* Put this part before </body> tag */}
            <div
              className='modal'
              role='dialog'
              id='my_modal_8'>
              <div className='modal-box'>
                <h3 className='font-bold text-lg'>Done</h3>
                <p className='py-4'>Your Blog has been Deleted</p>
                <div className='modal-action'>
                  <Link
                    href='/'
                    className='btn btn-success'>
                    OK
                  </Link>
                </div>
              </div>
            </div>
            {}
          </div>
        </div>
      </div>
    );
  }
};
export default Card;
