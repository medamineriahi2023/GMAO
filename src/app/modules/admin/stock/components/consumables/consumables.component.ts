import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Consumable } from '../../models/stock.types';

@Component({
    selector: 'consumables',
    templateUrl: './consumables.component.html'
})
export class ConsumablesComponent implements OnInit {
    displayedColumns: string[] = [
        'name',
        'specifications',
        'quantity',
        'unitOfMeasurement',
        'usageRate',
        'expirationDate',
        'status',
        'actions'
    ];
    
    dataSource: MatTableDataSource<Consumable>;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource<Consumable>([]);
    }

    ngOnInit(): void {
        // Sample data initialization
        const sampleData: Consumable[] = [
            {
                id: '1',
                name: 'Welding Wire',
                specifications: '0.8mm Copper Coated',
                quantity: 150,
                unitOfMeasurement: 'meters',
                reorderThreshold: 50,
                usageRate: 10,
                primarySupplier: 'WeldCo',
                lastUpdated: new Date(),
                updatedBy: 'Jane Smith',
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