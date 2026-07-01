import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gallery } from './components/gallery/gallery';
import { ButtonDirective } from 'primeng/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-images-gallery');
}

