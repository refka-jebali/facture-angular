import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
   provideHttpClient(),
    
    //injecter in-memory-data.service.ts
    //comme il est @Injectable
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:200})
    ])
  ]
};
