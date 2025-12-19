import FetchWarehouseDetails from "../../gql/query/warehouseQuery/oneWarehouseQuery.gql";
import UpdateWarehouse from "../../gql/mutations/warehouseMutation/updateWarehouse.gql";
import FetchAllWarehouses from "../../gql/query/warehouseQuery/warehouseQuery.gql";
import { useMutation, useQuery } from "@apollo/client/react";
import type { OneWarehouseResponseType } from "../../types/warehouse";
import {
  setWarehouseName,
  setWareHouseCode,
  setWarehouseAddress,
  setWarehouseManager,
  setWarehouseContactEmail,
  setWarehouseRegion,
  setWarehouseStatus,
} from "../../store/WarehouseSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { toast } from "sonner";
import { useEffect } from "react";
const UpdateWarehouseModal = ({
  onClose,
  id,
}: {
  onClose: () => void;
  id: number;
}) => {
  const dispatch = useDispatch();
  const {
    warehouseName,
    warehouseCode,
    address,
    manager,
    contactEmail,
    region,
    status,
  } = useSelector((state: RootState) => state.updateWarehouse);
  const { data: warehouseData, loading } = useQuery<OneWarehouseResponseType>(
    FetchWarehouseDetails,
    {
      variables: { id: id },
    }
  );

  useEffect(() => {
    if (warehouseData?.warehouse) {
      dispatch(setWarehouseName(warehouseData.warehouse.warehouseName));
      dispatch(setWareHouseCode(warehouseData.warehouse.warehouseCode));
      dispatch(setWarehouseAddress(warehouseData.warehouse.address));
      dispatch(setWarehouseManager(warehouseData.warehouse.manager));
      dispatch(
        setWarehouseContactEmail(warehouseData.warehouse.contactEmail || "")
      );
      dispatch(setWarehouseRegion(warehouseData.warehouse.region));
      dispatch(setWarehouseStatus(warehouseData.warehouse.status));
    }
  }, [warehouseData, dispatch]);

  const [updateWarehouseMutation] = useMutation(UpdateWarehouse, {
    refetchQueries: [
      {
        query: FetchAllWarehouses,
      },
      {
        query: FetchWarehouseDetails,
        variables: { id: id },
      },
    ],
    onCompleted: () => {
      onClose();
      toast.success("Warehouse updated successfully");
    },
    onError: (error) => {
      console.error("Error updating warehouse:", error);
      toast.error("Failed to update warehouse. Please try again.");
    },
  });

  const handleUpdateWarehouse = () => {
    try {
      updateWarehouseMutation({
        variables: {
          id: id,
          warehouseName: warehouseName || null,
          warehouseCode: warehouseCode || null,
          location: address || null,
          manager: manager || null,
          contactEmail: contactEmail || null,
          region: region || null,
          status: status || null,
        },
      });
    } catch (e) {
      console.error("Error updating warehouse:", e);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Update Warehouse</h2>
            <p className="text-blue-100 text-sm mt-1">
              Modify warehouse information and settings
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateWarehouse();
          }}
          className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]"
        >
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Warehouse Name & Code Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Warehouse Name
                  </label>
                  <input
                    type="text"
                    name="warehouseName"
                    onChange={(e) => dispatch(setWarehouseName(e.target.value))}
                    value={warehouseName}
                    placeholder="e.g., Main Distribution Center"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Warehouse Code
                  </label>
                  <input
                    type="text"
                    name="warehouseCode"
                    onChange={(e) => dispatch(setWareHouseCode(e.target.value))}
                    value={warehouseCode}
                    placeholder="e.g., WH-001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  onChange={(e) =>
                    dispatch(setWarehouseAddress(e.target.value))
                  }
                  value={address}
                  placeholder="e.g., 123 Industrial Park, City, Country"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>

              {/* Manager & Contact Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Manager
                  </label>
                  <input
                    type="text"
                    name="manager"
                    onChange={(e) =>
                      dispatch(setWarehouseManager(e.target.value))
                    }
                    value={manager}
                    placeholder="e.g., John Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    onChange={(e) =>
                      dispatch(setWarehouseContactEmail(e.target.value))
                    }
                    value={contactEmail}
                    placeholder="e.g., manager@warehouse.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Region & Status Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Region
                  </label>
                  <input
                    type="text"
                    name="region"
                    onChange={(e) =>
                      dispatch(setWarehouseRegion(e.target.value))
                    }
                    value={region}
                    placeholder="e.g., North America"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                    value={status}
                    onChange={(e) =>
                      dispatch(setWarehouseStatus(e.target.value))
                    }
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>
              </div>

              {/* Statistics (Read-only info) */}
              {warehouseData?.warehouse && (
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">
                    Warehouse Statistics
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">
                        Total Products
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        {warehouseData.warehouse.totalProducts || 0}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">
                        Available Sectors
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {warehouseData.warehouse.availableSectors || 0}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Capacity</p>
                      <p className="text-2xl font-bold text-purple-600">
                        {warehouseData.warehouse.capacityUtilization || 0}%
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 font-medium shadow-lg shadow-blue-500/30 transition-all"
            >
              Update Warehouse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateWarehouseModal;
