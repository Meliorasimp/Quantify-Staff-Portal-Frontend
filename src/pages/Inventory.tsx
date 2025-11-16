import Navbar from "../components/Navbar";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsInventoryModalOpen } from "../store/InteractionSlice";
import { type RootState } from "../store";
import { useQuery } from "@apollo/client/react";
import GetAllInventoryItems from "../gql/query/inventoryQuery/inventoryQuery.gql";
import {
  type FetchInventoryResponse,
  type SearchCategoryInventoryResponse,
  type SearchInventoryResponse,
  type WarehouseCategoryResponse,
} from "../types/inventory";
import { FormatDate } from "../Utils";
import Search from "../gql/query/inventoryQuery/searchInventoryQuery.gql";
import SearchCategory from "../gql/query/inventoryQuery/searchByCategoryQuery.gql";
import WarehouseCategory from "../gql/query/inventoryQuery/warehouseCategoryQuery.gql";
import {
  setDataSearch,
  setCategorySearch,
  setWarehouseSearch,
} from "../store/InventorySlice";
import useDebounce from "../hooks/useDebounce";

const Inventory = () => {
  const dispatch = useDispatch();
  //Fetch all inventory items
  const {
    data: inventoryData,
    loading: inventoryLoading,
    error: inventoryError,
  } = useQuery<FetchInventoryResponse>(GetAllInventoryItems, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  //Fetch Result from Searching Inventory
  const dataSearch = useSelector((state: RootState) => state.search.dataSearch);
  const categorySearch = useSelector(
    (state: RootState) => state.search.categorySearch
  );
  const warehouseSearch = useSelector(
    (state: RootState) => state.search.warehouseSearch
  );

  // Debounce both search terms to avoid excessive API calls
  const debouncedSearchTerm = useDebounce(dataSearch, 400);
  const debouncedCategorySearch = useDebounce(categorySearch, 300);
  const debouncedWarehouseSearch = useDebounce(warehouseSearch, 300);

  // Inventory Modal State Selector
  const isInventoryModalOpen = useSelector(
    (state: RootState) => state.interaction.isInventoryModalOpen
  );

  //Fetch Search Result from Database based on Search Term
  const { data: searchData } = useQuery<SearchInventoryResponse>(Search, {
    variables: { searchTerm: debouncedSearchTerm },
    skip: !debouncedSearchTerm || debouncedSearchTerm.trim() === "", // Only run when there's a search term
  });

  //Fetch Result from Database based on Warehouse Categories
  const { data: warehouseCategoryData } = useQuery<WarehouseCategoryResponse>(
    WarehouseCategory,
    {
      variables: { warehouseName: debouncedWarehouseSearch },
      skip: !debouncedWarehouseSearch || debouncedWarehouseSearch.trim() === "", // Only run when there's a warehouse selected
    }
  );

  //Fetch Search Result from Database based on Category
  const { data: categoryData } = useQuery<SearchCategoryInventoryResponse>(
    SearchCategory,
    {
      variables: { category: debouncedCategorySearch },
      skip: !debouncedCategorySearch || debouncedCategorySearch.trim() === "", // Only run when there's a category selected
    }
  );

  //Function to Manipulate Inventory Modal State
  const handleAddInventoryClick = () => {
    dispatch(setIsInventoryModalOpen(true));
  };

  // Handle search input change
  const handleDataSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Dispatch action to update search term in Redux store
    dispatch(setDataSearch(e.target.value));
  };

  //Code Splitting for Inventory Modal to improve performance
  const AddInventoryModal = lazy(
    () => import("../components/AddInventoryModal")
  );

  // Format total inventory value in millions
  const formatted =
    (inventoryData?.totalInventoryValue
      ? inventoryData.totalInventoryValue / 1_000_000
      : 0
    ).toFixed(2) + "M";

  // Fetch all warehouse names for the filter dropdown
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-linear-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="min-h-full p-6">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Inventory Management
                </h1>
                <p className="text-gray-600 mt-2">
                  Monitor stock levels, track inventory movements, and manage
                  your products efficiently
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Export
                </button>
                <button
                  onClick={handleAddInventoryClick}
                  className="flex items-center px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Inventory
                </button>
              </div>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Total Inventory Value
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    &#8369;{formatted}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    ↗ +12.5% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
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
            <div className="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-sm border border-blue-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    In Stock Items
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {inventoryData?.inStockItems}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    ↗ Available items
                  </p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-white to-amber-50 rounded-2xl shadow-sm border border-amber-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Low Stock Items
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                    {inventoryData?.lowStockItems}
                  </p>
                  <p className="text-xs text-amber-600 mt-1">
                    ⚠ Requires attention
                  </p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-white to-red-50 rounded-2xl shadow-sm border border-red-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    No Stock Items
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {inventoryData?.outOfStockItems}
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    🚨 Critical shortage
                  </p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-6 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Search inventory items..."
                  value={dataSearch}
                  onChange={handleDataSearch}
                />
              </div>
              {/* Filters and Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <select
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40"
                  value={categorySearch}
                  onChange={(e) => dispatch(setCategorySearch(e.target.value))}
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="clothing">Clothing</option>
                  <option value="toys">Toys</option>
                  <option value="books">Books</option>
                </select>

                <select
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-gray-700 min-w-40"
                  value={warehouseSearch}
                  onChange={(e) => dispatch(setWarehouseSearch(e.target.value))}
                >
                  <option value="">All Warehouses</option>
                  <option value="pluto">Pluto Warehouse</option>
                  <option value="mars">Mars Warehouse</option>
                  <option value="earth">Earth Warehouse</option>
                  <option value="venus">Venus Warehouse</option>
                </select>

                <button
                  className="flex items-center px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-md hover:shadow-lg"
                  onClick={handleAddInventoryClick}
                >
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Add Item
                </button>
              </div>
            </div>
          </div>

          {/* Inventory Table Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Inventory Items
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage your product inventory and stock levels
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-32">
                          Item SKU
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-48">
                          Product Name
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-32">
                          Category
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-40">
                          Warehouse Location
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-36">
                          Quantity in Stock
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-32">
                          Reorder Level
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-32">
                          Unit of Measure
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-32">
                          Cost per Unit
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-32">
                          Total Value
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-36">
                          Last Restocked
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-28">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {inventoryLoading && (
                        <tr>
                          <td colSpan={11} className="px-6 py-12 text-center">
                            <div className="flex flex-col items-center">
                              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                              <p className="text-lg text-gray-600 mt-4">
                                Loading inventory data...
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                      {inventoryError && (
                        <tr>
                          <td colSpan={11} className="px-6 py-12 text-center">
                            <div className="flex flex-col items-center">
                              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                                <svg
                                  className="w-6 h-6 text-red-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <p className="text-lg text-red-600">
                                Error loading inventory data
                              </p>
                              <p className="text-sm text-gray-500 mt-1">
                                Please try refreshing the page
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                      {/* Show filtered results based on search and category filters */}
                      {(() => {
                        // Priority: 1. Search results, 2. Category results, 3. Warehouse results, 4. All inventory
                        let displayItems = [];

                        if (
                          debouncedSearchTerm &&
                          searchData?.itemBySearchTerm
                        ) {
                          displayItems = searchData.itemBySearchTerm;
                        } else if (
                          debouncedCategorySearch &&
                          categoryData?.itemByCategory
                        ) {
                          displayItems = categoryData.itemByCategory;
                        } else if (
                          debouncedWarehouseSearch &&
                          warehouseCategoryData?.itemByWarehouseLocation
                        ) {
                          displayItems =
                            warehouseCategoryData.itemByWarehouseLocation;
                        } else {
                          displayItems = inventoryData?.inventoryItems || [];
                        }
                        return displayItems.map((item, index) => (
                          <tr
                            key={item.id}
                            className={`hover:bg-gray-50 transition-colors duration-150 ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                            }`}
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                {item.itemSKU}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                              {item.productName}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                                {item.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {item.warehouseLocation}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                              <div className="flex items-center">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    item.quantityInStock <= item.reorderLevel
                                      ? "bg-red-100 text-red-800"
                                      : item.quantityInStock <=
                                        item.reorderLevel * 2
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-green-100 text-green-800"
                                  }`}
                                >
                                  {item.quantityInStock}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {item.reorderLevel}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {item.unitOfMeasure}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                              &#8369;{item.costPerUnit?.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900 font-semibold">
                              &#8369;{item.totalValue?.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                              {FormatDate(item.lastRestocked)}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-900 hover:bg-blue-50 p-2 rounded-lg transition-all duration-150">
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
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                  </svg>
                                </button>
                                <button className="text-red-600 hover:text-red-900 hover:bg-red-50 p-2 rounded-lg transition-all duration-150">
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
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {isInventoryModalOpen && (
        <Suspense
          fallback={<div className="inset-0 absolute z-10">Loading...</div>}
        >
          <AddInventoryModal />
        </Suspense>
      )}
    </div>
  );
};

export default Inventory;
