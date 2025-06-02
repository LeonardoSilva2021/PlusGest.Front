import { appConfig } from './config/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { IndexComponent } from './index.component';

bootstrapApplication(IndexComponent, appConfig)
  .catch(err => console.error(err));