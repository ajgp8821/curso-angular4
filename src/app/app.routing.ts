import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';

// Configuracion de las rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent}, // Ruta inicial
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: '**', component: HomeComponent} // Si la ruta no existe
];

// Lo usa Angular para cargar el provider de las rutas
export const appRoutingProviders: any[] = [];

// Que array de rutas debe cargar
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);