import Navbar from "../components/Navbar";
import Bar from "../components/Chart/BarChart";
const StockMovement = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="min-h-full p-6">
          {/*Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="">
                  <h1 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Stock Movement
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Track and manage stock movements across your warehouses and
                    storage locations
                  </p>
                </h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium mb-1">
                    Inbound Stock Added
                  </p>
                  <p className="text-3xl font-bold text-green-600">+375</p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
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
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium mb-1">
                    Outbound Stock Removed
                  </p>
                  <p className="text-3xl font-bold text-red-600">-100</p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
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
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium mb-1">
                    Transfers Completed
                  </p>
                  <p className="text-3xl font-bold text-blue-600">10</p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
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
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium mb-1">Total Movement</p>
                  <p className="text-3xl font-bold text-yellow-600">100</p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
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
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Search stock Movements..."
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40">
                  <option value="">Type</option>
                  <option value="electronics">Inbound</option>
                  <option value="furniture">Outbound</option>
                  <option value="clothing">Transfer</option>
                </select>

                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40">
                  <option value="">All Warehouses</option>
                  <option value="pluto">Pluto Warehouse</option>
                  <option value="mars">Mars Warehouse</option>
                  <option value="earth">Earth Warehouse</option>
                  <option value="venus">Venus Warehouse</option>
                </select>

                <button className="flex items-center px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-md hover:shadow-lg">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Item
                </button>
              </div>
            </div>
          </div>
          {/* Table or content for stock movements can go here */}
          <section className="flex gap-x-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 w-2/3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Stock Movement Analytics
                </h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-lime-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
              </div>

              {/* Placeholder for chart */}
              <div className="w-full h-[250px] md:h-[400px] p-4">
                <div className="flex items-center justify-center w-full h-full">
                  <Bar />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden w-1/3 ">
              <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Stocks
                </h2>
              </div>
              <div className="px-6 flex flex-col gap-y-2">
                <div className="flex items-center gap-x-4 mb-4">
                  <div className="bg-green-400 p-2 rounded-2xl text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-900">
                      Added Product X to Warehouse A
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mb-4">
                  <div className="bg-red-400 p-2 rounded-2xl text-white">
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
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Removed Product Y from Warehouse B
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 mb-4">
                  <div className="bg-blue-400 p-2 rounded-2xl text-white">
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
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Transfered Product Z from Warehouse B to Warehouse C
                    </p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden mt-4">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                General Stock Movements
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Overview of all stock movements in the system
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-32">
                          Item SKU
                        </th>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-40">
                          Product Name
                        </th>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-32">
                          Quantity
                        </th>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-32">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-48">
                          Warehouse Location
                        </th>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-40">
                          User
                        </th>
                        <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider max-w-40">
                          Timestamp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StockMovement;
