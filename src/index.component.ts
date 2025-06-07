import { Component } from '@angular/core';
import { MainPage } from './views/pages/private/main.page/main.page';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'index-component',
  imports: [MainPage, RouterOutlet],
  template: `
    <main-page></main-page>
    <router-outlet></router-outlet>
  `,
  styles: `
        :host {
            display: flex;
            height: 100%;
            width: 100%;
        }
    `,
})
export class IndexComponent {}
