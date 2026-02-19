import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="themeService.toggleTheme()" 
            class="btn rounded-pill shadow-sm d-flex align-items-center gap-2"
            [class.btn-outline-dark]="!themeService.isDark()"
            [class.btn-outline-light]="themeService.isDark()">
      @if (themeService.isDark()) {
        <span>🌙 Dark</span>
      } @else {
        <span>☀️ Light</span>
      }
    </button>
  `,
  styles: [`
    :host {
      display: block;
      padding: 1rem;
    }
  `]
})
export class ThemeToggleComponent {
  protected readonly themeService = inject(ThemeService);
}
