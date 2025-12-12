import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import SupplierProduct from "../../components/SupplierProducts/SupplierProduct";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../../types/supplier";
import { Link } from "react-router-dom";
import {
  addPurchaseOrder,
  setDeliveryWarehouse,
  setExpectedDeliveryDate,
  setPurchaseNotes,
  removeItemFromCart,
} from "../../store/PurchaseOrderSlice";
import type { RootState } from "../../store";
import { motion, AnimatePresence } from "framer-motion";

const CreateOrderById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const purchaseOrders = useSelector(
    (state: RootState) => state.purchaseOrders
  );
  console.log("Purchase Orders in CreateOrderById:", purchaseOrders);
  const subtotal =
    purchaseOrders
      .find(
        (order) => order.id === purchaseOrders[purchaseOrders.length - 1]?.id
      )
      ?.items.reduce((total, item) => total + item.price * item.quantity, 0) ||
    0;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  const totalItems =
    purchaseOrders
      .find(
        (order) => order.id === purchaseOrders[purchaseOrders.length - 1]?.id
      )
      ?.items.reduce((count, item) => count + item.quantity, 0) || 0;
  const purchaseOrderId = purchaseOrders[purchaseOrders.length - 1]?.id;
  const totalUnits =
    purchaseOrders.find((order) => order.id === purchaseOrderId)?.items
      .length || 0;
  const orderCreatedRef = useRef(false);

  const TechSupplyCoProducts: Product[] = [
    {
      id: "1",
      name: "Wireless Mouse Pro",
      sku: "TC-001",
      category: "Electronics",
      price: 29.99,
      stock: 2000,
      image: "🖱️",
      description: "Ergonomic wireless mouse with 6 programmable buttons",
      inStock: true,
    },
    {
      id: "2",
      name: "Mechanical Keyboard RGB",
      sku: "TC-002",
      category: "Electronics",
      price: 89.99,
      stock: 1250,
      image: "⌨️",
      description: "RGB mechanical keyboard with cherry MX switches",
      inStock: true,
    },
    {
      id: "3",
      name: "Monitor Stand Adjustable",
      sku: "TC-003",
      category: "Accessories",
      price: 45.5,
      stock: 1500,
      image: "🧑‍🚀",
      description: "Multi-port USB-C hub with HDMI and card readers",
      inStock: true,
    },
  ];

  const PawNourishCoProducts: Product[] = [
    {
      id: "1",
      name: "Pet Nutrition Pack",
      sku: "PN-001",
      category: "Electronics",
      price: 29.99,
      stock: 2000,
      image: "🦴",
      description: "A comprehensive nutrition pack for pets",
      inStock: true,
    },
    {
      id: "2",
      name: "Pedigree Dog Food",
      sku: "PN-002",
      category: "Electronics",
      price: 29.99,
      stock: 2000,
      image: "🐶",
      description: "A High quality dog food for all breeds",
      inStock: true,
    },
    {
      id: "3",
      name: "Whiskers Cat Treats",
      sku: "PN-003",
      category: "Electronics",
      price: 29.99,
      stock: 2000,
      image: "😼",
      description: "Delicious cat treats to keep your feline friend happy",
      inStock: true,
    },
  ];

  const FoodEssentialsLTDProducts: Product[] = [
    {
      id: "1",
      name: "Century Tuna",
      sku: "FE-001",
      category: "Electronics",
      price: 29.99,
      stock: 2000,
      image: "🐟",
      description: "High-quality canned tuna for your pantry",
      inStock: true,
    },
    {
      id: "2",
      name: "Nissin Cup Noodles",
      sku: "FE-002",
      category: "Electronics",
      price: 29.99,
      stock: 2000,
      image: "🍜",
      description: "Instant cup noodles with a savory flavor",
      inStock: true,
    },
  ];

  useEffect(() => {
    if (id && !orderCreatedRef.current) {
      dispatch(
        addPurchaseOrder({
          supplierId: id,
          deliveryWarehouse: "",
          orderDate: new Date().toISOString().split("T")[0],
          expectedDeliveryDate: "",
          totalAmount: 0,
          items: [],
          notes: "",
        })
      );
      orderCreatedRef.current = true;
    }
  }, [dispatch, id]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 relative">
      <Navbar />

      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          <div className="bg-white border-b border-gray-200 mb-6">
            <div className="px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Link
                      to="/suppliers"
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
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">
                      Create Purchase Order
                    </h1>
                  </div>
                  <p className="text-base text-gray-600 ml-9">
                    Browse supplier products and create your purchase order
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium">
                    Cancel
                  </button>
                  <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm">
                    Save as Draft
                  </button>
                  <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed">
                    Create Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            {id === "1" && <SupplierProduct products={TechSupplyCoProducts} />}
            {id === "2" && <SupplierProduct products={PawNourishCoProducts} />}
            {id === "3" && (
              <SupplierProduct products={FoodEssentialsLTDProducts} />
            )}
            <div className="flex flex-col w-1/3 mx-6 space-y-6">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Order Information
                </h2>

                <div className="space-y-4">
                  {/* Supplier Information */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Supplier
                    </h4>
                    <p className="text-blue-800 font-medium">
                      {id === "1" && "TechSupply Co."}
                      {id === "2" && "PawNourish Co."}
                      {id === "3" && "Food Essentials LTD"}
                    </p>
                    <p className="text-xs text-blue-700 mt-1">
                      Supplier ID: #{id}
                    </p>
                  </div>

                  {/* Delivery Warehouse */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Warehouse <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      onChange={(e) =>
                        dispatch(
                          setDeliveryWarehouse({
                            id: purchaseOrderId,
                            deliveryWarehouse: e.target.value,
                          })
                        )
                      }
                    >
                      <option value="">Select warehouse</option>
                      <option value="Main Warehouse">Main Warehouse</option>
                      <option value="North Distribution Center">
                        North Distribution Center
                      </option>
                      <option value="South Storage Facility">
                        South Storage Facility
                      </option>
                      <option value="East Regional Hub">
                        East Regional Hub
                      </option>
                      <option value="West Logistics Center">
                        West Logistics Center
                      </option>
                    </select>
                  </div>

                  {/* Expected Delivery Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Delivery Date{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      onChange={(e) =>
                        dispatch(
                          setExpectedDeliveryDate({
                            id: purchaseOrderId,
                            expectedDeliveryDate: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  {/* Order Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Add special instructions..."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                      onChange={(e) =>
                        dispatch(
                          setPurchaseNotes({
                            id: purchaseOrderId,
                            notes: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              {/* Order Cart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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
                    0 Items
                  </span>
                </h2>
                <div className="max-h-64 overflow-y-auto space-y-3 mb-4">
                  <AnimatePresence mode="popLayout">
                    {purchaseOrders.map(
                      (order) =>
                        order.id === purchaseOrderId &&
                        order.items.map((item) => (
                          <motion.div
                            key={item.productId}
                            initial={{ opacity: 0, y: 1, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{
                              opacity: 0,
                              y: 5,
                              transition: { duration: 0.3, ease: "easeInOut" },
                            }}
                            transition={{ duration: 0.2 }}
                            layout
                            className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                                {item.productImage}
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">
                                  {item.productName}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  SKU: {item.productId}
                                </p>
                                <p className="text-xs text-gray-600">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <span className="text-sm font-semibold text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(
                                    removeItemFromCart({
                                      id: purchaseOrderId,
                                      productId: item.productId,
                                    })
                                  )
                                }
                                className="group flex items-center space-x-1 text-xs py-1.5 px-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300"
                              >
                                <svg
                                  className="w-3 h-3 group-hover:scale-110 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                                <span className="font-medium">Remove</span>
                              </button>
                            </div>
                          </motion.div>
                        ))
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      &#8369;{subtotal}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-medium text-gray-900">
                      &#8369;{tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-blue-600">FREE!</span>
                  </div>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    &#8369;{total.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Items</span>
                    <span className="font-medium text-gray-900">
                      {totalItems}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Units</span>
                    <span className="font-medium text-gray-900">
                      {totalUnits}
                    </span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed">
                  Confirm & Create Order
                </button>
              </div>

              {/* Order Information Section */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateOrderById;
