import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from '../pets/pets.component';
import { AcessoComponent } from './acesso.component';

const routes: Routes = [
  { path: '', component: AcessoComponent , children:[
    {path: 'pets', loadChildren: () => import('./../pets/pets.module').then(m => m.PetsModule) },
    {path: 'users', loadChildren: () => import('./../user/user.module').then(m => m.UserModule) },
    {path: 'store', loadChildren: () => import('./../store/store.module').then(m => m.StoreModule)},
    {path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
