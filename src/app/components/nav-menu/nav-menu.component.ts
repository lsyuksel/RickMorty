import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {
  menus = [
    {
      path: '',
      title: 'Home page',
      icon: 'fa-solid fa-house'
    },
    {
      path: 'characters',
      title: 'Characters',
      icon: 'fa fa-users'
    },
  ]
}
