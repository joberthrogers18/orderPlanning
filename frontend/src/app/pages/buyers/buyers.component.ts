import { ButtonModule } from 'primeng/button';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { GenericPageComponent } from '../../components/generic-page/generic-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buyers',
  imports: [
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    GenericPageComponent
  ],
  templateUrl: './buyers.component.html',
  styleUrl: './buyers.component.scss',
})
export class BuyersComponent {
  buyers: { id: string; name: string }[] = [
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
  nameClient = '';

  showDialog() {
    this.isDialogVisible = true;
  }
}
