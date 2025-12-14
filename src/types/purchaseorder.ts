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
  allPurchaseOrder: AllPurchaseOrders[];
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
