import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button/button.module';
import { StorybookComponent } from './storybook.component';

@NgModule({
  declarations: [StorybookComponent],
  imports: [
    ButtonModule,
  ],
  exports: [
    StorybookComponent
  ]
})
export class StorybookModule { }
