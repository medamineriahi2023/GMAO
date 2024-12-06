import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SparePart } from '../../models/stock.types';

@Component({
    selector: 'spare-parts',
    templateUrl: './spare-parts.component.html'
})
export class SparePartsComponent implements OnInit {
    displayedColumns: string[] = [
        'partNumber',
        'name',
        'quantity',
        'supplier',
        'unitPrice',
        'status',
        'lastInventoryDate',
        'location',
        'actions'
    ];
    
    dataSource: MatTableDataSource<SparePart>;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource<SparePart>([]);
    }

    ngOnInit(): void {
        // Initialize with sample data
        const sampleData: SparePart[] = [
            {
                id: '1',
                partNumber: 'SP001',
                name: 'Bearing Assembly',
                description: 'High-speed bearing assembly',
                quantity: 50,
                minStockLevel: 10,
                maxStockLevel: 100,
                unitPrice: 45.99,
                supplier: 'BearingCo Ltd',
                location: 'Rack A-1',
                lastUpdated: new Date(),
                updatedBy: 'John Doe',
                status: 'Available',
                lastInventoryDate: new Date(),
                purchaseOrderRef: 'PO-2023-001'
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