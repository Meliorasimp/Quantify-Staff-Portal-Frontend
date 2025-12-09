import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import SupplierProduct from "../../components/SupplierProducts/SupplierProduct";
import type { Product } from "../../types/supplier";

const CreateOrderById = () => {
  const { id } = useParams();
  console.log("Supplier ID:", id);

  const TechSupplyCoProducts: Product[] = [
    {
      id: "1",
      name: "Wireless Mouse Pro",
      sku: "WM-001",
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
      sku: "KB-002",
      category: "Electronics",
      price: 89.99,
      stock: 1250,
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
      stock: 1500,
      image: "🔌",
      description: "Multi-port USB-C hub with HDMI and card readers",
      inStock: true,
    },
  ];
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          <div className="bg-white border-b border-gray-200 mb-6">
            <div className="px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
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
          {id === "1" && <SupplierProduct products={TechSupplyCoProducts} />}
        </div>
      </main>
    </div>
  );
};

export default CreateOrderById;
