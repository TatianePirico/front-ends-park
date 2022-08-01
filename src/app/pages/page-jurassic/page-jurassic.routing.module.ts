import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageJurassicComponent } from './page-jurassic.component';
import { PageStepFiveComponent } from './page-step-five/page-step-five.component';
import { PageStepFourComponent } from './page-step-four/page-step-four.component';
import { PageStepOneComponent } from './page-step-one/page-step-one.component';
import { PageStepSixComponent } from './page-step-six/page-step-six.component';
import { PageStepThreeComponent } from './page-step-three/page-step-three.component';
import { PageStepTwoComponent } from './page-step-two/page-step-two.component';

export const routes: Routes = [
  {
    path: '',
    component: PageJurassicComponent,
    children: [
      {
        path: '',
        component: PageStepOneComponent,
      },
      {
        path: 'step-2',
        component: PageStepTwoComponent,
      },
      {
        path: 'step-3',
        component: PageStepThreeComponent,
      },
      {
        path: 'step-4',
        component: PageStepFourComponent,
      },
      {
        path: 'step-5',
        component: PageStepFiveComponent,
      },
      {
        path: 'step-6',
        component: PageStepSixComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageJurassicRoutingModule {}
