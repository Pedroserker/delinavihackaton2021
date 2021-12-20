import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { JumboviewComponent } from './view/jumboview/jumboview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule,NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NebularComponent } from './view/nebular/nebular.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboviewComponent,
    NebularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
