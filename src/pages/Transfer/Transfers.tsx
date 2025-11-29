import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";

const Transfers = () => {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const navigate = useNavigate();
  const handleDynamicClick = (id: string) => {
    navigate(`/transfers/${id}`);
  };

  // Mock transfer data
  const transfers = [
    {
      id: "TRF-001",
      item: "Widget A",
      quantity: 100,
      from: "Warehouse 1",
      to: "Warehouse 2",
      date: "Nov 25, 2025",
      status: "in-transit",
      initiatedBy: "John Doe",
    },
    {
      id: "TRF-002",
      item: "Widget B",
      quantity: 50,
      from: "Warehouse 2",
      to: "Warehouse 3",
      date: "Nov 26, 2025",
      status: "completed",
      initiatedBy: "Jane Smith",
    },
    {
      id: "TRF-003",
      item: "Widget C",
      quantity: 200,
      from: "Warehouse 3",
      to: "Warehouse 1",
      date: "Nov 27, 2025",
      status: "pending",
      initiatedBy: "Mike Johnson",
    },
    {
      id: "TRF-004",
      item: "Widget D",
      quantity: 75,
      from: "Warehouse 1",
      to: "Warehouse 3",
      date: "Nov 27, 2025",
      status: "in-transit",
      initiatedBy: "Sarah Williams",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "in-transit":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "pending":
        return "bg-orange-50 text-orange-700 border-orange-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
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
              d="M5 13l4 4L19 7"
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
      default:
        return null;
    }
  };

  const filteredTransfers =
    filterStatus === "all"
      ? transfers
      : transfers.filter((t) => t.status === filterStatus);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          {/* Header Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="">
                  <h1 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Transfers
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Track and manage inventory transfers across your warehouses
                    and locations
                  </p>
                </h1>
              </div>
            </div>
          </section>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Total Transfers
                  </p>
                  <h3 className="text-3xl font-bold text-gray-800 mt-2">
                    {transfers.length}
                  </h3>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    In Transit
                  </p>
                  <h3 className="text-3xl font-bold text-blue-600 mt-2">
                    {transfers.filter((t) => t.status === "in-transit").length}
                  </h3>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <svg
                    className="w-8 h-8 text-blue-600"
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

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Completed</p>
                  <h3 className="text-3xl font-bold text-green-600 mt-2">
                    {transfers.filter((t) => t.status === "completed").length}
                  </h3>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <svg
                    className="w-8 h-8 text-green-600"
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
                </div>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
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
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white shadow-sm"
                    placeholder="Search transfers by ID, item, or location..."
                  />
                </div>
                <div className="flex gap-2">
                  {["all", "pending", "in-transit", "completed"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                          filterStatus === status
                            ? "bg-indigo-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {status.charAt(0).toUpperCase() +
                          status.slice(1).replace("-", " ")}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Transfers List */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTransfers.map((transfer) => (
              <div
                key={transfer.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {transfer.id}
                    </h3>
                    <p className="text-gray-600 mt-1">{transfer.item}</p>
                  </div>
                  <span
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold border ${getStatusColor(
                      transfer.status
                    )}`}
                  >
                    {getStatusIcon(transfer.status)}
                    {transfer.status.replace("-", " ").toUpperCase()}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg">
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
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">From</p>
                        <p className="font-semibold text-gray-800">
                          {transfer.from}
                        </p>
                      </div>
                    </div>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
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
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">To</p>
                        <p className="font-semibold text-gray-800">
                          {transfer.to}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Quantity</p>
                    <p className="font-bold text-gray-800 text-lg">
                      {transfer.quantity}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-semibold text-gray-800">
                      {transfer.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Initiated By</p>
                    <p className="font-semibold text-gray-800">
                      {transfer.initiatedBy}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleDynamicClick(transfer.id)}
                    className="flex-1 py-2 bg-linear-to-r from-indigo-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
                  >
                    View Details
                  </button>
                  {transfer.status !== "completed" && (
                    <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-semibold">
                      Update
                    </button>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Transfers;
