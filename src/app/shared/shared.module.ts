import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [CardModule, MenubarModule, InputTextModule, ButtonModule],
})
export class SharedModule {}
