import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', redirectTo: 'menu', pathMatch: 'full' },
        { path: 'menu', component: MenuComponent }
    ] }
];
