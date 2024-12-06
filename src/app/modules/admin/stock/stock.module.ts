import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { StockComponent } from './stock.component';
import { SparePartsComponent } from './components/spare-parts/spare-parts.component';
import { ConsumablesComponent } from './components/consumables/consumables.component';

const stockRoutes: Route[] = [
    {
        path: '',
        component: StockComponent
    }
];

@NgModule({
    declarations: [
        StockComponent,
        SparePartsComponent,
        ConsumablesComponent
    ],
    imports: [
        RouterModule.forChild(stockRoutes),
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule,
        SharedModule
    ]
})
export class StockModule {}