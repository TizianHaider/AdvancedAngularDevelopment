import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
  DefaultRouterStateSerializer,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { reducers } from './store';
import { CustomSerializer } from './store/reducers/router.reducer';
import { AuthModule } from './auth/auth.module';
import { FBAuthInterceptor } from './auth/fbauth.interceptor';
import { GlobalErrHandler } from './error/global-err-handler';
import { ErrPageComponent } from './error/err-page/err-page.component';
// import { interceptorProvider } from './interceptors/interceptor-provider';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'ngDemo App',
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: DefaultRouterStateSerializer,
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrHandler },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FBAuthInterceptor,
      multi: true,
    },
    // ,interceptorProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
