import { useState } from "react";

const StaffPermission = () => {
  const [permissions, setPermissions] = useState({
    viewInventory: true,
    editInventory: true,
    createInventory: false,
    deleteInventory: false,
    viewWarehouses: true,
    editWarehouses: false,
    viewStorageLocations: true,
    editStorageLocations: false,
    createOrders: true,
    approveOrders: false,
    viewOrders: true,
    editOrders: true,
    manageStockMovements: true,
    createTransfers: true,
    approveTransfers: false,
    viewClients: true,
    editClients: true,
    createClients: false,
    viewSuppliers: true,
    editSuppliers: true,
    createSuppliers: false,
    viewAnalytics: true,
    exportReports: true,
    viewAuditLogs: false,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-full h-[70vh] overflow-y-auto pr-6">
      <div className="mb-6">
        <h1 className="font-semibold text-gray-900 text-xl">
          Staff Role Permissions
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Staff members can perform day-to-day operations with limited
          administrative access
        </p>
      </div>

      {/* Inventory Permissions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 text-base mb-3 flex items-center">
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
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          Inventory Management
        </h3>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Inventory
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access and browse all inventory items, view stock levels, and
              check item details across warehouses.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewInventory}
              onChange={() => togglePermission("viewInventory")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Edit Inventory
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Update inventory details, modify stock quantities, adjust prices,
              and edit item specifications.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.editInventory}
              onChange={() => togglePermission("editInventory")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Create Inventory Items
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Add new products to the inventory system with full details
              including SKU, pricing, and specifications.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.createInventory}
              onChange={() => togglePermission("createInventory")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Delete Inventory Items
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Remove inventory items from the system permanently. This action
              requires careful consideration.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.deleteInventory}
              onChange={() => togglePermission("deleteInventory")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>

      {/* Warehouse & Storage Permissions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 text-base mb-3 flex items-center">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Warehouse & Storage
        </h3>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Warehouses
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access warehouse information including locations, capacities, and
              assigned inventory across facilities.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewWarehouses}
              onChange={() => togglePermission("viewWarehouses")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Edit Warehouses
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Modify warehouse details, update contact information, and adjust
              warehouse configurations.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.editWarehouses}
              onChange={() => togglePermission("editWarehouses")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Storage Locations
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Browse all storage locations within warehouses including bins,
              racks, and specific placement zones.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewStorageLocations}
              onChange={() => togglePermission("viewStorageLocations")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Edit Storage Locations
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Modify storage location details, reassign inventory, and update
              location configurations.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.editStorageLocations}
              onChange={() => togglePermission("editStorageLocations")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>

      {/* Orders & Movements Permissions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 text-base mb-3 flex items-center">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Orders & Stock Movements
        </h3>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">View Orders</h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access purchase orders and sales orders, view order history, and
              track order statuses.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewOrders}
              onChange={() => togglePermission("viewOrders")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Create Orders
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Generate new purchase orders and sales orders with item selections
              and quantities.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.createOrders}
              onChange={() => togglePermission("createOrders")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">Edit Orders</h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Modify existing orders, update quantities, change delivery dates,
              and adjust order details.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.editOrders}
              onChange={() => togglePermission("editOrders")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Approve Orders
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Review and approve pending orders before they are processed and
              fulfilled.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.approveOrders}
              onChange={() => togglePermission("approveOrders")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Manage Stock Movements
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Record and track inventory movements including receiving, picking,
              packing, and shipping activities.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.manageStockMovements}
              onChange={() => togglePermission("manageStockMovements")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Create Transfers
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Initiate inventory transfers between warehouses or storage
              locations within the organization.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.createTransfers}
              onChange={() => togglePermission("createTransfers")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Approve Transfers
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Review and authorize inventory transfer requests before execution
              and shipment.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.approveTransfers}
              onChange={() => togglePermission("approveTransfers")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>

      {/* Clients & Suppliers Permissions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 text-base mb-3 flex items-center">
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Clients & Suppliers
        </h3>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Clients
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access client information including contact details, order
              history, and account status.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewClients}
              onChange={() => togglePermission("viewClients")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Edit Clients
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Update client information, modify contact details, and adjust
              account settings.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.editClients}
              onChange={() => togglePermission("editClients")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Create Clients
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Add new clients to the system with complete profile information
              and account details.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.createClients}
              onChange={() => togglePermission("createClients")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Suppliers
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access supplier information including contact details, product
              catalogs, and purchase history.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewSuppliers}
              onChange={() => togglePermission("viewSuppliers")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Edit Suppliers
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Modify supplier information, update contact details, and adjust
              supplier terms.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.editSuppliers}
              onChange={() => togglePermission("editSuppliers")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Create Suppliers
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Add new suppliers to the system with complete profile and contract
              information.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.createSuppliers}
              onChange={() => togglePermission("createSuppliers")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>

      {/* Reports & Analytics Permissions */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-800 text-base mb-3 flex items-center">
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
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Reports & Analytics
        </h3>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Analytics
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access dashboards and reports showing inventory performance,
              trends, and key metrics.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewAnalytics}
              onChange={() => togglePermission("viewAnalytics")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              Export Reports
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Download and export reports in various formats (PDF, Excel, CSV)
              for external use.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.exportReports}
              onChange={() => togglePermission("exportReports")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>

        <div className="flex items-start justify-between py-4 border-b border-gray-200">
          <div className="flex-1">
            <h2 className="font-medium text-gray-900 text-base">
              View Audit Logs
            </h2>
            <p className="text-sm text-gray-600 mt-1 max-w-3xl">
              Access system audit logs to review user activities and track
              changes made to inventory data.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={permissions.viewAuditLogs}
              onChange={() => togglePermission("viewAuditLogs")}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default StaffPermission;
