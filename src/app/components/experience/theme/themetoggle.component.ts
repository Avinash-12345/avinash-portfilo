import { Component, inject, signal, afterNextRender, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="navbar navbar-expand-lg fixed-top shadow-sm"
      [class.bg-white]="!themeService.isDark()"
      [class.navbar-light]="!themeService.isDark()"
      [class.bg-dark]="themeService.isDark()"
      [class.navbar-dark]="themeService.isDark()"
    >
      <div class="container">
        <a class="navbar-brand fw-bold text-accent" href="#">
          {{ brandName }}
        </a>

        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"><a class="nav-link fw-medium" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link fw-medium" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link fw-medium" href="#skills">Skills</a></li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium" href="#tech-stack">Tech Stack</a>
            </li>
            <li class="nav-item"><a class="nav-link fw-medium" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link fw-medium" href="#github">Github Info</a></li>
            <!-- <li class="nav-item"><a class="nav-link fw-medium" href="#contact">Contact</a></li> -->
          </ul>

          <div class="d-flex align-items-center">
            <button
              (click)="themeService.toggleTheme()"
              class="btn btn-sm rounded-pill d-flex align-items-center gap-2 theme-btn"
              [class.btn-outline-dark]="!themeService.isDark()"
              [class.btn-outline-light]="themeService.isDark()"
            >
              <i [class]="themeService.isDark() ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill'"></i>
              <span>{{ themeService.isDark() ? 'Dark' : 'Light' }}</span>
            </button> 
            <p class="time-info mb-0 ms-3 d-flex align-items-center gap-1">
              <i class="bi bi-clock"></i>
              {{ currentTime() | date : 'hh:mm:ss a' }}
            </p>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        transition: all 0.3s ease;
        padding: 0.8rem 0;
      }
      .text-accent {
        color: #20c997 !important; /* Teal accent from your reference */
      }
      .nav-link {
        padding: 0.5rem 1.2rem !important;
        position: relative;
        transition: color 0.3s ease;
      }
      .nav-link:hover {
        color: #20c997 !important;
      }
      .theme-btn {
        padding: 0.4rem 1rem;
        font-weight: 500;
        font-size: 0.85rem;
      }
      @media (max-width: 991px) {
        .navbar-collapse {
          padding-top: 1rem;
        }
        .nav-link {
          padding: 0.5rem 0 !important;
        }
      }
    `,
  ],
})
export class ThemeToggleComponent {
  currentTime = signal(new Date());
  private intervalId: any;
  protected readonly themeService = inject(ThemeService);
  protected readonly brandName = 'avinashgara.com';
  constructor() {
    afterNextRender(() => {
      this.intervalId = setInterval(() => {
        this.currentTime.set(new Date());
      }, 1000);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
