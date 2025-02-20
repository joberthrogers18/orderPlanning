import { Component, OnInit } from '@angular/core';
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
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';
import { BuyersComponent } from '../buyers/buyers.component';
import { SuppliersService } from '../../services/suppliers.service';
import { BuyersService } from '../../services/buyers.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

interface DropdownOption {
  name: string;
  value: number;
}

interface DropdownProduct extends DropdownOption {
  price: number;
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
    ToastModule,
    ProgressSpinnerModule,
    CommonModule
  ],
  providers: [OrdersService, ProductsService, BuyersComponent, SuppliersService, MessageService],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders: {
    id: number;
    buyer: string;
    supplier: number;
    products: string;
    amount: number;
  }[] = [];
  buyersOptions: DropdownOption[] = [];
  suppliersOptions: DropdownOption[] = [];
  productsOptions: DropdownProduct[] = [];

  manipulationBuyerOptions: DropdownOption[] = this.buyersOptions;
  manipulationSupplierOptions: DropdownOption[] = this.suppliersOptions;
  manipulationProductOptions: DropdownProduct[] = this.productsOptions;

  buyerSelected: DropdownOption | null = null;
  supplierSelected: DropdownOption | null = null;
  productsSelected: DropdownProduct[] = [];

  loading: boolean = false;
  isDialogVisible = false;

  constructor(
    private orderService: OrdersService,
    private productService: ProductsService,
    private supplierService: SuppliersService,
    private buyerService: BuyersService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = orders;
    });
    this.productService.getAllProducts().subscribe((products) => {
      this.productsOptions = products.map((product) => ({
        name: product.name,
        value: product.id,
        price: product.price,
      }));
    });
    this.buyerService.getAllBuyers().subscribe((buyers) => {
      this.buyersOptions = buyers.map((buyer) => ({
        name: buyer.name,
        value: buyer.id,
      }));
    });
    this.supplierService.getAllSuppliers().subscribe((suppliers) => {
      this.suppliersOptions = suppliers.map((supplier) => ({
        name: supplier.name,
        value: supplier.id,
      }));
    })
  }

  private filterOptions<T extends DropdownOption>(
    options: T[],
    query: string
  ): T[] {
    const value = options.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

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
        if (typeof event == 'object') {
          const newProduct = [...this.productsSelected, event.value].filter((item)  => typeof item === 'object');
          this.productsSelected = newProduct;
        }
        break;
    }

    console.log('productsSelected', this.productsSelected);
  }
  onUnselectDropdown(event: any) {
    console.log('event', this.productsSelected);
    this.productsSelected = this.productsSelected.filter(
      (product: any) => product.value.name !== (event.value && event.value.name)
    );
  }

  createNewOrder() {
    this.loading = true;

    const sumAllProducts = this.productsSelected.reduce(
      (acc, product) => acc + product.price,
      0
    );
    console.log({
          buyerId: this.buyerSelected?.value,
        supplierId: this.supplierSelected?.value,
        productIds: this.productsSelected.map((product) => product.value),
        amount: sumAllProducts
      })

    this.orderService
      .createOrder({
        buyerId: this.buyerSelected?.value,
        supplierId: this.supplierSelected?.value,
        productIds: this.productsSelected.map((product) => product.value),
      })
      .subscribe(
        (order) => {
          this.orders.push(order);
          this.isDialogVisible = false;
          this.loading = false;
          this.productsSelected = [];
          this.buyerSelected = null;
          this.supplierSelected = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Pedido criado com sucesso!',
          });
        },
        () => {
          this.loading = false;
          this.isDialogVisible = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Erro ao criar pedido! Tente novamente mais tarde!',
          });
        }
      );
  }
}
