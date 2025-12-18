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
  getAllStockMovements: AllStockMovements[];
}
