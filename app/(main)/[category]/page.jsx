import Home from "../page";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  console.log(category);
  return <Home category={category} />;
}
