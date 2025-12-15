import Navbar from "../../components/Navbar";
import Line from "../../components/Chart/LineChart";
import { Link } from "react-router-dom";
import FetchDeliveredOrders from "../../gql/query/purchaseOrderQuery/allDeliveredOrderQuery.gql";
import FetchAuditLogs from "../../gql/query/purchaseOrderQuery/purchaseOrderAuditLogQuery.gql";
import type {
  AllDeliveredPurchasedOrdersResponseType,
  PurchaseOrderAuditLogResponseType,
} from "../../types/purchaseorder";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { FormatDate } from "../../Utils";
import { setPurchaseId } from "../../store/InteractionSlice";
import { TimeAgo } from "../../Utils";
const PurchaseOrder = () => {
  //Fetch All Delivered Purchase Orders
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: deliveredOrderData } =
    useQuery<AllDeliveredPurchasedOrdersResponseType>(FetchDeliveredOrders, {
      fetchPolicy: "network-only",
    });
  const { data: auditLogData } = useQuery<PurchaseOrderAuditLogResponseType>(
    FetchAuditLogs,
    {
      fetchPolicy: "network-only",
    }
  );
  console.log("Purchase Order Audit Logs Data:", auditLogData);
  const handleDynamicClick = (id: string) => {
    navigate(`/purchaseorders/${id}`);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="min-h-full p-6">
          {/* Page Header */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Purchase Orders
                </h1>
                <p className="text-gray-600 mt-2">
                  Track and manage purchase orders across your suppliers and
                  vendors
                </p>
              </div>
              <div>
                <Link
                  className="flex items-center px-4 py-2 bg-linear-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  to="/purchaseorders/all"
                >
                  View Pending Purchase Orders
                </Link>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium mb-1">
                    Total Purchase Orders
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
                    Total Purchase Amount
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
                  <p className="text-sm font-medium mb-1">Pending Approval</p>
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
          </section>
          <section className="flex gap-x-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 w-2/3">
              <div className="flex flex-col items-center justify-between mb-6">
                <div className="flex justify-between w-full">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Monthly Purchases Amount Chart
                  </h3>
                  <div className="flex items-center space-x-2">
                    <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-lime-500">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>
                </div>
                <div className="w-full h-[250px] md:h-[350px]">
                  <div className="flex items-center justify-center w-full h-full">
                    <Line />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 w-1/3 ml-2">
              <div className="px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Purchase Orders
                </h2>
              </div>
              {auditLogData?.purchaseOrderAuditLogs.map((log) => (
                <div className="px-6 flex flex-col gap-y-2" key={log.id}>
                  <div className="flex items-center gap-x-4 mb-4">
                    <div className="bg-green-400 p-2 rounded-2xl text-white">
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
                          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {log.action === "Create" ? "Purchased" : log.action}{" "}
                        {log.totalUnits} units from {log.supplierName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {TimeAgo(log.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-4">
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
                    placeholder="Search Purchase Orders..."
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40">
                    <option value="">All Warehouses</option>
                    <option value="pluto">Pluto Warehouse</option>
                    <option value="mars">Mars Warehouse</option>
                    <option value="earth">Earth Warehouse</option>
                    <option value="venus">Venus Warehouse</option>
                  </select>
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-start justify-between gap-x-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden w-full">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  General Purchase Info
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Quick overview of recent Approved purchase orders.
                </p>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider min-w-32">
                            Purchase Order
                          </th>
                          <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider min-w-40">
                            Order Date
                          </th>
                          <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider min-w-40">
                            Supplier
                          </th>
                          <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider min-w-40">
                            Staff Member
                          </th>
                          <th className="px-6 py-4 text-left text-xs text-black font-medium uppercase tracking-wider min-w-40">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {deliveredOrderData?.allDeliveredPurchasedOrders.map(
                          (order) => (
                            <tr key={order.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                PO-{order.purchaseOrderNumber}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {FormatDate(order.orderDate)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {order.supplierName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {order.staffResponsible}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <button
                                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-200 cursor-pointer"
                                  onClick={() => {
                                    handleDynamicClick(
                                      order.purchaseOrderNumber.toString()
                                    );
                                    dispatch(setPurchaseId(order.id));
                                  }}
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PurchaseOrder;
