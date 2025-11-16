import { useDispatch } from "react-redux";
import { setIsWarehouseModalOpen } from "../store/InteractionSlice";
import { useSelector } from "react-redux";
import { type RootState } from "../store";
import { addNewRow, removeRow, updateRow } from "../store/WarehouseSlice";
import AddWarehouse from "../gql/mutations/warehouseMutation.gql";
import { useMutation } from "@apollo/client/react";
import type React from "react";

const AddWarehouseModal = () => {
  const dispatch = useDispatch();
  const warehouseInput = useSelector(
    (state: RootState) => state.warehouseInput
  );
  const warehouseData = warehouseInput.map((item) => ({
    warehouseName: item.warehouseName,
    warehouseCode: item.warehouseCode,
    address: item.address,
    manager: item.manager,
    contactEmail: item.contactEmail,
    region: item.region,
    status: item.status,
  }));
  const [addWarehouse] = useMutation(AddWarehouse);
  const handleClose = () => {
    dispatch(setIsWarehouseModalOpen(false));
  };
  const handleWarehouseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Debug: Check if we have a token
    const token = localStorage.getItem("token");
    console.log("DEBUG: Token exists:", !!token);
    console.log(
      "DEBUG: Token preview:",
      token ? token.substring(0, 20) + "..." : "null"
    );

    try {
      const response = await addWarehouse({
        variables: {
          input: warehouseData,
        },
      });
      console.log("Warehouse added successfully:", response);
    } catch (err: unknown) {
      console.error("Error adding warehouse:", err);
    }
  };

  console.log("warehouseInput", warehouseData);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-lg p-10 w-[90%] h-[95%] z-50"
      >
        <h1 className="text-2xl">Add Warehouse</h1>
        <form className="mt-4">
          <div className="overflow-x-auto max-w-full h-[80vh]">
            <table className="border-collapse min-w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Warehouse Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Warehouse Code
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Address
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Manager
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[200px]">
                    Contact Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[150px]">
                    Region
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 min-w-[140px]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {warehouseData.length == 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-3 text-center text-sm text-gray-500"
                    >
                      No warehouse data available.
                    </td>
                  </tr>
                ) : (
                  warehouseInput.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Warehouse From Mars"
                          value={row.warehouseName}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "warehouseName",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="WH-001"
                          value={row.warehouseCode}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "warehouseCode",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="123 Mars St, Mars City"
                          value={row.address}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "address",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Jane Doe"
                          value={row.manager}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "manager",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="janedoe@gmail.com"
                          value={row.contactEmail}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "contactEmail",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          placeholder="Luzon"
                          value={row.region}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "region",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          name="status"
                          id="status"
                          value={row.status}
                          onChange={(e) =>
                            dispatch(
                              updateRow({
                                id: row.id,
                                field: "status",
                                value: e.target.value,
                              })
                            )
                          }
                          className="w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
                        >
                          <option value="" disabled>
                            Select Status
                          </option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => dispatch(removeRow(row.id))}
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
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="px-4 py-2 bg-lime-600 text-white rounded-md cursor-pointer hover:bg-lime-700 transition-colors flex items-center gap-2"
                onClick={() => dispatch(addNewRow())}
              >
                Add New Row
              </button>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-lime-600 text-white rounded-md cursor-pointer hover:bg-lime-700 transition-colors"
                onClick={handleWarehouseSubmit}
              >
                Save Warehouse Info
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWarehouseModal;
