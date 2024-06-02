import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from 'igniteui-dockmanager/loader';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));

defineCustomElements();