import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import RevenueOvertime from "../../components/AnalyticsCharts/FinancialAnalytics/RevenueOvertime";
import GoodsSoldOvertime from "../../components/AnalyticsCharts/FinancialAnalytics/GoodsSoldOvertime";
import Profitability from "../../components/AnalyticsCharts/FinancialAnalytics/Profitability";
import CashFlow from "../../components/AnalyticsCharts/FinancialAnalytics/CashFlow";

const FinancialAnalytics = () => {
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
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 text-center cursor-pointer transition-all duration-200"
              to="/analytics/storage-metrics"
            >
              Storage Metrics
            </Link>
            <Link
              className="text-gray-600 hover:bg-gray-300 py-2 px-4 bg-gray-300 cursor-pointer transition-all duration-200"
              to="/analytics/financial-analytics"
            >
              Financial Analytics
            </Link>
          </section>
          <section className="mt-4 w-full flex gap-x-4">
            <div className="w-1/2 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Total Revenue Over Time
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                A line chart representing total revenue trends over the past
              </p>
              <div className="mt-4 h-[40vh]">
                <RevenueOvertime />
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
            <div className="w-1/2 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Cost of goods sold
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                A bar chart showing the breakdown of costs associated with goods
                sold.
              </p>
              <div className="mt-4 h-[40vh]">
                <GoodsSoldOvertime />
              </div>
            </div>
          </section>
          <section className="mt-4 w-full flex gap-x-4">
            <div className="w-1/2 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Profitability Analysis
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                An overview of profit margins and trends over the selected
              </p>
              <div className="mt-4 h-[40vh]">
                <Profitability />
              </div>
            </div>
            <div className="w-1/2 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Cash Flow Overview
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                A summary of cash inflows and outflows over the selected period.
              </p>
              <div className="mt-4 h-[40vh]">
                <CashFlow />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FinancialAnalytics;
