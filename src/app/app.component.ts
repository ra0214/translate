import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerbSearchComponent } from './components/verb-search/verb-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerbSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'traductor';
}
