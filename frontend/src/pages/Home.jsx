import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  return (
    <>
      {!keyword ? <Header /> : null}

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data?.message || isError.error}
        </Message>
      ) : (
        <main className="bg-[#0d0d0f] min-h-screen text-white">

          {/* HERO SECTION */}
          <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

              {/* LEFT CONTENT */}
              <div className="py-10">
                <p className="text-pink-500 font-semibold tracking-[0.3em] uppercase mb-4">
                  Welcome to
                </p>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                  STORE
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold mt-6">
                  Special Products
                </h2>

                <p className="text-gray-400 text-lg mt-5 max-w-lg">
                  Discover amazing products with a modern MERN-powered
                  shopping experience.
                </p>

                <div className="flex gap-4 mt-8">
                  <Link
                    to="/shop"
                    className="bg-pink-600 hover:bg-pink-700 transition
                    font-bold rounded-full px-8 py-3"
                  >
                    Shop Now →
                  </Link>

                  <Link
                    to="/shop"
                    className="border border-gray-600 hover:border-pink-500
                    transition rounded-full px-8 py-3"
                  >
                    Explore
                  </Link>
                </div>

                <div className="flex items-center gap-8 mt-10 text-gray-500">
                  <span className="text-4xl font-bold text-green-500">
                    M
                  </span>
                  <span className="text-4xl font-bold">
                    E
                  </span>
                  <span className="text-4xl font-bold text-cyan-400">
                    R
                  </span>
                  <span className="text-4xl font-bold text-green-400">
                    N
                  </span>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div className="absolute -inset-4 bg-pink-600/10 blur-3xl rounded-full"></div>

                <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                  <img
                    src="/thumb.png"
                    alt="Store Preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </section>

          {/* PRODUCTS HEADER */}
          <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-pink-500 uppercase tracking-widest text-sm">
                  Featured Collection
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Special Products
                </h2>
              </div>

              <Link
                to="/shop"
                className="hidden md:block text-pink-500 hover:text-pink-400"
              >
                View All →
              </Link>
            </div>

            {/* PRODUCT GRID */}
            <div className="flex justify-center flex-wrap gap-4 pb-16">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </section>

        </main>
      )}
    </>
  );
};

export default Home;
