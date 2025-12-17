import { type UpdateInventoryPopup } from "../types/inventory";
import { useDispatch } from "react-redux";
import {
  setItemSKU,
  setCategory,
  setProductName,
  setQuantityInStock,
  setReorderLevel,
} from "../store/InventorySlice";

const UpdateInventory = ({ onCancel, onConfirm }: UpdateInventoryPopup) => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl shadow-lg p-8 w-[40%] h-[85%] z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-semibold">Update Inventory</h1>
        <form className="mt-6">
          <div className="flex gap-x-10">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Item SKU
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter item SKU"
                onChange={(e) => dispatch(setItemSKU(e.target.value))}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name=""
                id=""
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                onChange={(e) => dispatch(setCategory(e.target.value))}
              >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Apparel">Furniture</option>
                <option value="Home Goods">Clothing</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter product name"
              onChange={(e) => dispatch(setProductName(e.target.value))}
            />
          </div>
          <div className="flex gap-x-10 mt-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity in Stock
              </label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="0"
                onChange={(e) => {
                  const value = e.target.value;
                  dispatch(
                    setQuantityInStock(value ? Number(value) : undefined)
                  );
                }}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reorder level
              </label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="0"
                onChange={(e) => {
                  const value = e.target.value;
                  dispatch(setReorderLevel(value ? Number(value) : undefined));
                }}
              />
            </div>
          </div>
          <button
            className="mt-30 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            onClick={onConfirm}
          >
            Update Inventory
          </button>
          <button
            className="mt-6 w-full text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 bg-gray-300 transition-colors cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInventory;
