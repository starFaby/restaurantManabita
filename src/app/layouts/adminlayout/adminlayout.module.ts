import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminlayoutRoutingModule } from './adminlayout-routing.module';
import { RouterModule } from '@angular/router';
import { StartComponent } from 'src/app/views/start/start.component';
import { AngularmaterialModule } from 'src/app/util/angularmaterial/angularmaterial.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { SabadodomingoComponent } from 'src/app/views/home/sabadodomingo/sabadodomingo.component';
import { PlatosespecialesComponent } from 'src/app/views/home/platosespeciales/platosespeciales.component';


@NgModule({
  declarations: [
    StartComponent,
    SabadodomingoComponent,
    PlatosespecialesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminlayoutRoutingModule),
    AngularmaterialModule,
    NgbModule,
    FormsModule,
    GoogleMapsModule
  ]
})
export class AdminlayoutModule { }
