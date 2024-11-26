import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuList = [
    { id: 'Menu1', link: '/menu1', bg: 'bg-primary btn text-white', faicon: 'fa fa-fw fa-circle-info' },
    { id: 'Menu2', link: '/menu2', bg: 'bg-primary btn text-white', faicon: 'fa fa-fw fa-circle-info' },
    { id: 'Menu3', link: '/menu3', bg: 'bg-primary btn text-white', faicon: 'fa fa-fw fa-circle-info' },
  ];

  ngOnInit() 
  {
    console.log(this.menuList);
  }
}
