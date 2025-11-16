import "../styles/index.css";
import Landingpagenavbar from "../components/Landingpagenavbar";
import RegisterModal from "../components/RegisterModal";
import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import LoginModal from "../components/LoginModal";
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

      <div className="relative z-50">
        <Landingpagenavbar />
      </div>

      <section className="relative h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Welcome to</span>
                <br />
                <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Quantify
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Your one-stop solution for{" "}
                <span className="font-semibold text-lime-600">
                  Enterprise-Grade
                </span>{" "}
                inventory management
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="group relative px-8 py-4 bg-linear-to-r from-lime-500 to-lime-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={handleGetStartedClick}
              >
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-linear-to-r from-lime-600 to-lime-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50M+</div>
                <div className="text-sm text-gray-600">Items Tracked</div>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Main card */}
              <div className="absolute top-0 right-0 w-80 h-64 bg-white rounded-2xl shadow-2xl p-6 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Inventory Dashboard
                </h3>
                <div className="space-y-2">
                  <div className="h-2 bg-lime-200 rounded-full w-full"></div>
                  <div className="h-2 bg-lime-300 rounded-full w-3/4"></div>
                  <div className="h-2 bg-lime-400 rounded-full w-1/2"></div>
                </div>
              </div>

              {/* Secondary card */}
              <div className="absolute bottom-0 left-0 w-72 h-48 bg-linear-to-br from-lime-50 to-green-50 rounded-2xl shadow-xl p-5 transform -rotate-6 hover:-rotate-3 transition-transform duration-500">
                <h4 className="font-medium text-gray-700 mb-3">
                  Real-time Analytics
                </h4>
                <div className="flex items-end space-x-1 h-16">
                  <div className="w-4 bg-lime-300 rounded-t h-8"></div>
                  <div className="w-4 bg-lime-400 rounded-t h-12"></div>
                  <div className="w-4 bg-lime-500 rounded-t h-16"></div>
                  <div className="w-4 bg-lime-400 rounded-t h-10"></div>
                  <div className="w-4 bg-lime-300 rounded-t h-14"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-lime-500">Quantify</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with our comprehensive
              inventory management platform designed for enterprises that demand
              excellence, scalability, and precision.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time Analytics
              </h3>
              <p className="text-gray-600">
                Get instant insights into your inventory levels, sales trends,
                and demand forecasting with our advanced analytics dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-grade encryption, role-based access control, and
                comprehensive audit trails keep your sensitive data protected.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Built on modern technology stack for blazing-fast performance,
                even with millions of inventory items and complex operations.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Integration
              </h3>
              <p className="text-gray-600">
                Seamlessly connect with your existing ERP, CRM, and accounting
                systems through our robust API and pre-built connectors.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multi-Location Support
              </h3>
              <p className="text-gray-600">
                Manage inventory across multiple warehouses, stores, and
                distribution centers with centralized control and local
                autonomy.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Get round-the-clock support from our expert team with dedicated
                account managers and priority technical assistance.
              </p>
            </div>
          </div>

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
