import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const AllSalesOrder = () => {
  const navigate = useNavigate();
  const handleDynamicClick = (id: string) => {
    navigate(`/salesorders/${id}`);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-8">
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  All Sales Orders
                </h1>
                <p className="text-gray-600 mt-3 text-lg">
                  View and manage all of your pending sales orders in one place.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white shadow-sm"
                    placeholder="Search Sales Orders..."
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 mb-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex w-full justify-between border-b-2 border-gray-200 pb-4 mb-4">
                <h1 className="uppercase text-gray-700 font-bold tracking-wide">
                  SO #001
                </h1>
                <span className="uppercase text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Vendor:</span>
                  <span className="font-semibold text-gray-800">
                    Example Company Ltd. 1
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Date Issued:</span>
                  <span className="font-semibold text-gray-800">
                    October 28, 1999
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-bold text-green-600 text-lg">
                    $2,500.00
                  </span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button
                  className="w-full flex justify-center items-center py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                  onClick={() => handleDynamicClick("SO001")}
                >
                  View Order Details
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AllSalesOrder;
