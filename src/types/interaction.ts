export interface InteractionType {
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  isInventoryModalOpen: boolean;
  isWarehouseModalOpen: boolean;
  isStorageLocationModalOpen: boolean;
  isDeleteInventoryModalOpen?: boolean;
  deleteId?: number;
  deleteProductName?: string;
  isUpdateInventoryModalOpen?: boolean;
  updateId?: number;
  isDeleteStorageLocationModalOpen?: boolean;
  deleteStorageLocationId?: number;
  deleteStorageLocationName?: string;
  isPurchaseOrderModalOpen: boolean;
  isSalesOrderModalOpen: boolean;
  isNavbarItemClicked: boolean;
  isViewerRolePermissionClicked?: boolean;
  isStaffRolePermissionClicked?: boolean;
  isAdminRolePermissionClicked?: boolean;
  supplierName?: string;
}
