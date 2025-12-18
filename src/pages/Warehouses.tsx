import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setIsWarehouseModalOpen } from "../store/InteractionSlice";
import type { RootState } from "../store";
import { lazy, Suspense } from "react";
import { useQuery } from "@apollo/client/react";
const Warehouse = lazy(() => import("../components/AddWarehouseModal"));
import {
  type WarehouseNameType,
  type OneWarehouseResponseType,
} from "../types/warehouse";
import getAllWarehouse from "../gql/query/warehouseQuery/warehouseQuery.gql";
import getWarehouse from "../gql/query/warehouseQuery/oneWarehouseQuery.gql";
import { setWareHouse } from "../store/WarehouseSlice";

const Warehouses = () => {
  const dispatch = useDispatch();

  const { isWarehouseModalOpen } = useSelector(
    (state: RootState) => state.interaction
  );

  const warehouseId = useSelector(
    (state: RootState) => state.individualWarehouse.warehouseId
  );

  const {
    data: oneWarehouseData,
    loading: oneWarehouseLoading,
    error: oneWarehouseError,
  } = useQuery<OneWarehouseResponseType>(getWarehouse, {
    variables: { id: warehouseId },
    skip: !warehouseId,
  });

  const { data: warehouseQueryData } =
    useQuery<WarehouseNameType>(getAllWarehouse);

  return (
    <div className="flex h-screen overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full p-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Warehouse Management
                </h1>
                <p className="text-lg text-gray-600">
                  Monitor and manage all your warehouse locations with real-time
                  insights.
                </p>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    className="appearance-none bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
                    onChange={(e) =>
                      dispatch(setWareHouse(Number(e.target.value)))
                    }
                  >
                    <option value="" className="text-gray-400">
                      🏢 Select Warehouse
                    </option>
                    {warehouseQueryData?.allWarehouses.map((w, index) => (
                      <option key={index} value={w.id}>
                        {w.warehouseName}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <button
                  className="bg-linear-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                  onClick={() => dispatch(setIsWarehouseModalOpen(true))}
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Add New Warehouse</span>
                </button>
                <button className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  <span>Update Warehouse</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Total Products
                  </p>
                  {!warehouseId ? (
                    <div className="text-sm text-gray-400 italic py-2">
                      Select a warehouse to view details
                    </div>
                  ) : oneWarehouseLoading ? (
                    <div className="flex items-center space-x-2 py-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      <span className="text-sm text-gray-500">Loading...</span>
                    </div>
                  ) : oneWarehouseError ? (
                    <div className="text-sm text-red-500 py-2">
                      Error loading data
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-3xl font-bold text-gray-900">
                          {oneWarehouseData?.warehouse.totalProducts ?? 0}
                        </p>
                        <span className="text-sm text-green-500 font-normal pt-2">
                          +1 Product this month
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                          color="green"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Active Sectors
                  </p>
                  {!warehouseId ? (
                    <div className="text-sm text-gray-400 italic py-2">
                      Select a warehouse to view details
                    </div>
                  ) : oneWarehouseLoading ? (
                    <div className="flex items-center space-x-2 py-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      <span className="text-sm text-gray-500">Loading...</span>
                    </div>
                  ) : oneWarehouseError ? (
                    <div className="text-sm text-red-500 py-2">
                      Error loading data
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-3xl font-bold text-gray-900">
                          {oneWarehouseData?.warehouse.availableSectors ?? 0}
                        </p>
                        <span className="text-sm text-blue-500 font-normal pt-2">
                          All Systems Operational
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                        <svg
                          className="w-7 h-7 text-blue-600"
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
                  )}
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Capacity Utilization
                  </p>
                  {!warehouseId ? (
                    <div className="text-sm text-gray-400 italic py-2">
                      Select a warehouse to view details
                    </div>
                  ) : oneWarehouseLoading ? (
                    <div className="flex items-center space-x-2 py-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      <span className="text-sm text-gray-500">Loading...</span>
                    </div>
                  ) : oneWarehouseError ? (
                    <div className="text-sm text-red-500 py-2">
                      Error loading data
                    </div>
                  ) : (
                    <div className="w-full flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-3xl font-bold text-gray-900">
                          {oneWarehouseData?.warehouse.capacityUtilization ?? 0}
                          %
                        </p>
                        <span className="text-sm text-blue-500 font-normal pt-2">
                          All Systems Operational
                        </span>
                      </div>
                      <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                        <svg
                          className="w-7 h-7 text-blue-600"
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
                  )}
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-2">
                    Total Warehouses
                  </p>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-3xl font-bold text-gray-900">
                        {warehouseQueryData?.allWarehouses?.length ?? 0}
                      </p>
                      <span className="text-sm text-purple-500 font-normal pt-2">
                        Active Locations
                      </span>
                    </div>
                    <div className="w-14 h-14 bg-linear-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                      <svg
                        className="w-7 h-7 text-purple-600"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Warehouse Details */}
            <div className="xl:col-span-1 space-y-6">
              {/* Selected Warehouse Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    Warehouse Details
                  </h2>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
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
                      <h3 className="font-semibold text-gray-900">
                        {oneWarehouseData?.warehouse?.warehouseName ||
                          "Main Warehouse"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {oneWarehouseData?.warehouse?.warehouseCode || ""}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium text-gray-900">
                          {oneWarehouseData?.warehouse?.address || ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Manager</p>
                        <p className="font-medium text-gray-900">
                          {oneWarehouseData?.warehouse?.manager || ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Region</p>
                        <p className="font-medium text-gray-900">
                          {oneWarehouseData?.warehouse?.region || ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {oneWarehouseData?.warehouse?.status || ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storage Locations & Contact */}
              {warehouseId && oneWarehouseData && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="text-sm font-medium text-gray-900">N/A</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-sm font-medium text-gray-900">
                          {oneWarehouseData?.warehouse?.contactEmail || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - All Warehouses List */}
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    All Warehouses
                  </h3>
                  <span className="text-sm text-gray-500">
                    {warehouseQueryData?.allWarehouses?.length || 0} total
                  </span>
                </div>

                {!warehouseQueryData?.allWarehouses?.length ? (
                  <div className="text-center py-8">
                    <p className="text-sm text-gray-500">No warehouses found</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {warehouseQueryData.allWarehouses.map((warehouse) => (
                      <div
                        key={warehouse.id}
                        onClick={() => dispatch(setWareHouse(warehouse.id))}
                        className={`p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                          warehouseId === warehouse.id
                            ? "border-lime-500 bg-lime-50"
                            : "border-gray-200 hover:border-lime-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {warehouse.warehouseName}
                            </h4>
                            <p className="text-xs text-gray-500 mb-2">
                              Code: {warehouse.warehouseCode}
                            </p>
                            <div className="flex items-center space-x-2 text-xs text-gray-600">
                              <svg
                                className="w-3 h-3"
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
                            </div>
                          </div>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Active
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {isWarehouseModalOpen && (
        <Suspense
          fallback={
            <div className="inset-0 absolute z-10 bg-black/20 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 shadow-lg">
                Loading...
              </div>
            </div>
          }
        >
          <Warehouse />
        </Suspense>
      )}
    </div>
  );
};

export default Warehouses;
