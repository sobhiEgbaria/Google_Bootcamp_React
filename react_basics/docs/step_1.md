# Personal Blog Project (React) - Part 1

## Introduction
You are going to create a personal blog using React.
You will be practicing the following concepts:
- create React project.
- create React components.
- JS import/export.
- Breaking down the UI into components.

The blog will have the Following pages:
- Home page: this page will display a welcome message and the last 3 posts.
- Posts page: this page will display all the posts.
- Post page: this page will display the post content.
- About page: this page will display information about the blog owner.
- Contact page: this page will display a contact form.
- Admin page: this page will display a form to add a new post.

You will be using React.


## First step:
Create a new React project using the following command:
```
npx create-react-app <my-blog>
```

## Second step:
Create the following components for each page:
- Home: this component will display the home page.
- Posts: this component will display the posts page.
- Post: this component will display the post page.
- About: this component will display the about page.
- Contact: this component will display the contact page.
- Admin: this component will display the admin page.

In addition, create shared components as follows:
- Header: this component will display the header of the page.
- Footer: this component will display the footer of the page.

Your AppComponent should look like this:
```jsx
function App() {
  return (
      <div>
        <Header />
          <Home />
          <Posts />
          <Post />
          <About />
          <Contact />
          <Admin />
          <Footer />
      </div>
  );
}
```

## Third step:
- inside Posts page:
    - create a component called `PostCard` that will display the post title, image, and description.
    - create a component called `PostList` that will display a list of `PostCard` components.

- inside admin page:
    - create a component called `PostForm` that will display a form to add a new post.

- iniside contact page:
    - create a component called `ContactForm` that will display a form to send a message.


## Please note!:
- You can choose one of these options:
1. Use the provided Figma design to create the components.
2. Create your own design.
3. Use the same project from the HTML/CSS project and convert it to React.


## You don't have to:
- Use `useState`
- Add any functionality to the pages. 
