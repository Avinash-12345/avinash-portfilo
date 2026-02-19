// src/app/services/theme.service.ts
import { Injectable, signal, inject, PLATFORM_ID, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  readonly mode = signal<'light' | 'dark'>('light');

  constructor() {
    // 1. Load from localStorage immediately (Browser only)
    if (this.isBrowser) {
      const saved = localStorage.getItem('theme') as 'light' | 'dark';
      if (saved) {
        this.mode.set(saved);
      }
    }

    // 2. Define the effect in the constructor (Safe Injection Context)
    effect(() => {
      const currentMode = this.mode();
      
      // Only perform DOM operations if we are in the browser
      if (this.isBrowser) {
        this.applyTheme(currentMode);
        localStorage.setItem('theme', currentMode);
      }
    });
  }

  toggleTheme() {
    this.mode.update(m => m === 'light' ? 'dark' : 'light');
  }

  isDark() {
    return this.mode() === 'dark';
  }

  private applyTheme(mode: 'light' | 'dark') {
    document.documentElement.setAttribute('data-bs-theme', mode);
    document.documentElement.classList.toggle('dark-theme', mode === 'dark');
  }
}
