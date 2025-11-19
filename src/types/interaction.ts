export interface InteractionType {
  isRegisterModalOpen: boolean;
  isLoginModalOpen: boolean;
  isInventoryModalOpen: boolean;
  isWarehouseModalOpen: boolean;
  isStorageLocationModalOpen: boolean;
  isDeleteInventoryModalOpen?: boolean;
  deleteId?: number;
  deleteProductName?: string;
}
