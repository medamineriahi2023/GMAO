import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Tool } from '../../models/stock.types';

@Component({
    selector: 'tools-equipment',
    templateUrl: './tools-equipment.component.html'
})
export class ToolsEquipmentComponent implements OnInit {
    displayedColumns: string[] = [
        'name',
        'condition',
        'department',
        'lastMaintenance',
        'nextMaintenance',
        'calibrationDate',
        'status',
        'actions'
    ];
    
    dataSource: MatTableDataSource<Tool>;
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource<Tool>([]);
    }

    ngOnInit(): void {
        // Sample data initialization
        const sampleData: Tool[] = [
            {
                id: '1',
                name: 'Precision Caliper',
                description: 'Digital precision measurement tool',
                quantity: 5,
                condition: 'Good',
                maintenanceSchedule: 'Every 3 months',
                lastMaintenance: new Date(),
                expectedLifetime: '5 years',
                department: 'Quality Control',
                calibrationDate: new Date(),
                lastUpdated: new Date(),
                updatedBy: 'Maintenance Team',
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