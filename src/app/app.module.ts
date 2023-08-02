import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoContainerComponent } from './component/info-container/info-container.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { DescriptionContainerComponent } from './component/description-container/description-container.component';
import { CpfMaskDirective } from './app.directive';
@NgModule({
  declarations: [
    AppComponent,
    CpfMaskDirective,
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    ButtonComponent,
    CardComponent,
    FooterComponent,
    InfoContainerComponent,
    StepperComponent,
    DescriptionContainerComponent,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CpfMaskDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
