import { addComment } from "../../utils/actions";
import Comments from "./comments";
const CommentsForm = ({ id, comments }) => {
  return (
    <div className='flex justify-center flex-col items-center border-2 border-sky-500'>
      <h1 className='text-5xl'>Comments</h1>
      <Comments comments={comments} />

      <form
        action={addComment}
        className='flex justify-center flex-row m-4'>
        <input
          type='text'
          placeholder='Type here'
          name='comment'
          className='input input-bordered input-accent w-full max-w-xs'
        />
        <input
          type='submit'
          value='send'
          className='btn btn-accent ml-2'
        />
        <input
          type='hidden'
          name='blogId'
          value={id}
        />
      </form>
    </div>
  );
};

export default CommentsForm;
