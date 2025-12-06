import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
const Settings = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          <div className="mb-8">
            <div className="flex items-center justify-between border-b">
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Settings
                </h1>
                <p className="text-lg text-gray-600">
                  Configure your application preferences and account settings.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col w-1/6 min-h-full rounded-sm text-black">
              <Link
                className="py-3 px-6 cursor-pointer hover:bg-gray-50 transition-all duration-200"
                to="/settings"
              >
                Organization
              </Link>
              <Link
                className="py-3 px-6 cursor-pointer hover:bg-gray-50 transition-all duration-200"
                to="/settings/users"
              >
                Users Permissions
              </Link>
              <Link
                className="py-3 px-6 cursor-pointer hover:bg-gray-50 transition-all duration-200"
                to="/settings/inventory"
              >
                Inventory
              </Link>
              <Link
                className="py-3 px-6 cursor-pointer hover:bg-gray-50 transition-all duration-200"
                to="/settings/notifications"
              >
                Notifications / Alerts
              </Link>
              <Link
                className="py-3 px-6 cursor-pointer hover:bg-gray-50 transition-all duration-200"
                to="/settings/ui-configuration"
              >
                UI Configuration
              </Link>
            </div>
            <div className="flex-1 px-6 pb-6 bg-gray-50 shadow-sm mr-8">
              <div className="border-b py-4 border-gray-400 flex justify-between items-center pr-6">
                <div>
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Organization Logo
                  </h1>
                  <img
                    src=""
                    alt="Organization Logo"
                    className="w-38 h-38 rounded-full border mt-4"
                  />
                </div>
                <div>
                  <button className="px-3 py-1 border rounded-sm cursor-pointer border-gray-300 hover:bg-white transition-all duration-200 text-sm">
                    Upload
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-400 py-4 flex justify-between items-center pr-6">
                <div>
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Organization Name
                  </h1>
                  <p className="text-gray-500 mt-1">Quantify Inc.</p>
                </div>
                <div>
                  <button className="px-3 py-1 border rounded-sm cursor-pointer border-gray-300 hover:bg-white transition-all duration-200 text-sm">
                    Edit
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-400 py-4 flex justify-between items-center pr-6">
                <div>
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Company Address
                  </h1>
                  <p className="text-gray-500 mt-1">
                    1234 Market St, San Francisco, CA
                  </p>
                </div>
                <div>
                  <button className="px-3 py-1 border rounded-sm cursor-pointer border-gray-300 hover:bg-white transition-all duration-200 text-sm">
                    Edit
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-400 py-4 flex justify-between items-center pr-6">
                <div>
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Contact Email
                  </h1>
                  <p className="text-gray-500 mt-1">contact@quantify.com</p>
                </div>
                <div>
                  <button className="px-3 py-1 border rounded-sm cursor-pointer border-gray-300 hover:bg-white transition-all duration-200 text-sm">
                    Edit
                  </button>
                </div>
              </div>
              <div className="border-b border-gray-400 py-4 flex justify-between items-center pr-6">
                <div>
                  <h1 className="font-semibold text-gray-700 text-lg">
                    Contact Phone
                  </h1>
                  <p className="text-gray-500 mt-1">+1 (555) 123-4567</p>
                </div>
                <div>
                  <button className="px-3 py-1 border rounded-sm cursor-pointer border-gray-300 hover:bg-white transition-all duration-200 text-sm">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
