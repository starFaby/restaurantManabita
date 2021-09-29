import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatosespecialesComponent } from 'src/app/views/home/platosespeciales/platosespeciales.component';
import { SabadodomingoComponent } from 'src/app/views/home/sabadodomingo/sabadodomingo.component';
import { NofoundComponent } from 'src/app/views/nofound/nofound.component';
import { StartComponent } from 'src/app/views/start/start.component';


export const AdminlayoutRoutingModule: Routes = [
  {path: '' , component: StartComponent},
  {path: 'nofound' , component: NofoundComponent},
  {path: 'sado' , component: SabadodomingoComponent},
  {path: 'paes' , component: PlatosespecialesComponent}
];
