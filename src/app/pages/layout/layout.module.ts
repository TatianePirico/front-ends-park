import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'src/app/features/alert/alert.module';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [ CommonModule, LayoutRoutingModule, AlertModule],
  providers: [],
})
export class LayoutModule {}
