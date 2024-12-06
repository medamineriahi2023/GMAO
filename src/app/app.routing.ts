import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

export const appRoutes: Route[] = [
    // Redirect empty path to '/assets'
    {path: '', pathMatch : 'full', redirectTo: 'assets'},

    // Redirect signed-in user to the '/assets'
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'assets'},

    // Auth routes for guests
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        data: {
            layout: 'modern'
        },
        children: [
            {path: 'assets', loadChildren: () => import('app/modules/admin/assets/assets.module').then(m => m.AssetsModule)},
            {path: 'stock', loadChildren: () => import('app/modules/admin/stock/stock.module').then(m => m.StockModule)},
            {path: 'operations', loadChildren: () => import('app/modules/admin/operations/operations.module').then(m => m.OperationsModule)},
        ]
    }
];