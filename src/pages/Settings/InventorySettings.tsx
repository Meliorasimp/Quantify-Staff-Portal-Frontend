import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
const InventorySettings = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          <div className="bg-white border-b border-gray-200 mb-6">
            <div className="px-8 py-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Settings
              </h1>
              <p className="text-base text-gray-600">
                Configure your application preferences and account settings.
              </p>
            </div>
          </div>
          <div className="flex gap-6 px-8">
            <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
              <nav className="py-2">
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                  to="/settings"
                >
                  <span className="font-medium">Organization</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                  to="/settings/users"
                >
                  <span>Users Permissions</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 bg-blue-50 border-l-4 border-blue-600 font-medium"
                  to="/settings/inventory"
                >
                  <span className="font-medium">Inventory</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                  to="/settings/notifications"
                >
                  <span className="font-medium">Notifications / Alerts</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                  to="/settings/ui-configuration"
                >
                  <span className="font-medium">UI Configuration</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventorySettings;
