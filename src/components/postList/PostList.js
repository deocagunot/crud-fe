import { Link } from "react-router-dom";

const PostList = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className="text-blue-500">
      <div className="bg-white shadow-2xl xs:w-full sm:w-80lg:w-96 h-full transition-colors duration-300 hover:bg-teal-500 text-stone-800  hover:text-white">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-5 grid max-w-2xl gap-x-8 gap-y-16 p-10 lg:grid-cols-1">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 ">
                  <span className="absolute inset-0"></span>
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm  leading-6">
                  {post.body}
                </p>
              </div>
              <div className="relative mt-8 flex  items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <span className="absolute inset-0"></span>
                    CRUD EXAM
                  </p>
                  <p>Author</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default PostList;
