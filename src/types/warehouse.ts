export interface WarehouseInputTypes {
  id: number;
  warehouseName: string;
  warehouseCode: string;
  address: string;
  manager: string;
  contactEmail: string;
  region: string;
  status: string;
}

export interface WarehouseNameType {
  allWarehouses: {
    id: number;
    warehouseName: string;
    warehouseCode: string;
    status: string;
  }[];
}

export interface IndividualWarehouseType {
  warehouseId: number;
}

export interface OneWarehouseResponseType {
  warehouse: {
    id: number;
    warehouseName: string;
    warehouseCode: string;
    address: string;
    manager: string;
    region: string;
    status: string;
    totalProducts?: number;
    availableSectors?: number;
    capacityUtilization?: number;
    contactEmail?: string;
  };
}
