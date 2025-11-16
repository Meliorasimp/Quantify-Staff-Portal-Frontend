import { useDispatch } from "react-redux";
import { setIsStorageLocationModalOpen } from "../store/InteractionSlice";
import { useMutation, useQuery } from "@apollo/client/react";
import { toast } from "sonner";
import { useState } from "react";
import AddStorageLocationMutation from "../gql/mutations/storageLocationMutation.gql";
import GetWarehousesQuery from "../gql/query/warehouseQuery/warehouseQuery.gql";
import AllStorageLocation from "../gql/query/storageLocationQuery/storageLocationQuery.gql";
import type { WarehouseNameType } from "../types/warehouse";

const AddStorageLocationModal = () => {
  const dispatch = useDispatch();

  // Form state
  const [formData, setFormData] = useState({
    locationCode: "",
    sectionName: "",
    storageType: "",
    maxCapacity: 0,
    unitType: "",
    warehouseId: 0,
  });

  // Fetch warehouses for dropdown
  const { data: warehousesData, loading: warehousesLoading } =
    useQuery<WarehouseNameType>(GetWarehousesQuery);

  // Add storage location mutation
  const [addStorageLocation, { loading }] = useMutation(
    AddStorageLocationMutation,
    {
      //Refetch storage locations data after adding a new one (Hydration purpose)
      refetchQueries: [
        {
          query: AllStorageLocation,
        },
      ],
      onCompleted: () => {
        toast.success("Storage location added successfully!");
        handleClose();
        resetForm();
      },
      onError: (error) => {
        console.error("Error adding storage location:", error);
        toast.error("Failed to add storage location. Please try again.");
      },
    }
  );

  const handleClose = () => {
    dispatch(setIsStorageLocationModalOpen(false));
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      locationCode: "",
      sectionName: "",
      storageType: "",
      maxCapacity: 0,
      unitType: "",
      warehouseId: 0,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "maxCapacity" || name === "warehouseId"
          ? parseInt(value) || 0
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.locationCode ||
      !formData.sectionName ||
      !formData.storageType ||
      !formData.unitType ||
      formData.warehouseId === 0 ||
      formData.maxCapacity <= 0
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await addStorageLocation({
        variables: {
          storageLocation: [formData], // Backend expects array
        },
      });
    } catch (error) {
      console.error("Storage location submission error:", error);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Add Storage Location
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="locationCode"
              value={formData.locationCode}
              onChange={handleInputChange}
              placeholder="e.g., A1-001"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Section Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Section Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="sectionName"
              value={formData.sectionName}
              onChange={handleInputChange}
              placeholder="e.g., Zone A1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Warehouse Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Warehouse <span className="text-red-500">*</span>
            </label>
            <select
              name="warehouseId"
              value={formData.warehouseId}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={warehousesLoading}
            >
              <option value={0}>Select a warehouse</option>
              {warehousesData?.allWarehouses?.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.warehouseName} ({warehouse.warehouseCode})
                </option>
              ))}
            </select>
            {warehousesLoading && (
              <p className="text-sm text-gray-500 mt-1">
                Loading warehouses...
              </p>
            )}
          </div>

          {/* Storage Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Storage Type <span className="text-red-500">*</span>
            </label>
            <select
              name="storageType"
              value={formData.storageType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select storage type</option>
              <option value="Shelf">Shelf</option>
              <option value="Rack">Rack</option>
              <option value="Floor">Floor Storage</option>
              <option value="Cold Storage">Cold Storage</option>
              <option value="Hazmat">Hazmat Storage</option>
            </select>
          </div>

          {/* Capacity and Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Capacity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="maxCapacity"
                value={formData.maxCapacity}
                onChange={handleInputChange}
                min="1"
                placeholder="1000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit Type <span className="text-red-500">*</span>
              </label>
              <select
                name="unitType"
                value={formData.unitType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select unit</option>
                <option value="boxes">Boxes</option>
                <option value="units">Units/Pieces</option>
                <option value="kg">Kilograms</option>
                <option value="pallets">Pallets</option>
                <option value="cartons">Cartons</option>
                <option value="m³">Cubic Meters</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding..." : "Add Storage Location"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStorageLocationModal;
