import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asset } from '../../models/asset.types';

@Component({
    selector: 'asset-details',
    templateUrl: './asset-details.component.html'
})
export class AssetDetailsComponent implements OnInit {
    asset: Asset;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        // In a real app, you would fetch the asset details using the ID from the route
        const id = this.route.snapshot.paramMap.get('id');
        // For now, using sample data
        this.asset = {
            id: '1',
            code: 'AST001',
            name: 'Production Line A',
            family: 'Production Equipment',
            subFamily: 'Assembly Line',
            location: {
                site: 'Main Factory',
                building: 'Building A',
                floor: '1st Floor',
                room: 'Production Hall'
            },
            technicalDetails: {
                manufacturer: 'TechCorp',
                model: 'PL-2000',
                serialNumber: 'TC123456',
                installationDate: new Date()
            },
            maintenanceHistory: [],
            documents: [],
            costs: [],
            status: 'Active',
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }
}