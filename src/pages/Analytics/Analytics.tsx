import Navbar from "../../components/Navbar";
import TotalInventoryChart from "../../components/AnalyticsCharts/Inventory/TotalInventoryValue";
import InventoryTurnoverRateChart from "../../components/AnalyticsCharts/Inventory/InventoryTurnoverRate";
import DaysOfInventoryOnHandChart from "../../components/AnalyticsCharts/Inventory/DaysOfInventoryOnHand";
import OutOfStockItemsChart from "../../components/AnalyticsCharts/Inventory/OutOfStockItems";
import OverStockItemsChart from "../../components/AnalyticsCharts/Inventory/OverstockItems";
import TopMovingSKUChart from "../../components/AnalyticsCharts/Inventory/TopMovingSKU";
import { Link } from "react-router-dom";
const Analytics = () => {
  const paretoLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    " July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const paretoValues = [150, 120, 100, 80, 60, 40, 30, 20, 15, 10, 5, 2];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          <section className="mb-6">
            <h1 className="text-3xl font-bold text-black">
              Analytics Overview
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Manage your events and deadlines effectively
            </p>
          </section>
          <section className="border-gray-300 border rounded-2xl flex justify-between text-sm text-gray-500 shadow-sm bg-white overflow-hidden">
            <Link
              className="text-gray-600 rounded-tl-2xl rounded-bl-2xl bg-gray-300 py-2 px-4 text-center cursor-pointer"
              to="/analytics"
            >
              Inventory
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/inbound-metrics"
            >
              Inbound Metrics
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/outbound-metrics"
            >
              Outbound Metrics
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/order-metrics"
            >
              Order Metrics
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/storage-metrics"
            >
              Storage Metrics
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/supplier-performance"
            >
              Supplier/Vendor Performance
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/financial-analytics"
            >
              Financial Analytics
            </Link>
          </section>
          <section className="w-full">
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Large chart card */}
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Total Inventory Value
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Current valuation across all warehouses
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      $4,325,720
                    </div>
                    <div className="text-sm text-emerald-600 font-medium mt-1">
                      +4.6%{" "}
                      <span className="text-gray-400 font-normal">
                        vs last month
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 h-[40vh] bg-transparent rounded-md overflow-hidden">
                  <TotalInventoryChart />
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                    Live
                  </span>
                  <span>Updated 2 hours ago</span>
                  <span className="ml-auto">
                    View: <strong className="text-gray-700">Monthly</strong>
                  </span>
                </div>
              </div>

              {/* Right column stacked stat cards */}
              <div className="flex flex-col gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm text-gray-500">Total SKUs</h3>
                    <div className="text-2xl font-bold text-gray-900">
                      1,250
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Active and inactive SKUs combined
                    </div>
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-linear-to-br from-blue-50 to-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm text-gray-500">Active Products</h3>
                    <div className="text-2xl font-bold text-gray-900">980</div>
                    <div className="text-xs text-gray-400 mt-1">
                      Products currently available for sale
                    </div>
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-linear-to-br from-emerald-50 to-emerald-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-800">
                        Stock Health
                      </div>
                      <div className="text-xs text-gray-400">
                        Low-stock SKUs
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-500">72</div>
                      <div className="text-xs text-gray-400">critical</div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-red-400 rounded-full"
                      style={{ width: "18%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 w-full flex gap-x-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm w-1/2">
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="font-semibold text-lg">
                    Inventory Turnover Rate
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Measures how often inventory is sold and replaced over a
                    period of Time.
                  </p>
                </div>
                <div className="flex border-gray-400 border rounded-lg overflow-hidden">
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    Jan - June
                  </button>
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    July - Dec
                  </button>
                </div>
              </div>
              <div className="h-[40vh] mt-4">
                <InventoryTurnoverRateChart />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Live
                </span>
                <span>Updated 15 mins ago</span>
                <span className="ml-auto">
                  View: <strong className="text-gray-700">Quarterly</strong>
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm w-1/2">
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="font-semibold text-lg">
                    Days of Inventory on Hand
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Average number of days to sell current inventory levels
                  </p>
                </div>
                <div className="flex border-gray-400 border rounded-lg overflow-hidden">
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    Jan - June
                  </button>
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    July - Dec
                  </button>
                </div>
              </div>

              <div className="h-[40vh] mt-4">
                <DaysOfInventoryOnHandChart />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Live
                </span>
                <span>Updated 15 mins ago</span>
                <span className="ml-auto">
                  View: <strong className="text-gray-700">Quarterly</strong>
                </span>
              </div>
            </div>
          </section>
          <section className="mt-4 w-full flex gap-x-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-semibold text-lg">Top Moving SKUs</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Number of items currently out of stock
                  </p>
                </div>
              </div>
              <div className="h-[45vh] mt-4 w-full">
                <TopMovingSKUChart
                  labels={paretoLabels}
                  values={paretoValues}
                />
              </div>
            </div>
          </section>
          <section className="mt-4 w-full flex gap-x-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm w-1/2">
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="font-semibold text-lg">Out of Stock Items</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Number of items currently out of stock
                  </p>
                </div>
                <div className="flex border-gray-400 border rounded-lg overflow-hidden">
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    Jan - June
                  </button>
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    July - Dec
                  </button>
                </div>
              </div>
              <div className="h-[40vh] mt-4">
                <OutOfStockItemsChart />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Live
                </span>
                <span>Updated 15 mins ago</span>
                <span className="ml-auto">
                  View: <strong className="text-gray-700">Quarterly</strong>
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm w-1/2">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-semibold text-lg">Overstock Items</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Number of items currently overstocked
                  </p>
                </div>
                <div className="flex border-gray-400 border rounded-lg overflow-hidden">
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    Jan - June
                  </button>
                  <button className="text-gray-700 border-gray-400 px-3 py-1 font-medium hover:bg-gray-300 cursor-pointer transition-all duration-200">
                    July - Dec
                  </button>
                </div>
              </div>
              <div className="h-[40vh] mt-4">
                <OverStockItemsChart />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Live
                </span>
                <span>Updated 15 mins ago</span>
                <span className="ml-auto">
                  View: <strong className="text-gray-700">Quarterly</strong>
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
