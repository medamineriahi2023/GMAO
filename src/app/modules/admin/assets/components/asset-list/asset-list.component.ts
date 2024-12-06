import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Asset } from '../../models/asset.types';

@Component({
    selector: 'asset-list',
    templateUrl: './asset-list.component.html'
})
export class AssetListComponent implements OnInit {
    displayedColumns: string[] = [
        'code',
        'name',
        'family',
        'location',
        'status',
        'lastMaintenance',
        'actions'
    ];
    
    dataSource: MatTableDataSource<Asset>;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource<Asset>([]);
    }

    ngOnInit(): void {
        // Sample data
        const sampleData: Asset[] = [
            {
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
            }
        ];
        
        this.dataSource.data = sampleData;
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}