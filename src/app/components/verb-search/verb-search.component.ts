import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-verb-search',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './verb-search.component.html',
  styleUrls: ['./verb-search.component.css'],
})
export class VerbSearchComponent {
  searchTerm: string = '';
  verbs: any[] = [];
  filteredVerbs: any[] = [];

  constructor(private http: HttpClient) {
    this.loadVerbs();
  }

  loadVerbs() {
    this.http.get<any[]>('assets/verbs.json').subscribe((data) => {
      this.verbs = data;
      this.filteredVerbs = data;
    });
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
    this.filterVerbs();
  }

  filterVerbs() {
    this.filteredVerbs = this.verbs.filter(
      (verb) =>
        verb.infinitive.toLowerCase().includes(this.searchTerm) ||
        verb.translation.toLowerCase().includes(this.searchTerm)
    );
  }
}
