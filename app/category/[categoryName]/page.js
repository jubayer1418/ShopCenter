"use client";
import Link from "next/link";

import { generateStaticParams } from "@/app/utils/getCategory";
import { usePathname } from "next/navigation";
import products from "../../data/data";

const Category = ({ params }) => {
  const router = usePathname();

  const { categoryName } = params;

  const filterProducts = products.filter((product) => {
    if (categoryName == "categoryAll") {
      return product;
    } else {
      return product.category == categoryName;
    }
  });

  const category = generateStaticParams();
  console.log(category);
  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <Link
            href={"categoryAll"}
            className={
              router == "/category/categoryAll"
                ? "border-b border-black block h-6 box-border mt-4"
                : "hover:border-b border-black block h-6 box-border mt-4"
            }
          >
            All
          </Link>
          {category.map((item) => (
            <Link
              href={`${item}`}
              className={
                router == `/category/${item}`
                  ? "border-b border-black block h-6 box-border mt-4 text-[#00D991]"
                  : "hover:border-b border-black block h-6 box-border mt-4"
              }
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {filterProducts.map((product) => (
            <div key={product.id}>
              <div
                style={{ "--image-url": `url(${product.thumbnail})` }}
                className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[image:var(--image-url)] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
              ></div>
              <h2 className="text-sm lg:text-base mt-2">
                <Link
                  className="text-base font-bold"
                  href={`/products/${product.id}`}
                >
                  {product.title}
                </Link>
                <span className="text-[#919090]">
                  <a href={`${product.category}`}>({product.category})</a>
                </span>
              </h2>
              <p className="text-[#919090] text-sm ">
                An apple mobile which is nothing like apple
              </p>

              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">$205.00</span>
                $195.00
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Category;
