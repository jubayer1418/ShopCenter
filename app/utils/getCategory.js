import products from "../data/data";

export function generateStaticParams() {
  let category = [];
  products.forEach((product) => {
    if (category.indexOf(product.category) == -1) {
      category.push(product.category);
    }
  });
  return category;
}
