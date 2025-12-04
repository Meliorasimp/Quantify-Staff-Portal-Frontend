import "../styles/index.css";
import React from "react";
import Landingpagenavbar from "../components/Landingpagenavbar";
import RegisterModal from "../components/RegisterModal";
import {
  setIsLoginModalOpen,
  setIsRegisterModalOpen,
} from "../store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import LoginModal from "../components/LoginModal";
import LandingPageImage from "../assets/landingpageimage.jpg";
import RealTimeAnalytics from "../assets/real-time-analytics-image.jpg";
import LightningFast from "../assets/lightningfast.jpg";
import EnterpriseSecurity from "../assets/enterprise-security.webp";
import Multilocation from "../assets/multlilocationimage.jpg";
import usecaseimageone from "../assets/usecaseimageone.jpg";
import usecaseimagetwo from "../assets/usecaseimagetwo.jpg";
import usecaseimagethree from "../assets/usecaseimagethree.jpg";
import usecaseimagefour from "../assets/usecaseimagefour.jpg";
import usecaseimagefive from "../assets/usecaseimagefive.jpg";
import { motion } from "framer-motion";
const Landingpage = () => {
  const dispatch = useDispatch();
  const registerState = useSelector(
    (state: RootState) => state.interaction.isRegisterModalOpen
  );
  const loginState = useSelector(
    (state: RootState) => state.interaction.isLoginModalOpen
  );

  const handleGetStartedClick = () => {
    dispatch(setIsRegisterModalOpen(true));
  };

  const useCaseData = [
    {
      title: "Real-time Inventory Visibility",
      description:
        "Get instant updates on stock levels across all your warehouses and sales channels, ensuring you never run out of popular items or overstock slow-moving products.",
      image: usecaseimageone,
    },
    {
      title: "Multi-Warehouse Collaboration",
      description:
        "Coordinate inventory management across multiple warehouse locations, enabling seamless stock transfers and centralized control.",
      image: usecaseimagetwo,
    },
    {
      title: "Tracking Inventory Movements",
      description:
        "Monitor every inventory movement—from receiving to picking to shipping—so you always know where each item is and its status.",
      image: usecaseimagethree,
    },
    {
      title: "Demand Forecasting for Warehouse Planning",
      description:
        "Leverage historical sales data and trends to predict future demand, helping you optimize stock levels and reduce carrying costs.",
      image: usecaseimagefour,
    },
    {
      title: "Space Optimization in Warehouses",
      description:
        " Assign products to correct storage types and locations within your warehouses to maximize space utilization and improve picking efficiency.",
      image: usecaseimagefive,
    },
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = useCaseData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(useCaseData.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f7fee7 30%, #ecfdf5 70%, #ffffff 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-32 left-10 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-52 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      <div className="bg-cover bg-center relative w-full h-screen">
        <div
          className="absolute inset-0 hero-image"
          style={{ backgroundImage: `url(${LandingPageImage})` }}
        ></div>
        <div className="relative z-50">
          <Landingpagenavbar />
        </div>

        <section className="relative flex items-center justify-center px-6">
          <div className="w-6/7 mx-auto grid lg:grid-cols-2 gap-12 items-center justify-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-lime-200 shadow-lg">
                <span className="w-2 h-2 bg-lime-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-lime-700">
                  Enterprise-Grade Solution
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4 flex flex-col h-full">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                  <span className="block text-lg mb-1 text-white">
                    Welcome to
                  </span>
                  <span className="block bg-linear-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
                    Quantify
                  </span>
                  <span className="block mt-3 text-2xl sm:text-3xl font-semibold text-white">
                    Your Advanced Inventory Management Solution
                  </span>
                </h1>

                <p className="mt-3 text-lg lg:text-xl text-white max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Streamline stock control, reduce costs, and get real-time
                  insights across warehouses and channels.
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="inline-flex items-center px-3 py-1 bg-white/80 rounded-full border border-gray-200 shadow-sm">
                    Trusted by{" "}
                    <strong className="text-gray-800 ml-1">500+</strong>{" "}
                    companies
                  </span>
                  <span className="text-xs text-white">•</span>
                  <span className="text-sm text-white">99.9% uptime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => dispatch(setIsLoginModalOpen(true))}
                >
                  <span className="relative z-10">Get Started Free</span>
                </button>

                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start space-x-8 pt-8">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold ">500+</div>
                  <div className="text-sm">Companies</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm">Uptime</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">50M+</div>
                  <div className="text-sm">Items Tracked</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-lime-500">Quantify</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive
              inventory management platform designed for enterprises that demand
              excellence, scalability, and precision.
            </p>
          </motion.div>

          {/* Features */}
          <div className="flex h-[40vh] gap-x-20">
            <motion.div
              className="w-1/2  flex flex-col items-start justify-center p-10"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-3xl font-medium flex items-center gap-x-5">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h1>Real-Time Analytics</h1>
              </div>
              <p className="mt-5">
                Get instant insights into your inventory levels, sales trends,
                and demand forecasting with our advanced analytics dashboard.
                <br />
                <br />
                Our dashboard turns complex data into clear, actionable
                insights, so you can optimize inventory, boost sales, and plan
                ahead confidently.
              </p>
            </motion.div>
            <motion.div
              className="w-1/2 bg-blue-300 bg-cover rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${RealTimeAnalytics})` }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <div className="flex h-[40vh] mt-20 gap-x-20">
            <motion.div
              className="w-1/2 bg-blue-300 bg-cover rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${EnterpriseSecurity})` }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="w-1/2 flex flex-col items-start justify-center p-10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-3xl font-medium flex items-center gap-x-5">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
                <h1>Enterprise Security</h1>
              </div>
              <p className="mt-5">
                Get instant insights into your inventory levels, sales trends,
                and demand forecasts with our advanced analytics dashboard.
                Designed for business owners and managers, our dashboard makes
                it easy to understand complex data at a glance.
                <br />
                <br />
                With intuitive charts, graphs, and visualizations, you can see
                the story behind your numbers instantly, saving time and
                improving operational efficiency.
              </p>
            </motion.div>
          </div>
          <div className="flex h-[40vh] mt-20 gap-x-20">
            <motion.div
              className="w-1/2 flex flex-col items-start justify-center p-10"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-3xl font-medium flex items-center gap-x-5">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                </div>
                <h1>Lightning Fast</h1>
              </div>
              <p className="mt-5">
                Built on modern technology stack for blazing-fast performance,
                even with millions of inventory items and complex operations.
                <br />
                <br />
                You get a fast, reliable, and future-proof system that keeps up
                with your business, no matter the scale or complexity.
              </p>
            </motion.div>
            <motion.div
              className="w-1/2 bg-blue-300 bg-cover rounded-2xl shadow-2xl"
              style={{ backgroundImage: `url(${LightningFast})` }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          <div className="flex h-[40vh] mt-20 gap-x-20">
            <motion.div
              className="w-1/2 bg-blue-300 bg-cover rounded-2xl shadow-2xl border border-black"
              style={{ backgroundImage: `url(${Multilocation})` }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              className="w-1/2 flex flex-col items-start justify-center p-10"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-black text-3xl font-medium flex items-center gap-x-5">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                    color="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>
                </div>
                <h1>Multi-Location Support</h1>
              </div>
              <p className="mt-5">
                Manage inventory across multiple warehouses, stores, and
                distribution centers with centralized control and local
                autonomy.
                <br />
                <br />
                You get the best of both worlds—a centralized system that keeps
                everything connected, and local autonomy that keeps each
                location agile and efficient.
              </p>
            </motion.div>
          </div>
          <div className="mt-20 mx-auto relative p-10">
            {/* Decorative Left Arrow */}
            <div className="absolute inset-0 flex items-center justify-start w-6 cursor-pointer">
              <button
                onClick={handlePrevPage}
                aria-disabled={currentPage === 1}
                disabled={currentPage === 1}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            {/* Decorative Right Arrow */}
            <div className="absolute inset-0 flex items-center justify-end ml-auto w-6 cursor-pointer">
              <button
                aria-disabled={currentPage === totalPages}
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Use Cases
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Quantify is designed to meet the diverse needs of various
              industries. Here are some common use cases:
            </p>
            <div className="mt-10 flex gap-x-10 justify-center">
              {currentPosts.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="bg-white w-1/3 h-[17lh] rounded-2xl shadow-xl hover:scale-102 transform transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="h-2/3 p-5 rounded-2xl">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="h-1/3 text-center">
                    <h2 className="font-medium text-xl">{useCase.title}</h2>
                    <p className="px-5 mt-3 text-gray-600 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-x-4 mt-10">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
          {/* Stats Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg text-gray-600">
                Join thousands of businesses that have transformed their
                operations with Quantify
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">
                  50M+
                </div>
                <div className="text-gray-600">Items Tracked Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-lime-500 mb-2">40%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-r from-lime-500 to-lime-600 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Inventory Management?
            </h3>
            <p className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of
              enterprise-grade inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStartedClick}
                className="bg-white text-lime-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Start Free Trial
              </button>
              <button className="text-white font-semibold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-lime-600 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      {registerState && <RegisterModal />}
      {loginState && <LoginModal />}
    </div>
  );
};

export default Landingpage;
