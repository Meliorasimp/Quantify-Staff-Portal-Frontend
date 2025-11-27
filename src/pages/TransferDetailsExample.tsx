import Navbar from "../components/Navbar";

const TransferDetailsExample = () => {
  // Mock transfer data for preview
  const transfer = {
    id: "TRF-001",
    item: "Widget A - Premium Edition",
    sku: "WDG-A-001",
    description:
      "High-quality widget with advanced features and extended warranty",
    category: "Electronics",
    quantity: 100,
    quantityReceived: 98,
    from: "Warehouse 1 - Central Hub",
    fromAddress: "123 Main Street, New York, NY 10001",
    fromBin: "A-15-03",
    to: "Warehouse 2 - Distribution Center",
    toAddress: "456 Commerce Blvd, Los Angeles, CA 90001",
    toBin: "B-08-12",
    status: "in-transit",
    date: "Nov 25, 2025",
    expectedDate: "Nov 28, 2025",
    shippedDate: "Nov 26, 2025",
    deliveredDate: undefined,
    initiatedBy: "John Doe",
    approvedBy: "Jane Smith",
    shippedBy: "Mike Johnson",
    receivedBy: undefined,
    reason: "Stock rebalancing due to high demand in West Coast region",
    priority: "high",
    notes:
      "Handle with care - fragile items. Requires signature upon delivery.",
    trackingNumber: "1Z999AA10123456784",
    totalValue: 15000,
    timeline: [
      { status: "Initiated", date: "Nov 25, 2025 09:00 AM", user: "John Doe" },
      {
        status: "Approved",
        date: "Nov 25, 2025 10:30 AM",
        user: "Jane Smith",
      },
      {
        status: "Shipped",
        date: "Nov 26, 2025 08:15 AM",
        user: "Mike Johnson",
      },
      {
        status: "In Transit",
        date: "Nov 26, 2025 02:00 PM",
        user: "System",
      },
    ],
  };

  const handleBack = () => {
    window.history.back();
  };

  const getStatusColor = (status: string) => {
    if (status === "completed") {
      return "bg-green-100 text-green-700 border-green-300";
    } else if (status === "in-transit") {
      return "bg-blue-100 text-blue-700 border-blue-300";
    } else if (status === "pending") {
      return "bg-orange-100 text-orange-700 border-orange-300";
    } else {
      return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getPriorityColor = (priority?: string) => {
    if (priority === "urgent") {
      return "bg-red-100 text-red-700 border-red-300";
    } else if (priority === "high") {
      return "bg-orange-100 text-orange-700 border-orange-300";
    } else if (priority === "normal") {
      return "bg-blue-100 text-blue-700 border-blue-300";
    } else if (priority === "low") {
      return "bg-gray-100 text-gray-700 border-gray-300";
    } else {
      return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const discrepancy = transfer.quantityReceived
    ? transfer.quantity - transfer.quantityReceived
    : null;

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-8">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors font-semibold"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Transfers
            </button>

            {/* Header */}
            <div className="flex justify-between items-start mb-6 border-b pb-4 border-gray-200">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
                  Transfer Details
                </h1>
                <p className="text-gray-600 mt-2 text-lg">{transfer.id}</p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getStatusColor(
                  transfer.status
                )}`}
              >
                {transfer.status.replace("-", " ").toUpperCase()}
              </span>
            </div>

            {/* Content */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Item Information */}
                  <div className="bg-linear-to-br from-indigo-50 to-purple-50 border rounded-2xl border-indigo-200 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-indigo-600"
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
                      Item Information
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Item Name</p>
                        <p className="font-bold text-gray-800 text-lg">
                          {transfer.item}
                        </p>
                      </div>
                      {transfer.sku && (
                        <div>
                          <p className="text-sm text-gray-600">SKU</p>
                          <p className="font-semibold text-gray-800">
                            {transfer.sku}
                          </p>
                        </div>
                      )}
                      {transfer.description && (
                        <div>
                          <p className="text-sm text-gray-600">Description</p>
                          <p className="text-gray-800">
                            {transfer.description}
                          </p>
                        </div>
                      )}
                      {transfer.category && (
                        <div>
                          <p className="text-sm text-gray-600">Category</p>
                          <p className="font-semibold text-gray-800">
                            {transfer.category}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quantity Details */}
                  <div className="bg-linear-to-br from-blue-50 to-cyan-50 border rounded-2xl border-blue-200 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        />
                      </svg>
                      Quantity Details
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-sm text-gray-600">
                          Quantity Transferred
                        </p>
                        <p className="font-bold text-gray-800 text-2xl">
                          {transfer.quantity}
                        </p>
                      </div>
                      {transfer.quantityReceived !== undefined && (
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <p className="text-sm text-gray-600">
                            Quantity Received
                          </p>
                          <p className="font-bold text-gray-800 text-2xl">
                            {transfer.quantityReceived}
                          </p>
                        </div>
                      )}
                      {discrepancy !== null && discrepancy !== 0 && (
                        <div className="bg-red-50 rounded-xl p-4 shadow-sm border border-red-200 col-span-2">
                          <p className="text-sm text-red-600">Discrepancy</p>
                          <p className="font-bold text-red-700 text-2xl">
                            {discrepancy > 0 ? "+" : ""}
                            {discrepancy}
                          </p>
                        </div>
                      )}
                    </div>
                    {transfer.totalValue && (
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <p className="text-sm text-gray-600">Total Value</p>
                        <p className="font-bold text-green-600 text-2xl">
                          ${transfer.totalValue.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location Information */}
                  <div className="bg-linear-to-br from-purple-50 to-pink-50 border rounded-2xl border-purple-200 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-purple-600"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Locations
                    </h2>
                    <div className="space-y-4">
                      {/* From */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            className="w-5 h-5 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <p className="text-sm font-semibold text-gray-600">
                            From
                          </p>
                        </div>
                        <p className="font-bold text-gray-800 text-lg">
                          {transfer.from}
                        </p>
                        {transfer.fromBin && (
                          <p className="text-sm text-gray-600 mt-1">
                            Bin: {transfer.fromBin}
                          </p>
                        )}
                        {transfer.fromAddress && (
                          <p className="text-sm text-gray-600 mt-1">
                            {transfer.fromAddress}
                          </p>
                        )}
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>

                      {/* To */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            className="w-5 h-5 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <p className="text-sm font-semibold text-gray-600">
                            To
                          </p>
                        </div>
                        <p className="font-bold text-gray-800 text-lg">
                          {transfer.to}
                        </p>
                        {transfer.toBin && (
                          <p className="text-sm text-gray-600 mt-1">
                            Bin: {transfer.toBin}
                          </p>
                        )}
                        {transfer.toAddress && (
                          <p className="text-sm text-gray-600 mt-1">
                            {transfer.toAddress}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Timeline & Dates */}
                  <div className="bg-linear-to-br from-green-50 to-emerald-50 border rounded-2xl border-green-200 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Timeline
                    </h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Initiated</span>
                        <span className="font-semibold text-gray-800">
                          {transfer.date}
                        </span>
                      </div>
                      {transfer.expectedDate && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">
                            Expected Delivery
                          </span>
                          <span className="font-semibold text-gray-800">
                            {transfer.expectedDate}
                          </span>
                        </div>
                      )}
                      {transfer.shippedDate && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Shipped</span>
                          <span className="font-semibold text-gray-800">
                            {transfer.shippedDate}
                          </span>
                        </div>
                      )}
                      {transfer.deliveredDate && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Delivered</span>
                          <span className="font-semibold text-green-600">
                            {transfer.deliveredDate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* People Involved */}
                  <div className="bg-linear-to-br from-amber-50 to-yellow-50 border rounded-2xl border-amber-200 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-amber-600"
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
                      People Involved
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Initiated By</p>
                        <p className="font-semibold text-gray-800">
                          {transfer.initiatedBy}
                        </p>
                      </div>
                      {transfer.approvedBy && (
                        <div>
                          <p className="text-sm text-gray-600">Approved By</p>
                          <p className="font-semibold text-gray-800">
                            {transfer.approvedBy}
                          </p>
                        </div>
                      )}
                      {transfer.shippedBy && (
                        <div>
                          <p className="text-sm text-gray-600">Shipped By</p>
                          <p className="font-semibold text-gray-800">
                            {transfer.shippedBy}
                          </p>
                        </div>
                      )}
                      {transfer.receivedBy && (
                        <div>
                          <p className="text-sm text-gray-600">Received By</p>
                          <p className="font-semibold text-gray-800">
                            {transfer.receivedBy}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="bg-linear-to-br from-gray-50 to-slate-50 border rounded-2xl border-gray-200 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <svg
                        className="w-6 h-6 text-gray-600"
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
                      Additional Details
                    </h2>
                    <div className="space-y-3">
                      {transfer.priority && (
                        <div>
                          <p className="text-sm text-gray-600">Priority</p>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getPriorityColor(
                              transfer.priority
                            )}`}
                          >
                            {transfer.priority.toUpperCase()}
                          </span>
                        </div>
                      )}
                      {transfer.reason && (
                        <div>
                          <p className="text-sm text-gray-600">Reason</p>
                          <p className="text-gray-800">{transfer.reason}</p>
                        </div>
                      )}
                      {transfer.trackingNumber && (
                        <div>
                          <p className="text-sm text-gray-600">
                            Tracking Number
                          </p>
                          <p className="font-mono font-semibold text-gray-800">
                            {transfer.trackingNumber}
                          </p>
                        </div>
                      )}
                      {transfer.notes && (
                        <div>
                          <p className="text-sm text-gray-600">Notes</p>
                          <p className="text-gray-800 bg-white rounded-lg p-3 border border-gray-200">
                            {transfer.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status History */}
                  {transfer.timeline && transfer.timeline.length > 0 && (
                    <div className="bg-linear-to-br from-indigo-50 to-blue-50 border rounded-2xl border-indigo-200 p-6 shadow-sm">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg
                          className="w-6 h-6 text-indigo-600"
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
                        Status History
                      </h2>
                      <div className="space-y-3">
                        {transfer.timeline.map((event, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 bg-white rounded-lg p-3 border border-indigo-100"
                          >
                            <div className="bg-indigo-100 rounded-full p-1 mt-1">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800">
                                {event.status}
                              </p>
                              <p className="text-sm text-gray-600">
                                {event.date}
                              </p>
                              <p className="text-sm text-gray-500">
                                {event.user}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex gap-4">
              <button className="flex-1 py-3 bg-linear-to-r from-indigo-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                Print Transfer Order
              </button>
              {transfer.status !== "completed" && (
                <button className="flex-1 py-3 bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                  Update Status
                </button>
              )}
              <button
                onClick={handleBack}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-semibold"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransferDetailsExample;
