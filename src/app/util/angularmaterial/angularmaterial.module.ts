import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

const AngularMaterialComponents = [
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialComponents
  ],
  exports: [AngularMaterialComponents]
})
export class AngularmaterialModule { }
