# Personal blog day 2

## Notes:
- No CSS!!! No CSS!!! No CSS!!
- We will practice useState and conditions

## Instructions:
1. complete all components from yesterday
2. inside `App.js` component 
 - Create empty array of posts using `useState`
 - Pass the `posts` array to `Posts` component with props
 - `Posts` component  should display the number of posts (`posts.length`)
 - `Posts` component should display all posts by using the `PostList` component,
 -  Pass the posts array from `Posts` component to the `PostList` component with props
 - The `PostLIst` component should display all posts by using the `PostCard` component
 - The `PostList` component should use `map` to loop over the posts array, and return a `PostCard` component for each post
 - The `PostList` component should pass the post object to the `PostCard` component with props
 - The `PostCard` component should display the post title and body
3. practice passing functions as props:
   - create a function in `App.js` that will add a new post to the posts array. use the `setPosts` from the `useState` function.
   - pass the function to the `Admin` component with props
   - inside admin component, get the data from the `newPost` form using the `onSubmit` event (<form onSubmit='')

## Bonus!! Bonus!! Bonus!! (no CSS)
1. inside `App.js` component create a state (using `useState`) named: `pageName` (string).
2. create 3 buttons, each should set the pageName to the page names you would like to show:
3. create a condition that will display the correct component according to the pageName state
   4. start with: 'Home', 'Posts', 'Admin'
5. create a condition that will display the correct component according to the pageName state
   6. use ternary operator to display the correct component: 
   ```javascript
    {pageName === 'Home' ? <Home /> : null}
   ```
7. experience with `swith` statement:
   ```javascript
    switch(pageName) {
      case 'Home':
        return <Home />
      case 'Posts':
        return <Posts />
      case 'Admin':
        return <Admin />
      default:
        return null
    }
   ```


