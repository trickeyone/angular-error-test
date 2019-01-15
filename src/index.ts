import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MyComponent} from './my-component';

const declarations = [
  MyComponent,
];

@NgModule({imports: [CommonModule], declarations: declarations, exports: declarations})
export class MyModule {
}
