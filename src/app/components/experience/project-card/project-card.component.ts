// src/app/components/project-card/project-card.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../models/resume.model.js';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card h-100 shadow-sm border-0 transition-hover">
      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <h3 class="h5 card-title fw-bold text-dark mb-0">
            {{ project().name }}
          </h3>
          <span class="badge bg-light text-muted border fw-normal">
            {{ project().duration }}
          </span>
        </div>

        <p class="card-text text-secondary mb-4 flex-grow-1">
          {{ project().description }}
        </p>

        <div class="mt-auto">
          <div class="d-flex flex-wrap gap-1">
            @for (skill of project().technologies; track skill) {
            <span
              class="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3"
            >
              {{ skill }}
            </span>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .transition-hover {
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      }
      .transition-hover:hover {
        transform: translateY(-5px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
      }
      .card {
        border: none;
        background: #fff;
        transition: transform 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      }
      .card:hover {
        transform: translateY(-10px);
      }
    `,
  ],
})
export class ProjectCardComponent {
  // Using your Project interface for type safety
  project = input.required<Project>();
}
