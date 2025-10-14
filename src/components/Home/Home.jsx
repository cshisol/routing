import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <p>I am the home page</p>
      <Link to="/about">Go to about page</Link>
    </>
  );
}
