import Navbar from "../../components/Navbar";

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
          {/* Header Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-extrabold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Transfer {transfer.id} -{" "}
                  <span
                    className={`font-bold ${
                      transfer.status === "completed"
                        ? "text-green-600"
                        : transfer.status === "in-transit"
                        ? "text-blue-600"
                        : "text-orange-600"
                    }`}
                  >
                    {transfer.status.replace("-", " ").toUpperCase()}
                  </span>
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Transfer initiated on {transfer.date}
                </p>
              </div>
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-semibold"
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
                Back
              </button>
            </div>
          </section>

          {/* Main Content */}
          <div className="flex gap-6">
            {/* Left Column - Info Cards */}
            <div className="flex flex-col gap-y-6 w-1/3">
              {/* Item Information Card */}
              <div className="rounded-2xl shadow-lg border-2 border-indigo-300 bg-[rgba(224,231,255,0.6)] p-4">
                <div className="h-full flex flex-col gap-y-2">
                  <div className="flex items-center">
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
                    <h1 className="text-xl font-bold p-2">Item Information</h1>
                  </div>
                  <div>
                    <h3 className="font-light">Item Name</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {transfer.item}
                    </p>
                  </div>
                  {transfer.sku && (
                    <div>
                      <h3 className="font-light">SKU</h3>
                      <p className="font-semibold text-gray-700 text-lg">
                        {transfer.sku}
                      </p>
                    </div>
                  )}
                  {transfer.category && (
                    <div>
                      <h3 className="font-light">Category</h3>
                      <p className="font-semibold text-gray-700 text-lg">
                        {transfer.category}
                      </p>
                    </div>
                  )}
                  {transfer.description && (
                    <div>
                      <h3 className="font-light">Description</h3>
                      <p className="text-gray-700">{transfer.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quantity Card */}
              <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(219,234,254,0.7)] p-4">
                <div className="h-full flex flex-col gap-y-2">
                  <div className="flex items-center">
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
                    <h1 className="text-xl font-bold p-2">Quantity Details</h1>
                  </div>
                  <div>
                    <h3 className="font-light">Quantity Transferred</h3>
                    <p className="font-bold text-gray-800 text-2xl">
                      {transfer.quantity}
                    </p>
                  </div>
                  {transfer.quantityReceived !== undefined && (
                    <div>
                      <h3 className="font-light">Quantity Received</h3>
                      <p className="font-bold text-gray-800 text-2xl">
                        {transfer.quantityReceived}
                      </p>
                    </div>
                  )}
                  {discrepancy !== null && discrepancy !== 0 && (
                    <div className="bg-red-50 rounded-xl p-3 border border-red-200">
                      <h3 className="font-light text-red-600">Discrepancy</h3>
                      <p className="font-bold text-red-700 text-2xl">
                        {discrepancy > 0 ? "+" : ""}
                        {discrepancy}
                      </p>
                    </div>
                  )}
                  {transfer.totalValue && (
                    <div className="pt-2 border-t border-blue-200">
                      <h3 className="font-light">Total Value</h3>
                      <p className="font-bold text-green-600 text-2xl">
                        ${transfer.totalValue.toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline Card */}
              <div className="rounded-2xl shadow-lg border-2 border-green-300 bg-[rgba(220,252,231,0.7)] p-4">
                <div className="h-full flex flex-col gap-y-2">
                  <div className="flex items-center">
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
                    <h1 className="text-xl font-bold p-2">Timeline</h1>
                  </div>
                  <div>
                    <h3 className="font-light">Initiated</h3>
                    <p className="font-semibold text-gray-700 text-lg">
                      {transfer.date}
                    </p>
                  </div>
                  {transfer.expectedDate && (
                    <div>
                      <h3 className="font-light">Expected Delivery</h3>
                      <p className="font-semibold text-gray-700 text-lg">
                        {transfer.expectedDate}
                      </p>
                    </div>
                  )}
                  {transfer.shippedDate && (
                    <div>
                      <h3 className="font-light">Shipped</h3>
                      <p className="font-semibold text-gray-700 text-lg">
                        {transfer.shippedDate}
                      </p>
                    </div>
                  )}
                  {transfer.deliveredDate && (
                    <div>
                      <h3 className="font-light">Delivered</h3>
                      <p className="font-semibold text-green-600 text-lg">
                        {transfer.deliveredDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Location and Details */}
            <div className="flex flex-col gap-y-6 w-2/3">
              {/* Locations Card */}
              <div className="rounded-2xl shadow-lg border-2 border-purple-300 bg-[rgba(243,232,255,0.6)] p-4">
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center">
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
                    <h1 className="text-xl font-bold p-2">Transfer Route</h1>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* From Location */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-200">
                      <div className="flex items-center gap-2 mb-3">
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
                        <h3 className="font-semibold text-gray-600">From</h3>
                      </div>
                      <p className="font-bold text-gray-800 text-lg mb-2">
                        {transfer.from}
                      </p>
                      {transfer.fromBin && (
                        <p className="text-sm text-gray-600 mb-1">
                          Bin:{" "}
                          <span className="font-semibold">
                            {transfer.fromBin}
                          </span>
                        </p>
                      )}
                      {transfer.fromAddress && (
                        <p className="text-sm text-gray-600">
                          {transfer.fromAddress}
                        </p>
                      )}
                    </div>

                    {/* To Location */}
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-200">
                      <div className="flex items-center gap-2 mb-3">
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
                        <h3 className="font-semibold text-gray-600">To</h3>
                      </div>
                      <p className="font-bold text-gray-800 text-lg mb-2">
                        {transfer.to}
                      </p>
                      {transfer.toBin && (
                        <p className="text-sm text-gray-600 mb-1">
                          Bin:{" "}
                          <span className="font-semibold">
                            {transfer.toBin}
                          </span>
                        </p>
                      )}
                      {transfer.toAddress && (
                        <p className="text-sm text-gray-600">
                          {transfer.toAddress}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* People and Additional Details */}
              <div className="grid grid-cols-2 gap-6">
                {/* People Involved Card */}
                <div className="rounded-2xl shadow-lg border-2 border-amber-300 bg-[rgba(254,243,199,0.6)] p-4">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center">
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
                      <h1 className="text-xl font-bold p-2">People Involved</h1>
                    </div>
                    <div>
                      <h3 className="font-light">Initiated By</h3>
                      <p className="font-semibold text-gray-700 text-lg">
                        {transfer.initiatedBy}
                      </p>
                    </div>
                    {transfer.approvedBy && (
                      <div>
                        <h3 className="font-light">Approved By</h3>
                        <p className="font-semibold text-gray-700 text-lg">
                          {transfer.approvedBy}
                        </p>
                      </div>
                    )}
                    {transfer.shippedBy && (
                      <div>
                        <h3 className="font-light">Shipped By</h3>
                        <p className="font-semibold text-gray-700 text-lg">
                          {transfer.shippedBy}
                        </p>
                      </div>
                    )}
                    {transfer.receivedBy && (
                      <div>
                        <h3 className="font-light">Received By</h3>
                        <p className="font-semibold text-gray-700 text-lg">
                          {transfer.receivedBy}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Details Card */}
                <div className="rounded-2xl shadow-lg border-2 border-gray-300 bg-[rgba(249,250,251,0.8)] p-4">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center">
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
                      <h1 className="text-xl font-bold p-2">
                        Additional Details
                      </h1>
                    </div>
                    {transfer.priority && (
                      <div>
                        <h3 className="font-light">Priority</h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getPriorityColor(
                            transfer.priority
                          )}`}
                        >
                          {transfer.priority.toUpperCase()}
                        </span>
                      </div>
                    )}
                    {transfer.trackingNumber && (
                      <div>
                        <h3 className="font-light">Tracking Number</h3>
                        <p className="font-mono font-semibold text-gray-700 text-sm">
                          {transfer.trackingNumber}
                        </p>
                      </div>
                    )}
                    {transfer.reason && (
                      <div>
                        <h3 className="font-light">Reason</h3>
                        <p className="text-gray-700 text-sm">
                          {transfer.reason}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status History Card */}
              {transfer.timeline && transfer.timeline.length > 0 && (
                <div className="rounded-2xl shadow-lg border-2 border-indigo-300 bg-[rgba(224,231,255,0.6)] p-4">
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center">
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
                      <h1 className="text-xl font-bold p-2">Status History</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {transfer.timeline.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-white rounded-lg p-3 border border-indigo-100 shadow-sm"
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
                </div>
              )}

              {/* Notes Card */}
              {transfer.notes && (
                <div className="rounded-2xl shadow-lg border-2 border-yellow-300 bg-[rgba(254,252,232,0.7)] p-4">
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <h1 className="text-xl font-bold p-2">Notes</h1>
                    </div>
                    <p className="text-gray-700 bg-white rounded-lg p-3 border border-yellow-200">
                      {transfer.notes}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-linear-to-r from-indigo-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                  Print Transfer Order
                </button>
                {transfer.status !== "completed" && (
                  <button className="flex-1 py-3 bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg">
                    Update Status
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransferDetailsExample;
