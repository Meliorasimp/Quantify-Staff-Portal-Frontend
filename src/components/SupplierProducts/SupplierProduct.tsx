import type { Product } from "../../types/supplier";
const SupplierProduct = ({ products }: { products: Product[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-2/3 ml-6">
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
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products by name or SKU..."
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

          <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">All Categories</option>
            <option value="cables">Cables</option>
            <option value="adapters">Adapters</option>
            <option value="storage">Storage Devices</option>
            <option value="power">Power Supplies</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
          {products.map((p) => (
            <div key={p.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-3xl shrink-0">
                  {p.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1">SKU: {p.sku}</p>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-blue-600">
                        P{p.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        Stock: {p.stock} units
                      </p>
                    </div>
                    {p.inStock ? (
                      <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs font-medium flex items-center space-x-1">
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
      </div>
    </div>
  );
};

export default SupplierProduct;
