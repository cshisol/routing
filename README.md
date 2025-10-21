## Learning Objectives

- Client side routing with React
- Declaring routes with React Router
- Navigating between pages.

## Project setup

1. Navigate to the directory where you want to create your project.
2. Run `npm create vite@latest`
3. Select: _**React**_
4. Select: _**JavaScript**_
5. Follow terminal instructions
6. Run `npm run dev` to ensure the project dev server starts correctly.
7. Delete everything in:
   1. `src/App.css`
   2. `src/App.jsx`
   3. `src/index.css`
8. Create a `components` directory within `src`

## Steps

1. Install React Router with `npm install react-router`
2. Create `Home` and `About` components.
3. Import `BrowserRouter` and wrap the `App` in `main.jsx`
4. Import `Routes` and `Route` in `App.jsx`.
5. Import `Home` and `About` in `App.jsx`
6. Create a `Routes` component.
7. Inside `Routes` create two `Route` components:
   1. `<Route index element={<Home />} />`
   2. ``<Route path="about" element={<About />} />
8. In the browser navigate to `/` and `/about` to verify the pages are loading.
9. Using `Link` add links between the two pages. For example:
   `<Link to="/about">Go to about page</Link>`
10. Create a `Product` component, import `useParams` and deconstruct the id.
11. Create some markup which displays the id.
12. Add a new route in `App.jsx`:
    `<Route path="product/:id" element={<Product />} />`
13. In the browser navigate to `/product/123` to verify the id is displayed.
14. In another page, import `useSearchParams` and access an example search param.
