import Navbar from "../../components/Navbar";
import ViewerPermission from "../../components/RolePermission/ViewerPermission";
import StaffPermissions from "../../components/RolePermission/StaffPermissions";
import AdminPermissions from "../../components/RolePermission/AdminPermission";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../store";
import {
  setIsViewerRolePermissionClicked,
  setIsAdminRolePermissionClicked,
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
  const isAdminRolePermissionClicked = useSelector(
    (state: RootState) => state.interaction.isAdminRolePermissionClicked
  );
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
            <div className="flex flex-col w-2/6 min-h-full rounded-sm text-black">
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
            <div>
              <nav>
                <div className="flex-1 px-6 pb-6 bg-gray-50 shadow-sm mr-8">
                  <div className="border-b py-4 border-gray-400 flex justify-between items-center pr-6">
                    <div className="hover:bg-gray-200 py-2 px-4 rounded-xl cursor-pointer transition-all duration-200">
                      <button
                        className="text-gray-700 text-lg"
                        onClick={() => {
                          dispatch(setIsViewerRolePermissionClicked(true));
                          dispatch(setIsStaffRolePermissionClicked(false));
                          dispatch(setIsAdminRolePermissionClicked(false));
                        }}
                      >
                        Viewer Role Permissions
                      </button>
                    </div>
                    <div className="hover:bg-gray-200 py-2 px-4 rounded-xl cursor-pointer transition-all duration-200">
                      <button
                        className="text-gray-700 text-lg"
                        onClick={() => {
                          dispatch(setIsStaffRolePermissionClicked(true));
                          dispatch(setIsViewerRolePermissionClicked(false));
                          dispatch(setIsAdminRolePermissionClicked(false));
                        }}
                      >
                        Staff Role Permissions
                      </button>
                    </div>
                    <div className="hover:bg-gray-200 py-2 px-4 rounded-xl cursor-pointer transition-all duration-200">
                      <button
                        className="text-gray-700 text-lg"
                        onClick={() => {
                          dispatch(setIsAdminRolePermissionClicked(true));
                          dispatch(setIsViewerRolePermissionClicked(false));
                          dispatch(setIsStaffRolePermissionClicked(false));
                        }}
                      >
                        Admin Role Permissions
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="flex-1 px-6 pb-6 bg-gray-50 shadow-sm">
                <div className="py-4 border-gray-400 flex justify-between items-center">
                  {isViewerRolePermissionClicked && <ViewerPermission />}
                  {isStaffRolePermissionClicked && <StaffPermissions />}
                  {isAdminRolePermissionClicked && <AdminPermissions />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserSettings;
