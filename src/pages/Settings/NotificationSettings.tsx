import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsViewerRolePermissionClicked } from "../../store/InteractionSlice";

const NotificationSettings = () => {
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
          <div className="flex gap-6 px-8">
            <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 h-fit">
              <nav className="py-2">
                <Link
                  className="flex items-center font-medium py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
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
                  className="flex items-center py-3 px-4 text-gray-700 bg-blue-50 border-l-4 border-blue-600 font-medium"
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
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-start">
                  <div className="flex-1">
                    <div>
                      <h2 className="font-semibold text-gray-900 text-xl">
                        Alert Types
                      </h2>
                      <p className="text-sm text-gray-400">
                        Manage the types of alerts you receive and their
                        delivery methods.
                      </p>
                    </div>
                    <div className="flex py-6 gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                        color="red"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                      </svg>
                      <p className="font-semibold text-gray-900">Alert Types</p>
                    </div>
                    <div className="border-b border-gray-500 pb-2 flex justify-between items-end">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-normal mb-1">
                          Low Stock Alerts Notifications
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Receive notifications when inventory items fall below
                          predefined stock levels.
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
                    <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-normal mb-1">
                          Overstock Alerts Alerts Notifications
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Receive notifications when inventory items exceed
                          predefined stock levels.
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
                    <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-normal mb-1">
                          Expiration Alerts Notifications
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Receive notifications when inventory items fall below
                          predefined stock levels.
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
                    <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-normal mb-1">
                          Stock Adjustment Alerts Notifications
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Receive notifications when stock adjustments are made
                          to inventory items.
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
                    <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-normal mb-1">
                          Inbound / Outbound Alerts
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Receive notifications for inbound and outbound
                          shipments.
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
                    <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-normal mb-1">
                          Inbound / Outbound Alerts
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Receive notifications for inbound and outbound
                          shipments.
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
                    <div>
                      <div className="flex py-6 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                          color="blue"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                          />
                        </svg>

                        <p className="font-semibold text-gray-900">
                          Notifications Channel
                        </p>
                      </div>
                      <div className="border-b border-gray-500 pb-2 flex justify-between items-end">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-normal mb-1">
                            Email (Through Gmail)
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Receive alert notifications via email.
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
                      <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-normal mb-1">
                            In App / Dashboard
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Receive alert notifications within the application
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
                    <div>
                      <div className="flex py-6 gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-6"
                          color="green"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                          />
                        </svg>

                        <p className="font-semibold text-gray-900">
                          Alert Thresholds / Conditions
                        </p>
                      </div>
                      <div className="border-b border-gray-500 pb-2 flex justify-between items-end">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-normal mb-1">
                            Low Stock Threshold
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Set the minimum stock level that triggers a low
                          </p>
                          <p className="font-semibold text-lg">10%</p>
                        </div>
                        <div>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-normal mb-1">
                            Overstock Threshold
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Set the maximum stock level that triggers an
                            overstock alert.
                          </p>
                          <p className="font-semibold text-lg">20%</p>
                        </div>
                        <div>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                            Edit
                          </button>
                        </div>
                      </div>
                      <div className="border-b border-gray-500 pb-2 flex justify-between items-end mt-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-normal mb-1">
                            Expiration Alert Days
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Number of days before expiration to notify.
                          </p>
                          <p className="font-semibold text-lg">30 Days</p>
                        </div>
                        <div>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationSettings;
