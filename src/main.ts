import { appConfig } from './routes/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainPage } from './views/pages/private/main.page/main.page';

bootstrapApplication(MainPage, appConfig)
  .catch(err => console.error(err));