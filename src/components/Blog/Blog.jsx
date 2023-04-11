import React from "react";

const Blog = () => {
  return (
    <div className="my-3 w-9/12 mx-auto mt-5">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          When should you use Context API?
        </div>
        <div className="collapse-content">
          <p>
            The Context API in React should be used when you need to pass data
            or state down to child components that are nested several levels
            deep, without having to manually pass the props through every level.
            It provides a way to manage global state in your application without
            resorting to complex solutions like Redux.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          What is react custom hook?
        </div>
        <div className="collapse-content">
          <p>
            A React custom hook is a function that starts with the word "use"
            and allows you to reuse stateful logic in multiple components,
            promoting code reusability and reducing code duplication.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          What is useRef? When You should use it?
        </div>
        <div className="collapse-content">
          <p>
            useRef is a built-in hook in React that returns a mutable ref
            object, which can be used to persist values across renders without
            triggering a re-render. It should be used when you need to access
            the DOM nodes or hold onto a value between renders without
            triggering a re-render.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box m-2"
      >
        <div className="collapse-title text-xl font-medium">
          What is useMemo? When You should use it?
        </div>
        <div className="collapse-content">
          <p>
            useMemo is a built-in hook in React that memoizes a function,
            caching the result of the function so that it is not re-executed on
            every render unless the inputs change. It should be used when you
            have a computationally expensive function that is called frequently
            in a component, and you want to avoid unnecessary re-execution of
            the function on every render.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
