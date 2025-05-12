import { RouterModule, Routes } from "@angular/router";

//ESTAS SON LAS RUTAS QUE SE VAN A CONFIGURAR Y SE IMPORTARON
import { HomeComponent } from './components/home/home.component';
import { CamiloComponent } from "./components/camilo/camilo.component";


const APP_ROUTES:Routes=[

{path: 'home', component: HomeComponent }, //Se define el Home
{path: 'camilo', component: CamiloComponent }, //Se define camilo

{path: '**', pathMatch: 'full',redirectTo:'home'}, //nn = home
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);  