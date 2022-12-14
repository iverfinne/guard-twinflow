import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { UsersComponent } from './users/users.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { DocsComponent } from './docs/docs.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MatTableModule, BrowserAnimationsModule, AppRoutingModule, PdfViewerModule,  ],
  declarations: [ AppComponent, HelloComponent, LogoutComponent, LoginComponent, HomeComponent, UsersComponent, AboutComponent, DemoComponent, DocsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }  
  ],
  exports: [ MatTableModule ]
})
export class AppModule { }
