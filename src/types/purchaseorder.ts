export interface PurchaseOrderTypes {
  id: string;
  supplierId: number | string;
  deliveryWarehouse: string;
  orderDate: string;
  expectedDeliveryDate: string;
  totalAmount: number;
  items: Array<{
    productId: number | string;
    productName: string;
    productImage?: string;
    quantity: number;
    price: number;
  }>;
  notes?: string;
}

interface AllPurchaseOrders {
  id: number | string;
  purchaseOrderNumber: number | string;
  supplierName: string;
  orderDate: string;
  totalAmount: number;
  status: string;
}

export interface AllPurchaseOrderResponseType {
  allPendingPurchaseOrders: AllPurchaseOrders[];
}

export interface PurchaseOrderByIdResponseType {
  purchaseOrderById: {
    id: number;
    orderDate: string;
    supplierName: string;
    staffResponsible: string;
    deliveryWarehouse: string;
    expectedDeliveryDate: string;
    status: string;
    items: Array<{
      id: number | string;
      productName: string;
      quantity: number;
      price: number;
    }>;
  };
}

interface AllDeliveredPurchasedOrders {
  id: number;
  purchaseOrderNumber: number;
  orderDate: string;
  supplierName: string;
  staffResponsible: string;
}

export interface AllDeliveredPurchasedOrdersResponseType {
  allDeliveredPurchasedOrders: AllDeliveredPurchasedOrders[];
}

interface PurchaseOrderAuditLog {
  id: number | string;
  action: string;
  totalUnits: number;
  supplierName: string;
  timestamp: string;
}

export interface PurchaseOrderAuditLogResponseType {
  purchaseOrderAuditLogs: PurchaseOrderAuditLog[];
}
