export interface StockItem {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    minStockLevel?: number;
    maxStockLevel?: number;
    unitPrice?: number;
    location?: string;
    lastUpdated: Date;
    updatedBy: string;
    status: 'Available' | 'Low Stock' | 'Out of Stock';
    purchaseOrderRef?: string;
    comments?: string;
}

export interface SparePart extends StockItem {
    partNumber: string;
    supplier: string;
    lastInventoryDate: Date;
}

export interface Consumable extends StockItem {
    specifications: string;
    unitOfMeasurement: string;
    reorderThreshold: number;
    usageRate: number;
    expirationDate?: Date;
    storageConditions?: string;
    primarySupplier: string;
    secondarySupplier?: string;
}

export interface RawMaterial extends StockItem {
    type: string;
    grade: string;
    leadTime: number;
    qualityCertification?: string;
    lastQualityCheck?: Date;
}

export interface Tool extends StockItem {
    condition: 'New' | 'Good' | 'Fair' | 'Poor';
    maintenanceSchedule: string;
    lastMaintenance?: Date;
    expectedLifetime: string;
    department: string;
    calibrationDate?: Date;
}