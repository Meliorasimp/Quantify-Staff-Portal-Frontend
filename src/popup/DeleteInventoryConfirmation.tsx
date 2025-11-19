import { type DeleteInventoryPopup } from "../types/inventory";
const DeleteInventoryConfirmation = ({
  itemId,
  productName,
  onConfirm,
  onCancel,
}: DeleteInventoryPopup) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-[30%] h-[30%] z-50">
        <h1 className="text-center text-xl mt-4">
          Are you sure you want to delete "{productName}"?
        </h1>
        <div className="flex justify-center gap-8 mt-12">
          <button
            onClick={onCancel}
            className="bg-red-400 px-4 py-2 rounded-lg hover:bg-red-500"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(itemId!)}
            className="bg-green-400 px-4 py-2 rounded-lg hover:bg-green-500"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteInventoryConfirmation;
