import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RawMaterial } from '../../models/stock.types';

@Component({
    selector: 'raw-materials',
    templateUrl: './raw-materials.component.html'
})
export class RawMaterialsComponent implements OnInit {
    displayedColumns: string[] = [
        'name',
        'type',
        'grade',
        'quantity',
        'unitPrice',
        'leadTime',
        'lastQualityCheck',
        'status',
        'actions'
    ];
    
    dataSource: MatTableDataSource<RawMaterial>;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource<RawMaterial>([]);
    }

    ngOnInit(): void {
        // Sample data initialization
        const sampleData: RawMaterial[] = [
            {
                id: '1',
                name: 'Steel Sheet',
                type: 'Metal',
                grade: 'Grade A',
                quantity: 500,
                unitOfMeasurement: 'kg',
                minStockLevel: 100,
                leadTime: 14,
                unitPrice: 2.5,
                lastQualityCheck: new Date(),
                lastUpdated: new Date(),
                updatedBy: 'Quality Team',
                status: 'Available'
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