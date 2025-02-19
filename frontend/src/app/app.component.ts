import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MenubarModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Planning Order';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pedidos',
        icon: 'pi pi-home',
      },
      {
        label: 'Fornecedores',
        icon: 'pi pi-fw pi-truck',
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-cart-minus',
      },
      
    ]
  }

}
