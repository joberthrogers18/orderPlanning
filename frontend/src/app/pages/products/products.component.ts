import { Component } from '@angular/core';
import { GenericPageComponent } from '../../components/generic-page/generic-page.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-products',
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent,
    InputNumberModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: { id: number; name: string, price: number }[] = [
    {
      id: 1,
      name: 'product 1',
      price: 100.19
    },
    {
      id: 2,
      name: 'product 2',
      price: 242.25
    }
  ];
  isDialogVisible = false;
  nameProduct: string = '';
  priceProduct: number = 0;

  showDialog() {
    this.isDialogVisible = true;
  }
}
