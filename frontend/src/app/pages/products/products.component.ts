import { Component, OnInit } from '@angular/core';
import { GenericPageComponent } from '../../components/generic-page/generic-page.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProductsService } from '../../services/products.service';
import Product from '../../models/Product';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-products',
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent,
    InputNumberModule,
    ToastModule
  ],
  providers: [ProductsService, MessageService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: { id: number; name: string, price: number }[] = [];
  isDialogVisible = false;
  nameProduct: string = '';
  priceProduct: number = 0;
  loading: boolean = false;

  constructor(private productService: ProductsService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error loading products! Try again later!',
        });
      }
    );
  }

  showDialog() {
    this.isDialogVisible = true;
  }

  createProduct() {
    this.loading = true;
    this.productService.createProduct({ name: this.nameProduct, price: this.priceProduct }).subscribe(
      (product: Product) => {
        this.products = [...this.products, product];
        this.nameProduct = '';
        this.priceProduct = 0;
        this.isDialogVisible = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Produto criado com sucesso!',
        });
      },
      () => {
        this.isDialogVisible = false;
        this.loading = false;
        this.isDialogVisible = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao criar produto! Tente novamente mais tarde!',
        });
      }
    );
  }
}
