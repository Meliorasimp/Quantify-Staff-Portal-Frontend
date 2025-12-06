const AdminPermission = () => {
  return (
    <div className="w-full h-[70vh] overflow-y-auto pr-6 ">
      <h1 className="font-semibold text-gray-700 text-xl">
        Admin Role Permissions
      </h1>
      <div className="flex items-end justify-between mt-4 border-b border-b-gray-400 pb-4">
        <div>
          <h2 className="font-semibold text-gray-700 text-lg mt-4">
            View Inventory
          </h2>
          <p className="font-normal text-gray-500 max-w-3/4">
            Users assigned the Viewer role can access the inventory system in
            read-only mode, allowing them to Browse all inventory items across
            warehouses View detailed information about each item.
          </p>
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>
      <div className="flex items-end justify-between mt-4 border-b border-b-gray-400 pb-4">
        <div>
          <h2 className="font-semibold text-gray-700 text-lg mt-4">
            View Storage Locations
          </h2>
          <p className="font-normal text-gray-500 max-w-3/4">
            Users assigned the Viewer role can access storage locations in
            read-only mode, enabling them to Browse all storage locations across
            warehouses and facilities View detailed information about each
            location.
          </p>
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminPermission;
