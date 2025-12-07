import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsViewerRolePermissionClicked } from "../../store/InteractionSlice";
const Settings = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Navbar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          {/* Header Section */}
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

          {/* Content Section */}
          <div className="flex gap-6 px-8">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
              <nav className="py-2">
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 bg-blue-50 border-l-4 border-blue-600 font-medium"
                  to="/settings"
                >
                  <span>Organization</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                  to="/settings/users"
                  onClick={() =>
                    dispatch(setIsViewerRolePermissionClicked(true))
                  }
                >
                  <span className="font-medium">Users Permissions</span>
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

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Organization Logo */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg mb-1">
                      Organization Logo
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      Update your organization's logo
                    </p>
                    <div className="w-24 h-24 rounded-lg border-2 border-gray-200 bg-gray-50 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 text-sm font-medium shadow-sm">
                    Upload
                  </button>
                </div>

                {/* Organization Name */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg mb-1">
                      Organization Name
                    </h2>
                    <p className="text-gray-600 text-base">Quantify Inc.</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                    Edit
                  </button>
                </div>

                {/* Company Address */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg mb-1">
                      Company Address
                    </h2>
                    <p className="text-gray-600 text-base">
                      1234 Market St, San Francisco, CA
                    </p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                    Edit
                  </button>
                </div>

                {/* Contact Email */}
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg mb-1">
                      Contact Email
                    </h2>
                    <p className="text-gray-600 text-base">
                      contact@quantify.com
                    </p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                    Edit
                  </button>
                </div>

                {/* Contact Phone */}
                <div className="p-6 flex justify-between items-center">
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-900 text-lg mb-1">
                      Contact Phone
                    </h2>
                    <p className="text-gray-600 text-base">+1 (555) 123-4567</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
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
