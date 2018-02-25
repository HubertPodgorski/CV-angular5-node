import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { HeaderMainPageComponent } from './header-main-page/header-main-page.component';
import { FooterMainPageComponent } from './footer-main-page/footer-main-page.component';
import { AboutMainPageComponent } from './about-main-page/about-main-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainPageComponent, HeaderMainPageComponent, FooterMainPageComponent, AboutMainPageComponent]
})
export class MainPageModule { }
