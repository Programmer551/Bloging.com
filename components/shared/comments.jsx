const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        console.log(comment.image);
        return (
          <div className='chat chat-start'>
            <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                <img
                  src={comment.image}
                  alt='Profile Image'
                />
              </div>
            </div>
            <div className='chat-header'>{comment.name}</div>
            <div className='chat-bubble'>{comment.comment}</div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
