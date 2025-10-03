import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [{ provide: APP_BASE_HREF, useValue: environment.baseHref }],
})
export class App {
  protected readonly title = signal('snackie');
}
