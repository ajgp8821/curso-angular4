import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';

// Configuracion de las rutas
const appRoutes: Routes = [
    {path: '', component: EmpleadoComponent}, // Ruta inicial
    {path: 'empleado', component: EmpleadoComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: '**', component: EmpleadoComponent} // Si la ruta no existe
];

// Lo usa Angular para cargar el provider de las rutas
export const appRoutingProviders: any[] = [];

// Que array de rutas debe cargar
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);