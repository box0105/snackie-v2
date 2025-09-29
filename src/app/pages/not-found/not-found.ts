import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [Header],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  router = inject(Router);

  goMenu() {
    this.router.navigate(['/foods']);
  }
}
