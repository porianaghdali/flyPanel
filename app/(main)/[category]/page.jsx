import Home from "../page";

export default function CategoryPage({ params }) {
  const { category } = params;

  return <Home category={category} />;
}
