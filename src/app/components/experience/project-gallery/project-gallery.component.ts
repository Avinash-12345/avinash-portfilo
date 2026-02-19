// src/app/components/project-gallery/project-gallery.component.ts
import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume.service';
import { ProjectCardComponent } from '../project-card/project-card.component'; // Removed .js extension

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <div class="container py-4">
      <div class="row g-4">
        @for (project of resume.projects(); track project.name) {
          <div class="col-md-6 col-lg-4">
            @defer (on viewport; prefetch on idle) {
              <app-project-card [project]="project" />
            } 
            @placeholder {
              <div class="card shadow-sm h-100 border-0" aria-hidden="true">
                <div class="card-body">
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                  <p class="card-text placeholder-glow">
                    <span class="placeholder col-7"></span>
                    <span class="placeholder col-4"></span>
                  </p>
                </div>
              </div>
            }
            @loading (minimum 800ms) {
              <div class="text-center p-4">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            @error {
              <div class="alert alert-danger">
                Failed to load {{ project.name }} details. [cite: 66]
              </div>
            }
          </div>
        }
      </div>
    </div>
  `
})
export class ProjectGalleryComponent {
  protected readonly resume = inject(ResumeService);
}
