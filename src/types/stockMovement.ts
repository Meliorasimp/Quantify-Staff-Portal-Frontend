interface AllStockMovements {
  id: number;
  itemSku: string;
  productName: string;
  quantity: number;
  type: string;
  warehouseName: string;
  user: string;
  timestamp: string;
}

export interface StockMovementResponseType {
  getAllStockMovements?: AllStockMovements[];
  searchStockMovementBySearchInput?: AllStockMovements[];
  searchStockMovementByType?: AllStockMovements[];
}

export interface SearchStockMovementType {
  searchInput?: string;
  type?: string;
  warehouseName?: string;
}
