import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setIsStorageLocationModalOpen } from "../store/InteractionSlice";
import type { RootState } from "../store";
import { lazy, Suspense } from "react";
import { useQuery } from "@apollo/client/react";
import AllStorageLocation from "../gql/query/storageLocationQuery/storageLocationQuery.gql";
import GetAllWarehouse from "../gql/query/warehouseQuery/warehouseQuery.gql";
import useDebounce from "../hooks/useDebounce";
import type {
  StorageLocationQueryResponse,
  StorageLocationResponseType,
  StorageLocationSearchResponse,
  StorageLocationWarehouseResponse,
} from "../types/storagelocation";
import type { WarehouseNameType } from "../types/warehouse";
import { setSearchTerm, setWarehouseName } from "../store/locationStorageSlice";
import GetStorageLocationSearch from "../gql/query/storageLocationQuery/storageLocationSearchQuery.gql";
import GetStorageLocationWarehouseSearch from "../gql/query/storageLocationQuery/storageLocationWarehouseQuery.gql";
const StorageLocationModal = lazy(
  () => import("../components/AddStorageLocationModal")
);

const StorageLocations = () => {
  const dispatch = useDispatch();

  const handleStorageLocationAdd = () => {
    dispatch(setIsStorageLocationModalOpen(true));
  };
  const searchData = useSelector(
    (state: RootState) => state.locationStorageSearch.searchTerm
  );
  const categorySearchData = useSelector(
    (state: RootState) => state.locationStorageSearch.warehouseName
  );
  const debouncedSearchTerm = useDebounce(searchData, 500);
  const debouncedCategoryTerm = useDebounce(categorySearchData, 500);

  const { data: storageLocationSearchData } =
    useQuery<StorageLocationSearchResponse>(GetStorageLocationSearch, {
      variables: { searchTerm: debouncedSearchTerm },
      skip: !debouncedSearchTerm,
    });

  const { data: warehouseSearchData } =
    useQuery<StorageLocationWarehouseResponse>(
      GetStorageLocationWarehouseSearch,
      {
        variables: { warehouseName: debouncedCategoryTerm },
        skip: !debouncedCategoryTerm,
      }
    );

  // Fetch storage locations data
  const { data: storageLocationData } = useQuery<StorageLocationQueryResponse>(
    AllStorageLocation,
    {
      //Always fetch fresh data from the server
      fetchPolicy: "network-only",
      nextFetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    }
  );
  // Fetch All warehouses data
  const { data: warehouseData } = useQuery<WarehouseNameType>(GetAllWarehouse, {
    //Always fetch fresh data from the server
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const storageLocation = useSelector(
    (state: RootState) => state.interaction.isStorageLocationModalOpen
  );

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
                  Storage Locations
                </h1>
                <p className="text-gray-600 mt-2">
                  Manage and optimize your warehouse storage locations
                  efficiently.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className="flex items-center px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={handleStorageLocationAdd}
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
                  Add Location
                </button>
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
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-linear-to-br from-white to-blue-50 rounded-2xl shadow-sm border border-blue-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="mt-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Total Locations
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {storageLocationData?.totalLocations ?? 0}
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
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-white to-green-50 rounded-2xl shadow-sm border border-green-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="mt-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Available Space
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                    {storageLocationData?.availableSpace ?? 0}%
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-white to-orange-50 rounded-2xl shadow-sm border border-orange-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="mt-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Avg Utilization
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                    {storageLocationData?.averageUtilizationStatus ?? 0}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-white to-red-50 rounded-2xl shadow-sm border border-red-200/50 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Capacity Alerts
                  </p>
                  <p className="text-3xl font-bold bg-linear-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                    {storageLocationData?.capacityAlert ?? 0}
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.19 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <svg
                    className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                    placeholder="Search locations..."
                    value={searchData}
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                  />
                </div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600"
                  onChange={(e) => dispatch(setWarehouseName(e.target.value))}
                >
                  <option value="">All Warehouses</option>
                  {warehouseData?.allWarehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.warehouseName}>
                      {warehouse.warehouseName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-600 text-sm">
                  <option value="location">Location Code</option>
                  <option value="capacity">Capacity</option>
                  <option value="utilization">Utilization</option>
                </select>
              </div>
            </div>
          </div>

          {/* Storage Locations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Storage Locations Overview
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage and monitor all storage locations
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Warehouse Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Capacity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Utilization
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {(() => {
                        let dataToRender: StorageLocationResponseType[] =
                          storageLocationData?.allStorageLocations || [];

                        if (
                          storageLocationSearchData?.storageLocationSearch
                            ?.length
                        ) {
                          dataToRender =
                            storageLocationSearchData.storageLocationSearch;
                        } else if (
                          warehouseSearchData?.storageLocationWarehouse?.length
                        ) {
                          dataToRender =
                            warehouseSearchData.storageLocationWarehouse;
                        }

                        return dataToRender.map((location) => (
                          <tr
                            key={location.id}
                            className="hover:bg-gray-50 transition-colors duration-150"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="shrink-0 h-10 w-10">
                                  <div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="2"
                                      stroke="currentColor"
                                      className="w-5 h-5 text-white"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-semibold text-gray-900">
                                    {location.locationCode}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {location.sectionName || "N/A"}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="shrink-0 h-8 w-8">
                                  <div className="h-8 w-8 rounded-full bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-sm">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="2"
                                      stroke="currentColor"
                                      className="w-4 h-4 text-white"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="ml-3">
                                  <div className="text-sm font-medium text-gray-900">
                                    {location.warehouse?.warehouseName || "N/A"}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm">
                                {location.maxCapacity.toLocaleString()} units
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm">
                                {Math.round(
                                  (location.occupiedCapacity /
                                    location.maxCapacity) *
                                    100
                                )}
                                %
                              </div>
                              <div className="bg-gray-300 h-2 rounded-full mt-1">
                                <div
                                  className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full"
                                  style={{
                                    width: `${
                                      (location.occupiedCapacity /
                                        location.maxCapacity) *
                                      100
                                    }%`,
                                  }}
                                ></div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center text-sm">
                                {(() => {
                                  const utilizationPercent =
                                    (location.occupiedCapacity /
                                      location.maxCapacity) *
                                    100;
                                  if (utilizationPercent >= 75) {
                                    return (
                                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        <svg
                                          className="w-3 h-3 mr-1"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                        Near Full
                                      </span>
                                    );
                                  } else if (utilizationPercent >= 50) {
                                    return (
                                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        <svg
                                          className="w-3 h-3 mr-1"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                        Moderate
                                      </span>
                                    );
                                  } else {
                                    return (
                                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        <svg
                                          className="w-3 h-3 mr-1"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                        Available
                                      </span>
                                    );
                                  }
                                })()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-2">
                                <button
                                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  title="Edit Location"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </button>
                                <button
                                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                  title="Delete Location"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
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

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Capacity Overview */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Capacity Overview
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Total Capacity
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {(
                        storageLocationData?.totalCapacity ?? 0
                      ).toLocaleString()}{" "}
                      units
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Used Capacity</span>
                    <span className="text-sm font-medium text-gray-900">
                      {(
                        storageLocationData?.totalOccupiedCapacity ?? 0
                      ).toLocaleString()}{" "}
                      units
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Available Space
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      {(
                        storageLocationData?.totalAvailableSpace ?? 0
                      ).toLocaleString()}{" "}
                      units
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div
                      className="h-3 bg-linear-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{
                        width: `${
                          storageLocationData?.averageUtilizationStatus ?? 0
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    {storageLocationData?.averageUtilizationStatus ?? 0}%
                    Utilized
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      action: "Location A1-001 assigned to Product X",
                      time: "2 hours ago",
                      type: "assign",
                    },
                    {
                      action: "Location B2-034 maintenance completed",
                      time: "4 hours ago",
                      type: "maintenance",
                    },
                    {
                      action: "New location C1-067 added",
                      time: "1 day ago",
                      type: "add",
                    },
                    {
                      action: "Location A3-012 capacity updated",
                      time: "2 days ago",
                      type: "update",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-2 h-2 mt-2 rounded-full ${
                          activity.type === "assign"
                            ? "bg-blue-500"
                            : activity.type === "maintenance"
                            ? "bg-orange-500"
                            : activity.type === "add"
                            ? "bg-green-500"
                            : "bg-purple-500"
                        }`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3"
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
                      <span className="text-sm font-medium text-blue-700">
                        Add New Location
                      </span>
                    </div>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
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
                      <span className="text-sm font-medium text-green-700">
                        Bulk Update Status
                      </span>
                    </div>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-orange-600 mr-3"
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
                      <span className="text-sm font-medium text-orange-700">
                        Generate Report
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {storageLocation && (
        <Suspense>
          <StorageLocationModal />
        </Suspense>
      )}
    </div>
  );
};

export default StorageLocations;
