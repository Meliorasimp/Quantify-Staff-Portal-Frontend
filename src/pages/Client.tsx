import { useState } from "react";
import Navbar from "../components/Navbar";

const Client = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock clients data
  const clients = [
    {
      id: 1,
      name: "Acme Corporation",
      contactPerson: "Robert Williams",
      email: "robert@acmecorp.com",
      phone: "+1 (555) 111-2222",
      address: "100 Business Plaza, New York, NY 10005",
      industry: "Technology",
      status: "active",
      tier: "premium",
      totalOrders: 234,
      activeOrders: 8,
      totalRevenue: 450000,
      lastOrder: "Today",
      creditLimit: 100000,
      paymentStatus: "Good",
      accountAge: "3 years",
    },
    {
      id: 2,
      name: "Global Retail Ltd.",
      contactPerson: "Amanda Chen",
      email: "amanda@globalretail.com",
      phone: "+1 (555) 222-3333",
      address: "250 Commerce Street, Los Angeles, CA 90012",
      industry: "Retail",
      status: "active",
      tier: "standard",
      totalOrders: 156,
      activeOrders: 4,
      totalRevenue: 280000,
      lastOrder: "2 days ago",
      creditLimit: 50000,
      paymentStatus: "Good",
      accountAge: "2 years",
    },
    {
      id: 3,
      name: "TechStart Innovations",
      contactPerson: "James Martinez",
      email: "james@techstart.io",
      phone: "+1 (555) 333-4444",
      address: "789 Innovation Drive, San Francisco, CA 94102",
      industry: "Technology",
      status: "active",
      tier: "premium",
      totalOrders: 189,
      activeOrders: 6,
      totalRevenue: 385000,
      lastOrder: "Yesterday",
      creditLimit: 80000,
      paymentStatus: "Excellent",
      accountAge: "1.5 years",
    },
    {
      id: 4,
      name: "Manufacturing Pro Inc.",
      contactPerson: "Linda Johnson",
      email: "linda@manufacturingpro.com",
      phone: "+1 (555) 444-5555",
      address: "456 Industrial Way, Detroit, MI 48226",
      industry: "Manufacturing",
      status: "active",
      tier: "standard",
      totalOrders: 98,
      activeOrders: 2,
      totalRevenue: 175000,
      lastOrder: "1 week ago",
      creditLimit: 40000,
      paymentStatus: "Good",
      accountAge: "2.5 years",
    },
    {
      id: 5,
      name: "Healthcare Solutions Group",
      contactPerson: "Dr. Michael Brown",
      email: "michael@healthcaresolutions.com",
      phone: "+1 (555) 555-6666",
      address: "321 Medical Center Blvd, Boston, MA 02115",
      industry: "Healthcare",
      status: "inactive",
      tier: "basic",
      totalOrders: 45,
      activeOrders: 0,
      totalRevenue: 95000,
      lastOrder: "3 months ago",
      creditLimit: 20000,
      paymentStatus: "Fair",
      accountAge: "1 year",
    },
    {
      id: 6,
      name: "Logistics Express Co.",
      contactPerson: "Sarah Davis",
      email: "sarah@logisticsexpress.com",
      phone: "+1 (555) 666-7777",
      address: "555 Transport Ave, Chicago, IL 60607",
      industry: "Logistics",
      status: "active",
      tier: "premium",
      totalOrders: 312,
      activeOrders: 12,
      totalRevenue: 520000,
      lastOrder: "Today",
      creditLimit: 120000,
      paymentStatus: "Excellent",
      accountAge: "4 years",
    },
    {
      id: 7,
      name: "Educational Supplies Corp.",
      contactPerson: "Patricia Wilson",
      email: "patricia@edusupplies.com",
      phone: "+1 (555) 777-8888",
      address: "888 Learning Lane, Austin, TX 78701",
      industry: "Education",
      status: "active",
      tier: "standard",
      totalOrders: 127,
      activeOrders: 3,
      totalRevenue: 210000,
      lastOrder: "3 days ago",
      creditLimit: 45000,
      paymentStatus: "Good",
      accountAge: "1.8 years",
    },
    {
      id: 8,
      name: "Food Distribution Network",
      contactPerson: "Carlos Rodriguez",
      email: "carlos@fooddistribution.com",
      phone: "+1 (555) 888-9999",
      address: "777 Food Court, Miami, FL 33101",
      industry: "Food & Beverage",
      status: "active",
      tier: "standard",
      totalOrders: 201,
      activeOrders: 7,
      totalRevenue: 340000,
      lastOrder: "Yesterday",
      creditLimit: 60000,
      paymentStatus: "Good",
      accountAge: "2.2 years",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-700 border-green-300"
      : "bg-gray-100 text-gray-700 border-gray-300";
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "premium":
        return "bg-purple-100 text-purple-700 border-purple-300";
      case "standard":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "basic":
        return "bg-gray-100 text-gray-700 border-gray-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Excellent":
        return "text-green-600";
      case "Good":
        return "text-blue-600";
      case "Fair":
        return "text-orange-600";
      case "Poor":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "premium" && client.tier === "premium") ||
      (activeFilter === "active" && client.status === "active") ||
      (activeFilter === "inactive" && client.status === "inactive");

    return matchesSearch && matchesFilter;
  });

  const activeClients = clients.filter((c) => c.status === "active").length;
  const premiumClients = clients.filter((c) => c.tier === "premium").length;
  const totalOrders = clients.reduce((sum, c) => sum + c.totalOrders, 0);
  const totalRevenue = clients.reduce((sum, c) => sum + c.totalRevenue, 0);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-white to-gray-100">
        <div className="min-h-full p-6">
          {/* Header */}
          <section className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Clients Management</h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Manage your client relationships and sales orders
                </p>
              </div>
              <button className="px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg flex items-center gap-2">
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
                Add New Client
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="rounded-2xl shadow-lg border-2 border-blue-300 bg-[rgba(219,234,254,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 text-sm font-semibold">
                    Total Clients
                  </p>
                  <p className="text-3xl font-bold text-blue-800 mt-2">
                    {clients.length}
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-green-300 bg-[rgba(220,252,231,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-700 text-sm font-semibold">
                    Active Clients
                  </p>
                  <p className="text-3xl font-bold text-green-800 mt-2">
                    {activeClients}
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

            <div className="rounded-2xl shadow-lg border-2 border-purple-300 bg-[rgba(243,232,255,0.6)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-700 text-sm font-semibold">
                    Total Orders
                  </p>
                  <p className="text-3xl font-bold text-purple-800 mt-2">
                    {totalOrders}
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="rounded-2xl shadow-lg border-2 border-cyan-300 bg-[rgba(207,250,254,0.7)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-700 text-sm font-semibold">
                    Total Revenue
                  </p>
                  <p className="text-3xl font-bold text-cyan-800 mt-2">
                    ${(totalRevenue / 1000).toFixed(0)}K
                  </p>
                </div>
                <div className="bg-cyan-200 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-cyan-700"
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
                placeholder="Search clients by name, contact, or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "all"
                    ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white border-2 border-blue-300 text-blue-700 hover:border-blue-400"
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
                onClick={() => setActiveFilter("premium")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeFilter === "premium"
                    ? "bg-linear-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                    : "bg-white border-2 border-purple-300 text-purple-700 hover:border-purple-400"
                }`}
              >
                Premium ({premiumClients})
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

          {/* Clients Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredClients.length === 0 ? (
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
                  No Clients Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="rounded-2xl shadow-lg border-2 border-gray-200 bg-white p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-md">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {client.name}
                        </h3>
                        <div className="flex gap-2">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(
                              client.status
                            )}`}
                          >
                            {client.status}
                          </span>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase border ${getTierColor(
                              client.tier
                            )}`}
                          >
                            {client.tier}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className={`w-5 h-5 ${getPaymentStatusColor(
                          client.paymentStatus
                        )}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm font-semibold ${getPaymentStatusColor(
                          client.paymentStatus
                        )}`}
                      >
                        {client.paymentStatus}
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
                        {client.contactPerson}
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
                      <span>{client.email}</span>
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
                      <span>{client.phone}</span>
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
                      <span className="line-clamp-1">{client.address}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-blue-600 font-semibold">
                        Total Orders
                      </p>
                      <p className="text-xl font-bold text-blue-800">
                        {client.totalOrders}
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-purple-600 font-semibold">
                        Active
                      </p>
                      <p className="text-xl font-bold text-purple-800">
                        {client.activeOrders}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <p className="text-xs text-green-600 font-semibold">
                        Revenue
                      </p>
                      <p className="text-xl font-bold text-green-800">
                        ${(client.totalRevenue / 1000).toFixed(0)}K
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <p className="text-gray-500">Industry</p>
                      <p className="font-semibold text-gray-800">
                        {client.industry}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Order</p>
                      <p className="font-semibold text-gray-800">
                        {client.lastOrder}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Credit Limit</p>
                      <p className="font-semibold text-gray-800">
                        ${(client.creditLimit / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Account Age</p>
                      <p className="font-semibold text-gray-800">
                        {client.accountAge}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold text-sm">
                      View Details
                    </button>
                    <button className="flex-1 py-2 border-2 border-blue-300 text-blue-700 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all font-semibold text-sm">
                      Create Order
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

export default Client;
