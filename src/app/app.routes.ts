import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'products'
  },
  // Arquivos de rotas para varios componentes lazy-loaded
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(r => r.PRODUCT_ROUTES)
  },
  // Rota para o carrinho de um componente lazy-loaded
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart/cart.component').then(c => c.CartComponent)
  }
];
