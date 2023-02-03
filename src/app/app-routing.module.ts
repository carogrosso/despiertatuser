import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { TalleresComponent } from './components/talleres/talleres.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "servicios", component: ServiciosComponent},
  {path: "talleres", component: TalleresComponent},
  {path: "blog", component: BlogComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "sobremi", component: SobremiComponent},
  {path: "productos", component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
