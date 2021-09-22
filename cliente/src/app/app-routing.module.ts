import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DevicesComponent } from './components/devices/devices.component';
import { HomeComponent } from './components/home/home.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [

// Esta ruta es para enviar al home cuando no hay ninguna ruta cargada o error de ruta//
  { path: '', redirectTo: '/home', pathMatch: 'full' },

//Rutas modulos app
  { path: 'devices', component: DevicesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent},
  { path: 'crear-producto', component: CrearProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
