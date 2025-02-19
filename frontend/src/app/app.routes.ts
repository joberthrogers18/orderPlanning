import { Routes } from '@angular/router';
import { BuyersComponent } from './pages/buyers/buyers.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

export const routes: Routes = [
    { path: '', component: BuyersComponent, pathMatch: 'full' },
    { path: 'suppliers', component: SupplierComponent, pathMatch: 'full' },
];
