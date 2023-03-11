import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

// Prime NG
import { MenubarModule } from 'primeng/menubar';


const COMPONENTS = [NavbarComponent];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [CommonModule, MenubarModule, BrowserAnimationsModule]
})

export class SharedModule { }


