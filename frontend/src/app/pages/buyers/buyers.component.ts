import { ButtonModule } from 'primeng/button';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { GenericPageComponent } from '../../components/generic-page/generic-page.component';
import { CommonModule } from '@angular/common';
import { BuyersService } from '../../services/buyers.service';
import Buyer from '../../models/Buyer';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-buyers',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent,
    HttpClientModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
  providers: [MessageService, BuyersService],
  templateUrl: './buyers.component.html',
  styleUrl: './buyers.component.scss',
})
export class BuyersComponent implements OnInit {
  buyers: Buyer[] = [];
  isDialogVisible: boolean = false;
  nameClient: string = '';
  loading: boolean = false;

  constructor(
    private buyersService: BuyersService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.buyersService.getAllBuyers().subscribe(
      (buyers) => {
        this.buyers = buyers;
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao carregar clientes! Tente novamente mais tarde!',
        });
      }
    );
  }

  showDialog() {
    this.isDialogVisible = true;
  }

  createBuyer() {
    this.loading = true;
    this.buyersService.createBuyer({ name: this.nameClient }).subscribe(
      (buyer) => {
        this.buyers.push(buyer);
        this.nameClient = '';
        this.isDialogVisible = false;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Cliente criado com sucesso!',
        });
      },
      () => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erro ao criar cliente! Tente novamente mais tarde!',
        });
      }
    );
  }
}
