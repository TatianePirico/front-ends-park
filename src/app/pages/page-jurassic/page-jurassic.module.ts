import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/features/button/button.module';
import { SpeechBubbleModule } from 'src/app/features/speech-bubble/speech-bubble.module';

import { PageJurassicComponent } from './page-jurassic.component';
import { PageJurassicRoutingModule } from './page-jurassic.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageStepFiveComponent } from './page-step-five/page-step-five.component';
import { PageStepFourComponent } from './page-step-four/page-step-four.component';
import { PageStepOneComponent } from './page-step-one/page-step-one.component';
import { PageStepSixComponent } from './page-step-six/page-step-six.component';
import { PageStepThreeComponent } from './page-step-three/page-step-three.component';
import { PageStepTwoComponent } from './page-step-two/page-step-two.component';

@NgModule({
  declarations: [
    PageJurassicComponent,
    PageStepOneComponent,
    PageStepTwoComponent,
    PageStepThreeComponent,
    PageStepFourComponent,
    PageStepFiveComponent,
    PageStepSixComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageJurassicRoutingModule,
    ButtonModule,
    SpeechBubbleModule
  ],
})
export class PageJurassicModule {}
