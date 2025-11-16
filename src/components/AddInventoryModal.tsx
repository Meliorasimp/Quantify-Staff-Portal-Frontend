import { useDispatch, useSelector } from "react-redux";
import { setIsInventoryModalOpen } from "../store/InteractionSlice";
import {
  addNewRow,
  removeRow,
  updateRow,
  clearAll,
} from "../store/InventorySlice";
import { type AppDispatch, type RootState } from "../store";
import { useMutation, useQuery } from "@apollo/client/react";
import AddInventory from "../gql/mutations/inventoryMutation.gql";
import FetchInventory from "../gql/query/inventoryQuery/inventoryQuery.gql";
import GetAllStorageLocations from "../gql/query/storageLocationQuery/storageLocationQuery.gql";
import { type StorageLocationQueryResponse } from "../types/storagelocation";
import type React from "react";
import { toast } from "sonner";
const AddInventoryModal = () => {
  const dispatch = useDispatch<AppDispatch>();

  //Mutation to Add Inventory Items
  const [addInventory] = useMutation(AddInventory, {
    //Refetch Inventory Query after Mutation to update Cache
    refetchQueries: [
      {
        query: FetchInventory,
      },
    ],
    awaitRefetchQueries: true, // Wait for refetch to complete before resolving the mutation
    onCompleted: (data) => {
      console.log("Inventory added successfully:", data);
      toast.success("Inventory items added successfully!");
    },
    onError: (error) => {
      console.error("Error adding inventory:", error);
      toast.error("Failed to add inventory items. Please try again.");
    },
  });
  const inventoryRows = useSelector((state: RootState) => state.inventoryInput);

  const userId = localStorage.getItem("userId");

  const handleClose = () => {
    dispatch(setIsInventoryModalOpen(false));
  };

  const handleAddRow = () => {
    dispatch(addNewRow());
  };

  const handleRemoveRow = (id: number) => {
    dispatch(removeRow(id));
  };

  const handleUpdateRow = (
    id: number,
    field: string,
    value: string | number
  ) => {
    dispatch(updateRow({ id, field, value }));
  };
  // Fetch all warehouse names for dropdown Warehouse Location

  const handleInventorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that we have a userId
    if (!userId) {
      console.error("No userId found in localStorage. Please login first.");
      alert("Please login first to add inventory items.");
      return;
    }

    // Validate that we have inventory rows
    if (inventoryRows.length === 0) {
      console.error("No inventory items to submit");
      alert("Please add at least one inventory item before submitting.");
      return;
    }

    try {
      console.log("Submitting inventory for userId:", userId);
      console.log("Inventory Rows:", inventoryRows);

      // Transform the data to match backend expectations (camelCase for GraphQL)
      const transformedInventory = inventoryRows.map((row) => ({
        itemSKU: row.sku,
        productName: row.productName,
        category: row.category,
        warehouseLocation: row.warehouseLocation,
        rackLocation: row.rackLocation,
        quantityInStock: Number(row.quantityInStock),
        reorderLevel: Number(row.reorderLevel),
        unitOfMeasure: row.unitOfMeasure,
        costPerUnit: Math.round(Number(row.costPerUnit) * 100), // Convert to cents to store as integer
        totalValue: 0,
      }));

      console.log("Transformed inventory:", transformedInventory);

      const response = await addInventory({
        variables: {
          userId: userId.toString(), // Ensure it's a string
          inventory: transformedInventory,
        },
      });
      console.log("Inventory submission response:", response);

      // Clear the form after successful submission
      dispatch(clearAll());

      // Close modal after successful submission
      handleClose();
    } catch (err: unknown) {
      console.error("Inventory submission error:", err);
      toast.error("Failed to add inventory items. Please try again.");
    }
  };

  //Fetch all storage locations for the warehouse location display
  const { data: storageLocationData } = useQuery<StorageLocationQueryResponse>(
    GetAllStorageLocations
  );
  console.log("Storage Location Data:", storageLocationData);

  const handleRackLocationChange = (rowId: number, sectionName: string) => {
    // Update the rack location
    handleUpdateRow(rowId, "rackLocation", sectionName);

    // Find the storage location data
    const storageLocation = storageLocationData?.allStorageLocations.find(
      (loc) => loc.sectionName === sectionName
    );

    if (storageLocation) {
      // Auto-populate warehouse location
      const warehouseName = storageLocation.warehouse?.warehouseName || "";
      handleUpdateRow(rowId, "warehouseLocation", warehouseName);

      // Auto-populate unit of measure
      const unitType = storageLocation.unitType || "";
      handleUpdateRow(rowId, "unitOfMeasure", unitType);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-10 w-[90%] h-[95%] z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl">Add Inventory</h1>
        <form className="mt-4">
          <div className="overflow-x-auto max-w-full h-[80vh]">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Item SKU
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Product Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Rack Location
                    <span className="text-xs text-blue-600 block font-normal">
                      (Auto-fills warehouse & unit)
                    </span>
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Warehouse Location
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Quantity in Stock
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[140px]">
                    Reorder Level
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Unit of Measure
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[140px]">
                    Cost per Unit
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[100px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventoryRows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={10}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No rows added yet. Click "Add New Row" to start.
                    </td>
                  </tr>
                ) : (
                  inventoryRows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="SKU-001"
                          value={row.sku}
                          onChange={(e) =>
                            handleUpdateRow(row.id, "sku", e.target.value)
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Product Name"
                          value={row.productName}
                          onChange={(e) =>
                            handleUpdateRow(
                              row.id,
                              "productName",
                              e.target.value
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={row.category}
                          onChange={(e) =>
                            handleUpdateRow(row.id, "category", e.target.value)
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="electronics">Electronics</option>
                          <option value="furniture">Furniture</option>
                          <option value="clothing">Clothing</option>
                          <option value="toys">Toys</option>
                          <option value="books">Books</option>
                          <option value="foods">Foods</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={row.rackLocation}
                          onChange={(e) =>
                            handleRackLocationChange(row.id, e.target.value)
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        >
                          <option value="">Select Rack Location</option>
                          {storageLocationData?.allStorageLocations.map((l) => (
                            <option key={l.id} value={l.sectionName}>
                              {l.sectionName} - {l.locationCode} (
                              {l.storageType}) - Max: {l.maxCapacity}{" "}
                              {l.unitType}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Auto-filled from rack location"
                          value={row.warehouseLocation}
                          readOnly
                          className="w-full p-2 text-sm border border-gray-300 rounded-md bg-gray-50 text-gray-600 cursor-not-allowed"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          placeholder="0"
                          min="0"
                          value={row.quantityInStock}
                          required
                          onChange={(e) =>
                            handleUpdateRow(
                              row.id,
                              "quantityInStock",
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          placeholder="0"
                          min="0"
                          value={row.reorderLevel}
                          onChange={(e) =>
                            handleUpdateRow(
                              row.id,
                              "reorderLevel",
                              parseInt(e.target.value) || 0
                            )
                          }
                          required
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Auto-filled from rack location"
                          value={row.unitOfMeasure}
                          readOnly
                          className="w-full p-2 text-sm border border-gray-300 rounded-md bg-gray-50 text-gray-600 cursor-not-allowed"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                          value={row.costPerUnit}
                          onChange={(e) =>
                            handleUpdateRow(
                              row.id,
                              "costPerUnit",
                              parseFloat(e.target.value) || 0
                            )
                          }
                          required
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => handleRemoveRow(row.id)}
                          className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Add Row Button */}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700 transition-colors flex items-center gap-2"
                onClick={handleAddRow}
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add New Row
              </button>
            </div>

            {/* Form Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-700 transition-colors"
                onClick={handleInventorySubmit}
              >
                Save Inventory
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInventoryModal;
