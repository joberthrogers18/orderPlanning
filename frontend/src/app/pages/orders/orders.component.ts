import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { GenericPageComponent } from '../../components/generic-page/generic-page.component';
import { InputNumberModule } from 'primeng/inputnumber';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';

interface DropdownOption {
  name: string;
  value: number;
}

@Component({
  selector: 'app-orders',
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent,
    InputNumberModule,
    AutoCompleteModule,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orders: {
    id: number;
    buyer: string;
    supplier: number;
    products: string;
    amount: number;
  }[] = [
    {
      id: 1,
      buyer: 'buyer 1',
      supplier: 1,
      products: 'product 1',
      amount: 100.19,
    },
    {
      id: 2,
      buyer: 'buyer 2',
      supplier: 2,
      products: 'product 2',
      amount: 242.25,
    },
  ];
  buyersOptions: DropdownOption[] = [
    { name: 'buyer 1', value: 1 },
    { name: 'buyer 2', value: 2 },
  ];
  suppliersOptions: DropdownOption[] = [
    { name: 'supplier 1', value: 1 },
    { name: 'supplier 2', value: 2 },
  ];
  productsOptions: DropdownOption[] = [
    { name: 'product 1', value: 1 },
    { name: 'product 2', value: 2 },
  ];

  manipulationBuyerOptions: DropdownOption[] = this.buyersOptions;
  manipulationSupplierOptions: DropdownOption[] = this.suppliersOptions;
  manipulationProductOptions: DropdownOption[] = this.productsOptions;

  buyerSelected: DropdownOption | null = null;
  supplierSelected: DropdownOption | null = null;
  productsSelected: DropdownOption[] = [];

  isDialogVisible = false;

  private filterOptions(
    options: DropdownOption[],
    query: string
  ): DropdownOption[] {
    const value = options.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(query);

    return options.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  showDialog() {
    this.isDialogVisible = true;
  }

  search(
    event: AutoCompleteCompleteEvent,
    type: 'buyer' | 'supplier' | 'product'
  ) {
    const query = event.query || '';

    this.manipulationBuyerOptions = this.buyersOptions;
    this.manipulationProductOptions = this.productsOptions;
    this.manipulationSupplierOptions = this.suppliersOptions;

    switch (type) {
      case 'buyer':
        this.manipulationBuyerOptions = this.filterOptions(
          this.manipulationBuyerOptions,
          query
        );
        break;
      case 'supplier':
        this.manipulationSupplierOptions = this.filterOptions(
          this.manipulationSupplierOptions,
          query
        );
        break;
      case 'product':
        this.manipulationProductOptions = this.filterOptions(
          this.manipulationProductOptions,
          query
        );
        break;
    }
  }

  addOrder() {
    this.isDialogVisible = false;
    console.log('buyerSelected', this.buyerSelected);
    console.log('supplierSelected', this.supplierSelected);
    console.log('productsSelected', this.productsSelected);
  }

  onSelectDropdown(event: any, type: 'buyer' | 'supplier' | 'product') {
    switch (type) {
      case 'buyer':
        this.buyerSelected = event.value;
        break;
      case 'supplier':
        this.supplierSelected = event.value;
        break;
      case 'product':
        this.productsSelected = event.value;
        break;
    }
  }
}
