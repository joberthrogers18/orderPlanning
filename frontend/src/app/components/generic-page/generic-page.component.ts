import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-generic-page',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './generic-page.component.html',
  styleUrl: './generic-page.component.scss'
})
export class GenericPageComponent {
  @Input() title!: string;
  @Input() data!: any[];
  @Input() tableHeaders!: TemplateRef<any>;
  @Input() tableBody!: TemplateRef<any>;
  @Input() dialogHeader!: string;
  @Input() dialogContent!: TemplateRef<any>;
  @Input() dialogFooter!: TemplateRef<any>;

  isDialogVisible: boolean = false;

  showDialog() {
    this.isDialogVisible = true;
  }
}
