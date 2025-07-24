import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { CoreModule } from './core/core.module';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(
      IonicModule.forRoot(),
      CoreModule
    ),
    provideRouter(routes)
  ]
}; 