# Personal blog: Forms!

## description
- we will practice how to handle forms, wit ha popular 3rd party library
- NO CSS! NO CSS! NO CSS! NO CSS!


## steps
- install the react-use-form library using npm: https://www.react-hook-form.com/
- use the library in the admin component, where you can create new post

## mandatory
- complete all the mandatory steps from last time
- Get the values out if the form using the `react-use-form` library
- Add `required` validation to the title with a message
- If you are an admin, show a `remove` button on the `postCard` and remove the post

## Optional(!!!)
- add extra validation messages for `minLength`, `pattern` (regex)
  - pattern validation: use regex to make sure that the title contain only english letters (no code or HTML)
- add extra field to the `admin` form: createdDate (input type date)
  - watch the createDate - if it's in the past - show message to the user

## Bonus(!!!)
- implement th `edit post` feature:
- as an admin, you can click a post, and move to the `admin` form to edit it
