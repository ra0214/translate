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
      this.verbs = data.map(verb => ({
        ...verb,
        type: this.determineVerbType(verb)
      }));
      this.filteredVerbs = this.verbs;
    });
  }
  
  determineVerbType(verb: any): string {
    // Un verbo es regular si su pasado simple y participio pasado
    // se forman añadiendo -ed al infinitivo (quitando -E final si existe)
    const base = verb.infinitive.endsWith('E') 
      ? verb.infinitive.slice(0, -1) 
      : verb.infinitive;
      
    const isRegular = verb.pastSimple === `${base}ED` && 
                      verb.pastParticiple === `${base}ED`;
                      
    return isRegular ? 'regular' : 'irregular';
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
