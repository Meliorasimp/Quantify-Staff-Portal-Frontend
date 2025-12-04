import Navbar from "../../components/Navbar";
import InboundShipmentsReceived from "../../components/AnalyticsCharts/Inbound-Metrics/InboundShipmentsReceived";
import AverageReceivingTime from "../../components/AnalyticsCharts/Inbound-Metrics/AverageReceivingTime";
import AccuracyOvertime from "../../components/AnalyticsCharts/Inbound-Metrics/AccuracyOvertime";
import { Link } from "react-router-dom";

const InboundMetrics = () => {
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
              className="text-gray-600 rounded-tl-2xl rounded-bl-2xl py-2 px-4 text-center cursor-pointer"
              to="/analytics"
            >
              Inventory
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 bg-gray-300 text-center cursor-pointer transition-all duration-200"
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
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Inbound Shipments Received
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Number of shipments received across all warehouses
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
                  <InboundShipmentsReceived />
                </div>
                <div className="flex">
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm text-gray-500">
                      Total Shipments Received
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                      2,450
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Compared to 2,100 last month
                    </div>
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-linear-to-br from-blue-50 to-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm text-gray-500">
                      Receiving Accuracy Rate
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                      98.7%
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Compared to 97.5% last month
                    </div>
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-linear-to-br from-blue-50 to-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
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
                    Average Receiving Time per Shipment
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Average time taken to receive shipments
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
                <AverageReceivingTime />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Live
                </span>
                <span>Updated 15 mins ago</span>
                <span className="ml-auto">
                  View:{" "}
                  <select
                    name=""
                    id=""
                    className="p-1 rounded-sm text-gray-900 font-semibold"
                  >
                    <option value="monthly" className="rounded-sm border">
                      Monthly
                    </option>
                    <option value="weekly" className="rounded-sm border">
                      Weekly
                    </option>
                    <option value="daily" className="rounded-sm border">
                      Daily
                    </option>
                  </select>
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm w-1/2">
              <div className="flex justify-between items-center ">
                <div>
                  <h1 className="font-semibold text-lg">
                    Receiving Accuracy Overtime
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Accuracy rate of received shipments over time
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
                <AccuracyOvertime />
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Live
                </span>
                <span>Updated 15 mins ago</span>
                <span className="ml-auto">
                  View:{" "}
                  <select
                    name=""
                    id=""
                    className="p-1 rounded-sm text-gray-900 font-semibold"
                  >
                    <option value="monthly" className="rounded-sm border">
                      Monthly
                    </option>
                    <option value="weekly" className="rounded-sm border">
                      Weekly
                    </option>
                    <option value="daily" className="rounded-sm border">
                      Daily
                    </option>
                  </select>
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InboundMetrics;
