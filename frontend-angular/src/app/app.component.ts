import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Theme, findThemeById, mergeThemeOverrides } from './themes';
import { ThemePickerComponent } from './components/theme-picker.component';

interface Tokens {
  color: { primary: string; danger: string; background: string };
  spacing: { sm: string; md: string; lg: string };
  typography: { fontFamily: string; baseSize: string };
}

// Design-System Test Harness: fetches the same /api/design-tokens and
// /api/themes the React frontend consumes; the two renders are
// parity-tested against each other for visual/structural consistency.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ThemePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Design-System Harness (Angular)';
  tokens: Tokens | null = null;
  themes: Theme[] = [];
  selectedId = 'light';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Tokens>('/api/design-tokens').subscribe({
      next: (data) => (this.tokens = data),
      error: () => {},
    });
    this.http.get<{ themes: Theme[] }>('/api/themes').subscribe({
      next: (data) => (this.themes = data.themes),
      error: () => {},
    });
  }

  onSelect(id: string): void {
    this.selectedId = id;
  }

  activeTokens(): Tokens | null {
    if (!this.tokens) return null;
    const theme = findThemeById(this.themes, this.selectedId);
    return theme ? mergeThemeOverrides(this.tokens, theme.overrides) : this.tokens;
  }
}
