import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchPosts } from "../store/dataActions";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      if (status === "idle") {
        await dispatch(fetchPosts());
      }
      const existingPost = posts.find((p) => p.id === parseInt(id));
      if (existingPost) {
        setPost(existingPost);
      } else {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };
    fetchAndSetPost();
  }, [id, posts, dispatch, status]);

  return (
    <>
      <div className="container p-4 text-center">
        {post ? (
          <>
            <h2 className="text-2xl mb-2" tabIndex="0">
              {post.title}
            </h2>
            <p tabIndex="0">{post.body}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="text-center">
        <Link
          to="/posts"
          class="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back to posts
        </Link>
      </div>
    </>
  );
};

export default PostDetails;
