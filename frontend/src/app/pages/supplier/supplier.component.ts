import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { GenericPageComponent } from '../../components/generic-page/generic-page.component';
import { SuppliersService } from '../../services/suppliers.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import Supplier from '../../models/Supplier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier',
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent,
    ToastModule,
    ProgressSpinnerModule,
    CommonModule
  ],
  providers: [SuppliersService, MessageService],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss',
})
export class SupplierComponent {
  suppliers: Supplier[] = [];
  isDialogVisible: boolean = false;
  loading: boolean = false;
  nameSupplier: string = '';

  constructor(private suppliersService: SuppliersService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.loading = true;
    this.suppliersService.getAllSuppliers().subscribe(
      (suppliers: Supplier[]) => {
        this.suppliers = suppliers;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao carregar fornecedores! Tente novamente mais tarde!',
        });
      }
    );
  }

  showDialog() {
    this.isDialogVisible = true;
  }

  createSupplier() {
    this.loading = true;
    this.suppliersService.createSupplier({ name: this.nameSupplier }).subscribe(
      (supplier: Supplier) => {
        this.suppliers = [...this.suppliers, supplier];
        this.isDialogVisible = false;
        this.nameSupplier = '';
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Fornecedor criado com sucesso!',
        });
        this.loading = false;
      },
      () => {
        this.isDialogVisible = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao criar fornecedor! Tente novamente mais tarde!',
        });
        this.loading = false;
      }
    );
  }
}
