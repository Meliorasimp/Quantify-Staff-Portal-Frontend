import { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSupplierName } from "../../store/InteractionSlice";

const Supplier = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const dispatch = useDispatch();

  // Mock suppliers data
  const suppliers = [
    {
      id: 1,
      name: "TechSupply Co.",
      contactPerson: "John Anderson",
      email: "john@techsupply.com",
      phone: "+1 (555) 123-4567",
      address: "123 Tech Street, Silicon Valley, CA 94025",
      category: "Electronics",
      status: "active",
      rating: 4.8,
      totalOrders: 145,
      activeOrders: 3,
      totalValue: 250000,
      lastOrder: "2 days ago",
      paymentTerms: "Net 30",
      deliveryTime: "3-5 business days",
    },
    {
      id: 2,
      name: "PawNourish Co.",
      contactPerson: "Sarah Mitchell",
      email: "sarah@pawnourish.com",
      phone: "+1 (555) 234-5678",
      address: "456 Industrial Blvd, Detroit, MI 48201",
      category: "Manufacturing",
      status: "active",
      rating: 4.5,
      totalOrders: 89,
      activeOrders: 2,
      totalValue: 180000,
      lastOrder: "1 week ago",
      paymentTerms: "Net 45",
      deliveryTime: "5-7 business days",
    },
    {
      id: 3,
      name: "Food Essentials Ltd.",
      contactPerson: "Michael Chen",
      email: "michael@officeessentials.com",
      phone: "+1 (555) 345-6789",
      address: "789 Commerce Drive, New York, NY 10001",
      category: "Office Supplies",
      status: "active",
      rating: 4.9,
      totalOrders: 203,
      activeOrders: 5,
      totalValue: 95000,
      lastOrder: "Yesterday",
      paymentTerms: "Net 15",
      deliveryTime: "1-3 business days",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-700 border-green-300"
      : "bg-gray-100 text-gray-700 border-gray-300";
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return "text-green-600";
    if (rating >= 4.0) return "text-blue-600";
    return "text-orange-600";
  };

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.contactPerson
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" || supplier.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const activeSuppliers = suppliers.filter((s) => s.status === "active").length;
  const totalOrders = suppliers.reduce((sum, s) => sum + s.totalOrders, 0);
  const totalValue = suppliers.reduce((sum, s) => sum + s.totalValue, 0);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          {/* Header */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Suppliers Management</h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Manage your supplier relationships and orders
                </p>
              </div>
              <button className="px-6 py-3 bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2">
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
                Add New Supplier
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="rounded-2xl shadow-lg border-2 border-purple-300 bg-[rgba(243,232,255,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-700 text-sm font-semibold">
                    Total Suppliers
                  </p>
                  <p className="text-3xl font-bold text-purple-800 mt-2">
                    {suppliers.length}
                  </p>
                </div>
                <div className="bg-purple-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-purple-700"
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
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-green-300 bg-[rgba(220,252,231,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-700 text-sm font-semibold">
                    Active Suppliers
                  </p>
                  <p className="text-3xl font-bold text-green-800 mt-2">
                    {activeSuppliers}
                  </p>
                </div>
                <div className="bg-green-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-green-700"
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

            <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(219,234,254,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    Total Orders
                  </p>
                  <p className="text-3xl font-bold text-blue-800 mt-2">
                    {totalOrders}
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-indigo-300 bg-[rgba(224,231,255,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-700 text-sm font-semibold">
                    Total Value
                  </p>
                  <p className="text-3xl font-bold text-indigo-800 mt-2">
                    ${(totalValue / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="bg-indigo-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-indigo-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                placeholder="Search suppliers by name, contact, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "all"
                    ? "bg-linear-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                    : "bg-white border-2 border-purple-300 text-purple-700 hover:border-purple-400"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("active")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "active"
                    ? "bg-linear-to-r from-green-600 to-green-700 text-white shadow-lg"
                    : "bg-white border-2 border-green-300 text-green-700 hover:border-green-400"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setActiveFilter("inactive")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "inactive"
                    ? "bg-linear-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Inactive
              </button>
            </div>
          </div>

          {/* Suppliers Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredSuppliers.length === 0 ? (
              <div className="col-span-2 rounded-2xl shadow-lg border-2 border-gray-300 bg-white p-12 text-center">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-600 mb-2">
                  No Suppliers Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              filteredSuppliers.map((supplier) => (
                <div
                  key={supplier.id}
                  className="rounded-2xl shadow-lg border-2 border-gray-200 bg-white p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md">
                        {supplier.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {supplier.name}
                        </h3>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(
                            supplier.status
                          )}`}
                        >
                          {supplier.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className={`w-5 h-5 ${getRatingColor(supplier.rating)}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span
                        className={`font-bold ${getRatingColor(
                          supplier.rating
                        )}`}
                      >
                        {supplier.rating}
                      </span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
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
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span className="font-semibold">
                        {supplier.contactPerson}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{supplier.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
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
                      <span className="line-clamp-1">{supplier.address}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-purple-600 font-semibold">
                        Total Orders
                      </p>
                      <p className="text-xl font-bold text-purple-800">
                        {supplier.totalOrders}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-blue-600 font-semibold">
                        Active
                      </p>
                      <p className="text-xl font-bold text-blue-800">
                        {supplier.activeOrders}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-green-600 font-semibold">
                        Value
                      </p>
                      <p className="text-xl font-bold text-green-800">
                        ${(supplier.totalValue / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-gray-500">Category</p>
                      <p className="font-semibold text-gray-800">
                        {supplier.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Order</p>
                      <p className="font-semibold text-gray-800">
                        {supplier.lastOrder}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Payment Terms</p>
                      <p className="font-semibold text-gray-800">
                        {supplier.paymentTerms}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Delivery Time</p>
                      <p className="font-semibold text-gray-800">
                        {supplier.deliveryTime}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      className="flex-1 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold text-sm"
                      title="This button is For Redirecting to the Suppliers Website, if they have one"
                    >
                      View Details
                    </button>
                    <Link
                      className="flex-1 text-center py-2 border-2 border-purple-300 text-purple-700 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all font-semibold text-sm"
                      to={`/suppliers/create/${supplier.id}`}
                      onClick={() => dispatch(setSupplierName(supplier.name))}
                    >
                      Create Order
                    </Link>
                    <button
                      className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
                      title="Dummy button for more options like Message, Edit, Delete, etc."
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

export default Supplier;
