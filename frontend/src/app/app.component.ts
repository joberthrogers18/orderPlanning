import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MenubarModule, HttpClientModule],
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
        routerLink: ['/'] 
      },
      {
        label: 'Fornecedores',
        icon: 'pi pi-fw pi-truck',
        routerLink: ['/suppliers']
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/clients'] 
      },
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-cart-minus',
        routerLink: ['/products'] 
      },
      
    ]
  }

}
