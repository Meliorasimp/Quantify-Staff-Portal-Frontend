import type { MarkAsDeliveredPopupTypes } from "../types/PopupTypes";
const MarkAsDeliveredConfirmation = ({
  onClose,
  onConfirm,
  onLoading,
}: MarkAsDeliveredPopupTypes) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Confirm Delivery
          </h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to mark this purchase order as delivered?
          </p>
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
              onClick={onClose}
              disabled={onLoading}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {onLoading ? (
                <span className="text-xs">Changing status...</span>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkAsDeliveredConfirmation;
