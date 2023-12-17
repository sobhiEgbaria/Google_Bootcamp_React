# State management

### Description
- we will practice context API in React
- No CSS! No CSS! No CSS! No CSS!
- Implement `signIn` and `BlogContext` use the code from class as a reference

### Mandatory:
- ALl pages should have access to `posts` with `useContext`
- All pages should have access to `user` with `useContext`
- if user is not null, show `admin` route in menu
- if user is null, the `Admin` component should return 'please sign in' text
- the `admin` component should work:
  - use `useContext` to get the `addPost` method from context
- You should use the `children` prop from React to create "wrapper" components

### Optional:
- implement all other "blog" methods:
  - admin only: remove post
  - admin only: update post (change title and body)
- challenge: add "search (filter)" on all posts:
  - add `input` at the top of the posts list
  - when the user type inside the `input`, filter the posts to display matched text

### Very very optional (for VIS):
- use the posts in context, implement `getPostById`, and remove the fetch from `Post` component


