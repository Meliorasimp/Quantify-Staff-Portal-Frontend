import { useState } from "react";
import Navbar from "../components/Navbar";

const Shipment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock shipments data
  const shipments = [
    {
      id: "SHP-2024-001",
      trackingNumber: "TRK-9384756201",
      client: "Acme Corporation",
      origin: "New York Warehouse",
      destination: "Los Angeles Distribution Center",
      status: "in-transit",
      priority: "high",
      carrier: "FedEx Express",
      estimatedDelivery: "Dec 2, 2025",
      actualDelivery: null,
      itemCount: 45,
      weight: "850 kg",
      value: 28500,
      shippedDate: "Nov 28, 2025",
      progress: 65,
      currentLocation: "Chicago Hub",
      notes: "Fragile items - Handle with care",
    },
    {
      id: "SHP-2024-002",
      trackingNumber: "TRK-8472639104",
      client: "Global Retail Ltd.",
      origin: "San Francisco Warehouse",
      destination: "Seattle Store #42",
      status: "delivered",
      priority: "medium",
      carrier: "UPS Ground",
      estimatedDelivery: "Nov 29, 2025",
      actualDelivery: "Nov 29, 2025",
      itemCount: 28,
      weight: "520 kg",
      value: 15400,
      shippedDate: "Nov 26, 2025",
      progress: 100,
      currentLocation: "Delivered",
      notes: "Signed by: John Smith",
    },
    {
      id: "SHP-2024-003",
      trackingNumber: "TRK-5629384710",
      client: "TechStart Innovations",
      origin: "Austin Warehouse",
      destination: "Boston Tech Campus",
      status: "pending",
      priority: "urgent",
      carrier: "DHL Express",
      estimatedDelivery: "Dec 1, 2025",
      actualDelivery: null,
      itemCount: 12,
      weight: "180 kg",
      value: 45000,
      shippedDate: null,
      progress: 0,
      currentLocation: "Awaiting Pickup",
      notes: "Rush order - Same day pickup required",
    },
    {
      id: "SHP-2024-004",
      trackingNumber: "TRK-3847562019",
      client: "Manufacturing Pro Inc.",
      origin: "Detroit Factory",
      destination: "Miami Distribution Hub",
      status: "in-transit",
      priority: "medium",
      carrier: "USPS Priority",
      estimatedDelivery: "Dec 3, 2025",
      actualDelivery: null,
      itemCount: 67,
      weight: "1200 kg",
      value: 32100,
      shippedDate: "Nov 27, 2025",
      progress: 45,
      currentLocation: "Atlanta Sorting Facility",
      notes: "Standard delivery",
    },
    {
      id: "SHP-2024-005",
      trackingNumber: "TRK-7283946501",
      client: "Logistics Express Co.",
      origin: "Chicago Central Hub",
      destination: "Denver Regional Center",
      status: "delayed",
      priority: "high",
      carrier: "FedEx Ground",
      estimatedDelivery: "Nov 30, 2025",
      actualDelivery: null,
      itemCount: 89,
      weight: "1450 kg",
      value: 51200,
      shippedDate: "Nov 25, 2025",
      progress: 55,
      currentLocation: "Kansas City - Weather Delay",
      notes: "Delayed due to severe weather conditions",
    },
    {
      id: "SHP-2024-006",
      trackingNumber: "TRK-9102847563",
      client: "Educational Supplies Corp.",
      origin: "Dallas Warehouse",
      destination: "Phoenix School District",
      status: "delivered",
      priority: "low",
      carrier: "UPS Standard",
      estimatedDelivery: "Nov 28, 2025",
      actualDelivery: "Nov 28, 2025",
      itemCount: 34,
      weight: "420 kg",
      value: 8900,
      shippedDate: "Nov 24, 2025",
      progress: 100,
      currentLocation: "Delivered",
      notes: "Left at receiving dock",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700 border-green-300";
      case "in-transit":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "delayed":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-700 border-red-300";
      case "high":
        return "bg-orange-100 text-orange-700 border-orange-300";
      case "medium":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "low":
        return "bg-gray-100 text-gray-700 border-gray-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "in-transit":
        return (
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
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        );
      case "pending":
        return (
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "delayed":
        return (
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        );
      case "cancelled":
        return (
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
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.trackingNumber
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      shipment.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" || shipment.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const totalShipments = shipments.length;
  const inTransit = shipments.filter((s) => s.status === "in-transit").length;
  const delivered = shipments.filter((s) => s.status === "delivered").length;
  const delayed = shipments.filter((s) => s.status === "delayed").length;

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-8">
          {/* Header */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Shipment Tracking</h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Monitor and manage all shipment`s in real-time
                </p>
              </div>
              <button className="px-6 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create Shipment
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="rounded-2xl shadow-lg border-2 border-emerald-300 bg-[rgba(209,250,229,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-700 text-sm font-semibold">
                    Total Shipments
                  </p>
                  <p className="text-3xl font-bold text-emerald-800 mt-2">
                    {totalShipments}
                  </p>
                </div>
                <div className="bg-emerald-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-emerald-700"
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
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(219,234,254,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    In Transit
                  </p>
                  <p className="text-3xl font-bold text-blue-800 mt-2">
                    {inTransit}
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-green-300 bg-[rgba(220,252,231,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-700 text-sm font-semibold">
                    Delivered
                  </p>
                  <p className="text-3xl font-bold text-green-800 mt-2">
                    {delivered}
                  </p>
                </div>
                <div className="bg-green-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-green-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-orange-300 bg-[rgba(254,243,199,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-700 text-sm font-semibold">
                    Delayed
                  </p>
                  <p className="text-3xl font-bold text-orange-800 mt-2">
                    {delayed}
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
              <input
                type="text"
                placeholder="Search by shipment ID, tracking number, client, or destination..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "all"
                    ? "bg-linear-to-r from-emerald-600 to-emerald-700 text-white shadow-lg"
                    : "bg-white border-2 border-emerald-300 text-emerald-700 hover:border-emerald-400"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("in-transit")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "in-transit"
                    ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white border-2 border-blue-300 text-blue-700 hover:border-blue-400"
                }`}
              >
                In Transit ({inTransit})
              </button>
              <button
                onClick={() => setActiveFilter("pending")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "pending"
                    ? "bg-linear-to-r from-yellow-600 to-yellow-700 text-white shadow-lg"
                    : "bg-white border-2 border-yellow-300 text-yellow-700 hover:border-yellow-400"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveFilter("delivered")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "delivered"
                    ? "bg-linear-to-r from-green-600 to-green-700 text-white shadow-lg"
                    : "bg-white border-2 border-green-300 text-green-700 hover:border-green-400"
                }`}
              >
                Delivered ({delivered})
              </button>
              <button
                onClick={() => setActiveFilter("delayed")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "delayed"
                    ? "bg-linear-to-r from-orange-600 to-orange-700 text-white shadow-lg"
                    : "bg-white border-2 border-orange-300 text-orange-700 hover:border-orange-400"
                }`}
              >
                Delayed ({delayed})
              </button>
            </div>
          </div>

          {/* Shipments List */}
          <div className="space-y-4">
            {filteredShipments.length === 0 ? (
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  No Shipments Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              filteredShipments.map((shipment) => (
                <div
                  key={shipment.id}
                  className="rounded-2xl shadow-lg border-2 border-gray-200 bg-white p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shrink-0">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {shipment.id}
                        </h3>
                        <p className="text-sm text-gray-600 font-mono">
                          {shipment.trackingNumber}
                        </p>
                        <p className="text-sm text-gray-700 font-semibold mt-1">
                          {shipment.client}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(
                          shipment.status
                        )}`}
                      >
                        {getStatusIcon(shipment.status)}
                        {shipment.status}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase border ${getPriorityColor(
                          shipment.priority
                        )}`}
                      >
                        {shipment.priority}
                      </span>
                    </div>
                  </div>

                  {/* Route Information */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <p className="text-xs text-gray-500">Origin</p>
                            <p className="text-sm font-semibold text-gray-800">
                              {shipment.origin}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div>
                            <p className="text-xs text-gray-500">Destination</p>
                            <p className="text-sm font-semibold text-gray-800">
                              {shipment.destination}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {shipment.status === "in-transit" && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600 font-semibold">
                            Current Location: {shipment.currentLocation}
                          </span>
                          <span className="text-xs text-gray-600 font-semibold">
                            {shipment.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-linear-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${shipment.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Carrier</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {shipment.carrier}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Shipped Date</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {shipment.shippedDate || "Not shipped"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Est. Delivery</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {shipment.estimatedDelivery}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        {shipment.actualDelivery ? "Actual Delivery" : "Status"}
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        {shipment.actualDelivery || shipment.currentLocation}
                      </p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="bg-blue-50 rounded-lg px-4 py-2">
                      <p className="text-xs text-blue-600 font-semibold">
                        Items
                      </p>
                      <p className="text-lg font-bold text-blue-800">
                        {shipment.itemCount}
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg px-4 py-2">
                      <p className="text-xs text-purple-600 font-semibold">
                        Weight
                      </p>
                      <p className="text-lg font-bold text-purple-800">
                        {shipment.weight}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg px-4 py-2">
                      <p className="text-xs text-green-600 font-semibold">
                        Value
                      </p>
                      <p className="text-lg font-bold text-green-800">
                        ${shipment.value.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Notes */}
                  {shipment.notes && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-xs text-gray-500 mb-1">Notes</p>
                      <p className="text-sm text-gray-700">{shipment.notes}</p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold text-sm">
                      Track Shipment
                    </button>
                    <button className="flex-1 py-2 border-2 border-emerald-300 text-emerald-700 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-all font-semibold text-sm">
                      View Details
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all">
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
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
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

export default Shipment;
