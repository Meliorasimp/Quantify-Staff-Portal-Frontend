import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SupplierProduct {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  inStock: boolean;
}

interface OrderItem {
  id: string;
  productName: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

const CreateOrder = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Form state
  const [supplier, setSupplier] = useState("");
  const [warehouse, setWarehouse] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [priority, setPriority] = useState("normal");

  // Sample supplier products
  const supplierProducts: SupplierProduct[] = [
    {
      id: "1",
      name: "Wireless Mouse Pro",
      sku: "WM-001",
      category: "Electronics",
      price: 29.99,
      stock: 150,
      image: "🖱️",
      description: "Ergonomic wireless mouse with 6 programmable buttons",
      inStock: true,
    },
    {
      id: "2",
      name: "Mechanical Keyboard RGB",
      sku: "KB-002",
      category: "Electronics",
      price: 89.99,
      stock: 75,
      image: "⌨️",
      description: "RGB mechanical keyboard with cherry MX switches",
      inStock: true,
    },
    {
      id: "3",
      name: "USB-C Hub 7-in-1",
      sku: "HUB-003",
      category: "Accessories",
      price: 45.5,
      stock: 200,
      image: "🔌",
      description: "Multi-port USB-C hub with HDMI and card readers",
      inStock: true,
    },
    {
      id: "4",
      name: "Webcam 4K Pro",
      sku: "WC-004",
      category: "Electronics",
      price: 129.99,
      stock: 50,
      image: "📷",
      description: "Professional 4K webcam with auto-focus",
      inStock: true,
    },
    {
      id: "5",
      name: "Laptop Stand Aluminum",
      sku: "LS-005",
      category: "Accessories",
      price: 39.99,
      stock: 120,
      image: "💻",
      description: "Adjustable aluminum laptop stand",
      inStock: true,
    },
    {
      id: "6",
      name: "Wireless Headphones",
      sku: "WH-006",
      category: "Electronics",
      price: 149.99,
      stock: 0,
      image: "🎧",
      description: "Noise-cancelling wireless headphones",
      inStock: false,
    },
    {
      id: "7",
      name: "External SSD 1TB",
      sku: "SSD-007",
      category: "Storage",
      price: 119.99,
      stock: 85,
      image: "💾",
      description: "High-speed external SSD with USB 3.2",
      inStock: true,
    },
    {
      id: "8",
      name: "Monitor Mount Dual",
      sku: "MM-008",
      category: "Accessories",
      price: 69.99,
      stock: 45,
      image: "🖥️",
      description: "Adjustable dual monitor mount",
      inStock: true,
    },
  ];

  const filteredProducts = supplierProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToOrder = (product: SupplierProduct, quantity: number = 1) => {
    const existingItem = orderItems.find((item) => item.sku === product.sku);

    if (existingItem) {
      setOrderItems(
        orderItems.map((item) =>
          item.sku === product.sku
            ? {
                ...item,
                quantity: item.quantity + quantity,
                total: (item.quantity + quantity) * item.unitPrice,
              }
            : item
        )
      );
    } else {
      const newItem: OrderItem = {
        id: product.id,
        productName: product.name,
        sku: product.sku,
        quantity: quantity,
        unitPrice: product.price,
        total: quantity * product.price,
      };
      setOrderItems([...orderItems, newItem]);
    }
  };

  const removeOrderItem = (id: string) => {
    setOrderItems(orderItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setOrderItems(
      orderItems.map((item) =>
        item.id === id
          ? { ...item, quantity, total: quantity * item.unitPrice }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return orderItems.reduce((sum, item) => sum + item.total, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const categories = [
    "all",
    ...Array.from(new Set(supplierProducts.map((p) => p.category))),
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          {/* Header Section */}
          <div className="bg-white border-b border-gray-200 mb-6">
            <div className="px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <button
                      onClick={() => navigate(-1)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
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
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">
                      Create Purchase Order
                    </h1>
                  </div>
                  <p className="text-base text-gray-600 ml-9">
                    Browse supplier products and create your purchase order
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm">
                    Save as Draft
                  </button>
                  <button
                    disabled={orderItems.length === 0}
                    className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Create Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Section - Product Catalog */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Information Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
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
                    Order Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Supplier <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={supplier}
                        onChange={(e) => setSupplier(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select supplier</option>
                        <option value="supplier1">Tech Supplies Co.</option>
                        <option value="supplier2">
                          Global Electronics Ltd.
                        </option>
                        <option value="supplier3">Office Depot Inc.</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Delivery Warehouse{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={warehouse}
                        onChange={(e) => setWarehouse(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select warehouse</option>
                        <option value="warehouse1">Main Warehouse</option>
                        <option value="warehouse2">
                          North Distribution Center
                        </option>
                        <option value="warehouse3">
                          South Storage Facility
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Delivery Date{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority Level
                      </label>
                      <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Product Catalog */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
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
                      Available Products
                    </h2>

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          placeholder="Search products by name or SKU..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <svg
                          className="absolute left-3 top-3 w-5 h-5 text-gray-400"
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

                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat === "all" ? "All Categories" : cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex gap-4">
                          <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-3xl shrink-0">
                            {product.image}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                              {product.name}
                            </h3>
                            <p className="text-xs text-gray-500 mb-1">
                              SKU: {product.sku}
                            </p>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-lg font-bold text-blue-600">
                                  ${product.price.toFixed(2)}
                                </p>
                                <p className="text-xs text-gray-500">
                                  Stock: {product.stock} units
                                </p>
                              </div>
                              {product.inStock ? (
                                <button
                                  onClick={() => addToOrder(product)}
                                  className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-medium flex items-center space-x-1"
                                >
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
                                      d="M12 4v16m8-8H4"
                                    />
                                  </svg>
                                  <span>Add</span>
                                </button>
                              ) : (
                                <span className="text-xs text-red-500 font-medium">
                                  Out of Stock
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                      <svg
                        className="w-16 h-16 text-gray-400 mx-auto mb-3"
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
                      <p className="text-gray-500">No products found</p>
                      <p className="text-gray-400 text-sm">
                        Try adjusting your search or filters
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Order Cart Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center justify-between">
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Order Cart
                    </span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {orderItems.length}
                    </span>
                  </h2>

                  {/* Cart Items */}
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {orderItems.length === 0 ? (
                      <div className="text-center py-8 text-gray-400">
                        <svg
                          className="w-12 h-12 mx-auto mb-2"
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
                        <p className="text-sm">Your cart is empty</p>
                      </div>
                    ) : (
                      orderItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start space-x-3 pb-3 border-b border-gray-200"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {item.productName}
                            </p>
                            <p className="text-xs text-gray-500">{item.sku}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(
                                    item.id,
                                    parseInt(e.target.value) || 1
                                  )
                                }
                                className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                              <span className="text-xs text-gray-500">×</span>
                              <span className="text-xs text-gray-900">
                                ${item.unitPrice.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-gray-900">
                              ${item.total.toFixed(2)}
                            </p>
                            <button
                              onClick={() => removeOrderItem(item.id)}
                              className="text-red-500 hover:text-red-700 text-xs mt-1"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-900">
                        ${calculateSubtotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax (10%)</span>
                      <span className="font-medium text-gray-900">
                        ${calculateTax().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-gray-900">$0.00</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-bold text-blue-600">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Items</span>
                      <span className="font-medium text-gray-900">
                        {orderItems.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Total Units</span>
                      <span className="font-medium text-gray-900">
                        {orderItems.reduce(
                          (sum, item) => sum + item.quantity,
                          0
                        )}
                      </span>
                    </div>
                  </div>

                  <button
                    disabled={orderItems.length === 0}
                    className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Confirm & Create Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateOrder;
