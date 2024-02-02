import { submitBlog } from "../../../../utils/actions";
const UserBlogs = ({ params }) => {
  const id = params.userId;
  return (
    <>
      <section className='text-gray-600 body-font relative'>
        <form action={submitBlog}>
          <input
            type='text'
            name='id'
            className='none text-white'
            value={id}
            readOnly
          />
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                Create your Blog
              </h1>
              <div className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Select the Category
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text ml-96'>Fiction</span>
                    <input
                      type='radio'
                      name='category'
                      value='Fiction'
                      className='radio checked:bg-red-500 mr-96'
                    />
                  </label>
                </div>
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text ml-96'>Non Fiction</span>
                    <input
                      type='radio'
                      value='Non Fiction'
                      name='category'
                      className='radio checked:bg-blue-500 mr-96'
                    />
                  </label>
                </div>
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='label-text ml-96'>Other</span>
                    <input
                      type='radio'
                      name='category'
                      value='Other'
                      className='radio checked:bg-green-500 mr-96'
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='name'
                      className='leading-7 text-sm text-gray-600'>
                      Title
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='title'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                {/* <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='leading-7 text-sm text-gray-600'>
                      Written By
                    </label>
                    <input
                      type='text'
                      id='email'
                      name='writtenby'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div> */}
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='leading-7 text-sm text-gray-600'>
                      Blog
                    </label>
                    <textarea
                      id='message'
                      name='blog'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-96 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                      spellCheck='false'
                      data-ms-editor='true'></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg btn btn-primary'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default UserBlogs;
