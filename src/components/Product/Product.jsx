import { useParams } from "react-router";

export default function Product() {
  let { id } = useParams();

  return <p>I am the product page for id: {id}</p>;
}
