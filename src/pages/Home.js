import { NavLink } from "react-router-dom";

const Home = () => (
  <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Welcome to the React FE Exam
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        This is a demonstration of component-based development with Redux,
        routing, and responsive design using tailwindcss.
      </p>

      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <NavLink
          to="/posts"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Check Post
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </NavLink>
        <NavLink
          to="/about"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          About Us
        </NavLink>
      </div>
    </div>
  </section>
);
export default Home;
