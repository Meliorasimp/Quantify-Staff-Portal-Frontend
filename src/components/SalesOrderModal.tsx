const SalesOrderModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-4/5 z-50 h-3/4 overflow-y-auto flex"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default SalesOrderModal;
