import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { GenericPageComponent } from '../../components/generic-page/generic-page.component';

@Component({
  selector: 'app-supplier',
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent
  ],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss',
})
export class SupplierComponent {
  suppliers: { id: string; name: string }[] = [
    {
      id: '1',
      name: 'John Doe',
    },
    {
      id: '2',
      name: 'Jane Doe',
    },
  ];
  isDialogVisible = false;
  nameSupplier = '';

  showDialog() {
    this.isDialogVisible = true;
  }
}
