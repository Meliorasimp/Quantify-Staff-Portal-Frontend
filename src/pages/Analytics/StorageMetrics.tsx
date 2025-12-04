import Navbar from "../../components/Navbar";
import ZoneUtilization from "../../components/AnalyticsCharts/Storage-Metrics/ZoneUtilization";
import WarehouseCapacityUsage from "../../components/AnalyticsCharts/Storage-Metrics/WarehouseCapacityUsage";
import SKUDensityByZone from "../../components/AnalyticsCharts/Storage-Metrics/SKUDensityByZone";
import { Link } from "react-router-dom";

const StorageMetrics = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          <section className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-black">
                Analytics Overview
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Manage your events and deadlines effectively
              </p>
            </div>
            <div>
              <select
                name=""
                id=""
                className="mt-4 ml-4 p-2 text-gray-600 rounded-md border mr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Warehouse</option>
                <option value="">Mars</option>
                <option value="">Pluto</option>
              </select>
            </div>
          </section>
          <section className="border-gray-300 border rounded-2xl flex justify-between text-sm text-gray-500 shadow-sm bg-white overflow-hidden">
            <Link
              className="text-gray-600 rounded-tl-2xl rounded-bl-2xl py-2 px-4 text-center cursor-pointer"
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
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 bg-gray-300 text-center cursor-pointer transition-all duration-200"
              to="/analytics/storage-metrics"
            >
              Storage Metrics
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/financial-analytics"
            >
              Financial Analytics
            </Link>
          </section>
          <section className="w-full">
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Zone / Aisle Utilization
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Storage space usage across different zones and aisles
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-800">2,450</p>
                    <p className="text-sm text-green-500 mt-1">
                      +8.5% since last month
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-[40vh] bg-transparent rounded-md overflow-hidden">
                  <ZoneUtilization />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm text-gray-500">Total Capacity</h3>
                    <div className="text-2xl font-bold text-gray-900 mt-2">
                      25,000 Units
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between w-full">
                  <div className="w-full">
                    <h3 className="text-sm text-gray-500">Used Space</h3>
                    <div className="text-2xl font-bold text-gray-900 mt-2">
                      10,000 Units
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 w-full flex gap-x-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm w-1/3">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Warehouse Capacity Usage
              </h2>
              <div className="h-[40vh] mt-4">
                <WarehouseCapacityUsage />
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm w-2/3">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Storage Cost per SKU
              </h2>
              <div className="h-[40vh] mt-4 w-full">
                <SKUDensityByZone />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default StorageMetrics;
