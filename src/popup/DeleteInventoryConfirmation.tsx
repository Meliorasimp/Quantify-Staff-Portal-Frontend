import { type DeleteInventoryPopup } from "../types/inventory";

const DeleteInventoryConfirmation = ({
  itemId,
  productName,
  onConfirm,
  onCancel,
}: DeleteInventoryPopup) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all animate-in fade-in zoom-in duration-200">
        {/* Header with Icon */}
        <div className="bg-linear-to-r from-red-500 to-red-600 rounded-t-2xl p-6">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
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

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Delete Inventory Item
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Are you sure you want to permanently delete
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
            <p className="text-lg font-semibold text-red-800 text-center">
              "{productName}"
            </p>
          </div>
          <p className="text-sm text-gray-500 text-center mb-6">
            This action cannot be undone. The item will be permanently removed
            from your inventory and storage capacity will be updated.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 focus:ring-4 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(itemId!)}
              className="flex-1 px-6 py-3 bg-linear-to-r from-red-500 to-red-600 text-white font-medium rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-red-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteInventoryConfirmation;
