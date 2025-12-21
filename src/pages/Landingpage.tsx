import "../styles/index.css";
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
      {/* Why Choose Us Section */}
      <section className="py-24 bg-linear-to-br from-gray-50 via-white to-lime-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-lime-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-lime-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-lime-700 uppercase tracking-wide">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Built for{" "}
              <span className="bg-linear-to-r from-lime-500 to-emerald-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your inventory management with cutting-edge features
              designed for enterprises that demand excellence, scalability, and
              precision.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Feature 1 - Real-Time Analytics */}
            <motion.div
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${RealTimeAnalytics})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-blue-600 p-3 rounded-2xl shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Real-Time Analytics
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Get instant insights into your inventory levels, sales trends,
                  and demand forecasting with our advanced analytics dashboard.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our dashboard turns complex data into clear, actionable
                  insights, so you can optimize inventory, boost sales, and plan
                  ahead confidently.
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 - Enterprise Security */}
            <motion.div
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${EnterpriseSecurity})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-purple-600 p-3 rounded-2xl shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bank-grade encryption and multi-layer security protocols
                  protect your sensitive inventory and business data 24/7.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With role-based access controls, audit trails, and compliance
                  certifications, your data stays secure and your business stays
                  protected.
                </p>
                <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Lightning Fast */}
            <motion.div
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${LightningFast})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-amber-600 p-3 rounded-2xl shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  Lightning Fast Performance
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Built on modern technology stack for blazing-fast performance,
                  even with millions of inventory items and complex operations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You get a fast, reliable, and future-proof system that keeps
                  up with your business, no matter the scale or complexity.
                </p>
                <div className="mt-6 flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 - Multi-Location Support */}
            <motion.div
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${Multilocation})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-emerald-600 p-3 rounded-2xl shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  Multi-Location Support
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Manage inventory across multiple warehouses, stores, and
                  distribution centers with centralized control and local
                  autonomy.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You get the best of both worlds—a centralized system that
                  keeps everything connected, and local autonomy that keeps each
                  location agile and efficient.
                </p>
                <div className="mt-6 flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Benefits Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Instant Setup
              </h4>
              <p className="text-gray-700">
                Get started in minutes with our intuitive onboarding process and
                pre-configured templates.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h4>
              <p className="text-gray-700">
                Our dedicated support team is always available to help you
                succeed and solve any challenges.
              </p>
            </div>

            <div className="bg-linear-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl border border-emerald-200 hover:shadow-xl transition-shadow">
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                99.9% Uptime
              </h4>
              <p className="text-gray-700">
                Rely on our robust infrastructure with guaranteed uptime and
                automatic backups for peace of mind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-lime-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Real-World Applications
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Powerful{" "}
              <span className="bg-linear-to-r from-blue-500 to-lime-600 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how Quantify empowers businesses across industries to
              optimize their inventory management and drive growth.
            </p>
          </motion.div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {useCaseData.map((useCase, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-blue-600 font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {useCase.description}
                  </p>

                  {/* Icon */}
                  <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    <span>Explore feature</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
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
