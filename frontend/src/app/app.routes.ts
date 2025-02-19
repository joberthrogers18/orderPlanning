import { Routes } from '@angular/router';
import { BuyersComponent } from './pages/buyers/buyers.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';

export const routes: Routes = [
    { path: '', component: OrdersComponent, pathMatch: 'full' },
    { path: 'clients', component: BuyersComponent, pathMatch: 'full' },
    { path: 'suppliers', component: SupplierComponent, pathMatch: 'full' },
    { path: 'products', component: ProductsComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
