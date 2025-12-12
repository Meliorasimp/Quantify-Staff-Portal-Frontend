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
