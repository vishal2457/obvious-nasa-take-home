# Nasa apod

Project submitted by vishal acharya.

## Summary and approach

- Project is created using react and vite typescript starter.
- I have used zustand for global state management.

## What i could have done differently in an enterprise app.

- I could have written better modular css classes.
- I would create error boundries for unexpected error handling.
- Would create suspense for lazy loading component.
- Would have enforced linting rules, commit hooks etc based on the team i am working with.
- Would have created stories for complex components so it could be tested in an isolated environment.
- Structured design tokens in a better way to keep the design consistency.
- Would have used more matured router for routing.

## Folder structure
```
  |-- NASA-APOD
    |-- components
        |-- shared components
    |-- styles
    |-- store
    |-- libs
    |-- pages
        |-- [module-name]
        |-- components
        |-- utils
        |-- styles (if have one or more styles file)
```
### Folder structure thought process
- pages/modules should have each module in app.
- Each module should be treated like a small app into itself.
- components, libs etc that are shared should be kept seperately.
- atomic design priciples should be used if building a shared ui lib.


## vercel app 

[Live Demo](https://obvious-nasa-take-home.vercel.app/)