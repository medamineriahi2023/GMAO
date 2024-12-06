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
import { MatTreeModule } from '@angular/material/tree';
import { SharedModule } from 'app/shared/shared.module';
import { AssetsComponent } from './assets.component';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetHierarchyComponent } from './components/asset-hierarchy/asset-hierarchy.component';
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';

const assetsRoutes: Route[] = [
    {
        path: '',
        component: AssetsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: AssetListComponent },
            { path: 'hierarchy', component: AssetHierarchyComponent },
            { path: ':id', component: AssetDetailsComponent }
        ]
    }
];

@NgModule({
    declarations: [
        AssetsComponent,
        AssetListComponent,
        AssetHierarchyComponent,
        AssetDetailsComponent
    ],
    imports: [
        RouterModule.forChild(assetsRoutes),
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
        MatTreeModule,
        SharedModule
    ]
})
export class AssetsModule {}