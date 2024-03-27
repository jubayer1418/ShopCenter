import products from "@/app/data/data";
import Image from "next/image";

export default function SingleBlog({ params }) {
  const { id } = params;

  const product = products.find((product) => product.id == id);
  console.log(product);

  const {
    title,
    description,
    price,
    images,
    thumbnail,
    category,
    brand,
    stock,
    rating,
    discountPercentage,
  } = product;
  const arrRating = Array(parseInt(rating)).fill(1);
  console.log(rating);
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src="/iphone.jpg"
              width={400}
              height={500}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
            />

            <div className="flex gap-4 mt-4">
              <Image
                width={400}
                height={500}
                src="/iphone.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
              <Image
                width={400}
                height={500}
                src="/iphone.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
              <Image
                width={400}
                height={500}
                src="/iphone.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
              <Image
                width={400}
                height={500}
                src="/iphone.jpg"
                className="w-[100px] h-[100px] mx-auto border object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {title}
            </h1>
            <span className="text-[#919090] my-3">{category}</span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {arrRating.map((a, i) => (
                <Image key={i} width={20} height={20} src="/star.svg" alt="" />
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${price}
                </span>
                <span className="font-bold text-2xl">
                  $ {(price - (price * discountPercentage) / 100).toFixed(2)}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {(price - (price * discountPercentage) / 100).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
