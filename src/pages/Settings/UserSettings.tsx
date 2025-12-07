import Navbar from "../../components/Navbar";
import ViewerPermission from "../../components/RolePermission/ViewerPermission";
import StaffPermissions from "../../components/RolePermission/StaffPermissions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";
import {
  setIsViewerRolePermissionClicked,
  setIsStaffRolePermissionClicked,
} from "../../store/InteractionSlice";

const UserSettings = () => {
  const dispatch = useDispatch();
  const isViewerRolePermissionClicked = useSelector(
    (state: RootState) => state.interaction.isViewerRolePermissionClicked
  );
  const isStaffRolePermissionClicked = useSelector(
    (state: RootState) => state.interaction.isStaffRolePermissionClicked
  );
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
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
                  to="/settings"
                >
                  <span className="font-medium">Organization</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 bg-blue-50 border-l-4 border-blue-600 font-medium"
                  to="/settings/users"
                >
                  <span>Users Permissions</span>
                </Link>
                <Link
                  className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border-l-4 border-transparent hover:border-blue-600"
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

            {/* Main Content */}
            <div className="flex-1">
              {/* Tab Navigation */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex gap-1 p-2 border-b border-gray-200">
                  <button
                    className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-200 ${
                      isViewerRolePermissionClicked
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      dispatch(setIsViewerRolePermissionClicked(true));
                      dispatch(setIsStaffRolePermissionClicked(false));
                    }}
                  >
                    Viewer Role
                  </button>
                  <button
                    className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-200 ${
                      isStaffRolePermissionClicked
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      dispatch(setIsStaffRolePermissionClicked(true));
                      dispatch(setIsViewerRolePermissionClicked(false));
                    }}
                  >
                    Staff Role
                  </button>
                </div>
              </div>

              {/* Permissions Content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {isViewerRolePermissionClicked && <ViewerPermission />}
                {isStaffRolePermissionClicked && <StaffPermissions />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserSettings;
