export interface InventoryInputTypes {
  id: number;
  sku: string;
  productName: string;
  category: string;
  warehouseLocation: string;
  rackLocation: string;
  quantityInStock: number;
  reorderLevel: number;
  unitOfMeasure: string;
  costPerUnit: number;
}

export interface SearchType {
  dataSearch: string;
  categorySearch: string;
  warehouseSearch: string;
}

export interface InventoryDataTypes {
  id: number;
  itemSKU: string;
  category: string;
  costPerUnit: number;
  productName: string;
  quantityInStock: number;
  reorderLevel: number;
  totalValue: number;
  unitOfMeasure: string;
  warehouseLocation: string;
  rackLocation: string;
  lastRestocked: string;
}

export interface FetchInventoryResponse {
  inventoryItems: InventoryDataTypes[];
  totalInventoryValue: number;
  inStockItems: number;
  lowStockItems: number;
  outOfStockItems: number;
}

export interface SearchInventoryResponse {
  itemBySearchTerm: InventoryDataTypes[];
}

export interface SearchCategoryInventoryResponse {
  itemByCategory: InventoryDataTypes[];
}

export interface WarehouseCategoryResponse {
  itemByWarehouseLocation: InventoryDataTypes[];
}
