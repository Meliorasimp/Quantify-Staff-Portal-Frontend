import { useState } from "react";
import Navbar from "../components/Navbar";

const Alert = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock alerts data
  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Low Stock Alert",
      message:
        "Wireless Mouse (WM-001) stock level has dropped below minimum threshold",
      timestamp: "2 minutes ago",
      location: "Warehouse 1 - Central Hub",
      itemName: "Wireless Mouse",
      currentStock: 5,
      minThreshold: 20,
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Pending Transfer",
      message: "Transfer TRF-045 has been pending approval for 3 days",
      timestamp: "1 hour ago",
      location: "Warehouse 2 - Distribution Center",
      transferId: "TRF-045",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "Shipment Arrived",
      message: "Purchase Order PO-123 has been delivered successfully",
      timestamp: "3 hours ago",
      location: "Warehouse 1 - Central Hub",
      orderId: "PO-123",
      read: true,
    },
    {
      id: 4,
      type: "critical",
      title: "Stock Discrepancy",
      message: "Inventory count mismatch detected for Keyboard (KB-003)",
      timestamp: "5 hours ago",
      location: "Warehouse 3 - Regional Hub",
      itemName: "Keyboard",
      expectedQty: 150,
      actualQty: 142,
      read: false,
    },
    {
      id: 5,
      type: "warning",
      title: "Expired Items",
      message: "12 items are approaching expiration date within 7 days",
      timestamp: "1 day ago",
      location: "Multiple Warehouses",
      itemCount: 12,
      read: true,
    },
    {
      id: 6,
      type: "info",
      title: "Order Completed",
      message: "Sales Order SO-789 has been fulfilled and shipped",
      timestamp: "1 day ago",
      location: "Warehouse 2 - Distribution Center",
      orderId: "SO-789",
      read: true,
    },
    {
      id: 7,
      type: "critical",
      title: "System Error",
      message: "Failed to sync inventory data with external system",
      timestamp: "2 days ago",
      location: "System",
      read: false,
    },
    {
      id: 8,
      type: "warning",
      title: "High Demand Alert",
      message: "Gaming Laptop (GL-001) experiencing unusually high demand",
      timestamp: "2 days ago",
      location: "Warehouse 1 - Central Hub",
      itemName: "Gaming Laptop",
      read: true,
    },
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
      case "warning":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "info":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-100 border-red-300 text-red-800";
      case "warning":
        return "bg-orange-100 border-orange-300 text-orange-800";
      case "info":
        return "bg-blue-100 border-blue-300 text-blue-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  const getAlertBadgeColor = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-orange-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !alert.read;
    return alert.type === activeFilter;
  });

  const unreadCount = alerts.filter((a) => !a.read).length;
  const criticalCount = alerts.filter((a) => a.type === "critical").length;
  const warningCount = alerts.filter((a) => a.type === "warning").length;

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          {/* Header */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold ">Alerts & Notifications</h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Monitor system alerts and inventory notifications
                </p>
              </div>
              <button className="px-6 py-3 bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Mark All as Read
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="rounded-2xl shadow-lg border-2 border-gray-300 bg-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-semibold">
                    Total Alerts
                  </p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">
                    {alerts.length}
                  </p>
                </div>
                <div className="bg-gray-100 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(219,234,254,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 text-sm font-semibold">Unread</p>
                  <p className="text-3xl font-bold text-blue-800 mt-2">
                    {unreadCount}
                  </p>
                </div>
                <div className="bg-blue-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-red-300 bg-[rgba(254,226,226,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-700 text-sm font-semibold">Critical</p>
                  <p className="text-3xl font-bold text-red-800 mt-2">
                    {criticalCount}
                  </p>
                </div>
                <div className="bg-red-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-red-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-orange-300 bg-[rgba(254,243,199,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-700 text-sm font-semibold">
                    Warnings
                  </p>
                  <p className="text-3xl font-bold text-orange-800 mt-2">
                    {warningCount}
                  </p>
                </div>
                <div className="bg-orange-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-orange-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeFilter === "all"
                  ? "bg-linear-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                  : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              All Alerts
            </button>
            <button
              onClick={() => setActiveFilter("unread")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeFilter === "unread"
                  ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white border-2 border-blue-300 text-blue-700 hover:border-blue-400"
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setActiveFilter("critical")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeFilter === "critical"
                  ? "bg-linear-to-r from-red-600 to-red-700 text-white shadow-lg"
                  : "bg-white border-2 border-red-300 text-red-700 hover:border-red-400"
              }`}
            >
              Critical ({criticalCount})
            </button>
            <button
              onClick={() => setActiveFilter("warning")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeFilter === "warning"
                  ? "bg-linear-to-r from-orange-600 to-orange-700 text-white shadow-lg"
                  : "bg-white border-2 border-orange-300 text-orange-700 hover:border-orange-400"
              }`}
            >
              Warnings ({warningCount})
            </button>
            <button
              onClick={() => setActiveFilter("info")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                activeFilter === "info"
                  ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white border-2 border-blue-300 text-blue-700 hover:border-blue-400"
              }`}
            >
              Info
            </button>
          </div>

          {/* Alerts List */}
          <div className="space-y-4">
            {filteredAlerts.length === 0 ? (
              <div className="rounded-2xl shadow-lg border-2 border-gray-300 bg-white p-12 text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  No Alerts Found
                </h3>
                <p className="text-gray-500">
                  There are no alerts matching your filter criteria
                </p>
              </div>
            ) : (
              filteredAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`rounded-2xl shadow-lg border-2 p-6 transition-all duration-200 hover:shadow-xl ${
                    alert.read
                      ? "bg-white border-gray-200"
                      : "bg-linear-to-r from-white to-gray-50 border-gray-300"
                  }`}
                >
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getAlertColor(
                        alert.type
                      )}`}
                    >
                      {getAlertIcon(alert.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-gray-800">
                            {alert.title}
                          </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getAlertBadgeColor(
                              alert.type
                            )}`}
                          >
                            {alert.type}
                          </span>
                          {!alert.read && (
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {alert.timestamp}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-3">{alert.message}</p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                          </svg>
                          <span className="font-semibold">
                            {alert.location}
                          </span>
                        </div>

                        {alert.itemName && (
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                            <span>Item: {alert.itemName}</span>
                          </div>
                        )}

                        {alert.currentStock !== undefined && (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-red-600">
                              Stock: {alert.currentStock} / Min:{" "}
                              {alert.minThreshold}
                            </span>
                          </div>
                        )}

                        {alert.transferId && (
                          <div className="flex items-center gap-2">
                            <span>Transfer: {alert.transferId}</span>
                          </div>
                        )}

                        {alert.orderId && (
                          <div className="flex items-center gap-2">
                            <span>Order: {alert.orderId}</span>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold text-sm">
                          View Details
                        </button>
                        {!alert.read && (
                          <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all font-semibold text-sm">
                            Mark as Read
                          </button>
                        )}
                        <button className="px-4 py-2 border-2 border-red-300 text-red-700 rounded-lg hover:border-red-400 hover:bg-red-50 transition-all font-semibold text-sm">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Alert;
