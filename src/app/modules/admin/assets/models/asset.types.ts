export interface Asset {
    id: string;
    code: string;
    name: string;
    description?: string;
    family: string;
    subFamily: string;
    location: AssetLocation;
    technicalDetails: TechnicalDetails;
    maintenanceHistory: MaintenanceRecord[];
    documents: Document[];
    costs: CostRecord[];
    status: 'Active' | 'Under Maintenance' | 'Retired';
    createdAt: Date;
    updatedAt: Date;
}

export interface AssetLocation {
    site: string;
    building: string;
    floor?: string;
    room?: string;
    specificLocation?: string;
    movementHistory?: LocationChange[];
}

export interface LocationChange {
    fromLocation: Partial<AssetLocation>;
    toLocation: Partial<AssetLocation>;
    date: Date;
    responsibleUser: string;
    reason?: string;
}

export interface TechnicalDetails {
    manufacturer: string;
    model: string;
    serialNumber: string;
    manufacturingDate?: Date;
    installationDate: Date;
    warrantyExpiration?: Date;
    specifications?: { [key: string]: string };
}

export interface MaintenanceRecord {
    id: string;
    type: 'Preventive' | 'Corrective';
    description: string;
    date: Date;
    technician: string;
    cost: number;
    duration: number;
    parts?: string[];
    notes?: string;
}

export interface Document {
    id: string;
    type: 'Manual' | 'Certificate' | 'Photo' | 'Other';
    name: string;
    url: string;
    uploadDate: Date;
    uploadedBy: string;
}

export interface CostRecord {
    id: string;
    type: 'Purchase' | 'Maintenance' | 'Operation' | 'Energy';
    amount: number;
    date: Date;
    description: string;
    reference?: string;
}

export interface AssetFamily {
    id: string;
    name: string;
    subFamilies: AssetSubFamily[];
}

export interface AssetSubFamily {
    id: string;
    name: string;
    familyId: string;
}