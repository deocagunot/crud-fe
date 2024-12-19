import Error from "../components/Error";
import Loader from "../components/Loader";
import { Outlet, useParams } from "react-router-dom";

import { fetchPosts } from "../store/dataActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/postList/PostList";

const Posts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-stone-600 mt-7">
        Posts
      </h2>

      {status === "loading" && <Loader />}
      {status === "failed" && <Error />}
      {status === "succeeded" && !id && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-3 sm:grid-cols-1 gap-4 p-8 ">
          {posts.map((post) => (
            <PostList key={post.id} tabIndex="0" role="button" post={post} />
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Posts;
