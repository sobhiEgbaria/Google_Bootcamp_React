# Personal blog day 3

### Part 1: Using react router

1. complete all the steps in the previous exercise. (All components should exist)
2. practice routing system with react router:
   - install react router DOM using `npm install react-router-dom`
     - inside `index.js` import `BrowserRouter` from `react-router-dom` and use `RouterProvider` component as fllows:
        ```jsx
           <React.StrictMode>
             <RouterProvider router={router} />
           </React.StrictMode>
       ``` 
       - create the route object, look at `index.js` for reference (inside this project)
        ```jsx
       const router = createBrowserRouter([
                {
                path: "/",
                element: <App />,
                children: [
                    {
                    path: "/",
                    element: <Home />,
                    },
       ````
3. Use the `Link` component from `react-router-dom` to navigate between pages
    ```js
      <Link to="/">Home</Link>
    ```

### Part 2: Use `useEffect` to fetch data from the server 
1. inside `Posts.js` use fetch to get all posts from the server, see example in `Posts.js` inside this project;
2. inside `Post.js` use fetch to get a single post from the server, see example in `Post.js` inside this project;
3. create a "dynamic route" for the post page, see example in `index.js` inside this project;
   ```js
     {
       path: "/post/:id",
        element: <Post />,
     },
   ```
4. use th `useParams` to get the id from the route, to the `Post Component` inside `Post.js` - see example in `Post.js` inside this project;


# IMPORTANT!!!

1. NO CSS! NO CSS! NO CSS! (unless you have extra time or patience)
2. No use of anything other then: `useState`, `useEffect', `fetch`, ternary operators. NO NEW STUFF!



