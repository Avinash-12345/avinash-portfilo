// src/app/components/experience/experience.component.ts
import { Component, inject } from '@angular/core';
import { ResumeService } from '../../../services/resume.service';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

// src/app/components/experience/experience.component.ts
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="container my-5">
      <div class="row">
        <div class="col-lg-4 mb-4">
          <div class="card border-0 shadow-sm sticky-top" style="top: 2rem;">
            <div class="card-body">
              <div class="text-center mb-4">
                <h2 class="h4 fw-bold text-primary">{{ resume.name() }}</h2>
                <p class="text-muted">{{ resume.role() }}</p>
              </div>

              <div class="mb-4">
                <h6 class="text-uppercase fw-bold small text-secondary border-bottom pb-1">
                  Contact
                </h6>
                <p class="mb-1 small">
                  <i class="bi bi-phone me-2"></i>{{ resume.personalInfo().mobile }}
                </p>
                <p class="mb-1 small">
                  <i class="bi bi-envelope me-2"></i>{{ resume.personalInfo().email }}
                </p>
                <p class="mb-0 small">
                  <i class="bi bi-geo-alt me-2"></i>{{ resume.personalInfo().location }}
                </p>
              </div>

              <div class="mb-4">
                <h6 class="text-uppercase fw-bold small text-secondary border-bottom pb-1">
                  Personal Details
                </h6>
                <p class="mb-1 small"><strong>DOB:</strong> {{ resume.personalInfo().dob }}</p>
                <p class="mb-0 small">
                  <strong>Gender:</strong> {{ resume.personalInfo().gender }}
                </p>
              </div>

              <div class="mb-4">
                <h6 class="text-uppercase fw-bold small text-secondary border-bottom pb-1">
                  Languages
                </h6>
                <div class="d-flex flex-wrap gap-2 mt-2">
                  @for (lang of resume.personalInfo().languages; track lang) {
                  <span class="badge bg-light text-dark border">{{ lang }}</span>
                  }
                </div>
              </div>

              <div>
                <h6 class="text-uppercase fw-bold small text-secondary border-bottom pb-1">
                  Education
                </h6>
                @for (edu of resume.education(); track edu.degree) {
                <div class="mb-2">
                  <p class="mb-0 fw-bold small">{{ edu.degree }}</p>
                  <p class="text-muted extra-small mb-0">{{ edu.institution }} ({{ edu.year }})</p>
                </div>
                }
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="mb-5">
            <h3
              class="h4 mb-4 border-bottom pb-2 text-uppercase fw-semibold d-flex align-items-center"
            >
              <i class="bi bi-briefcase me-2 text-primary"></i> Professional Experience
            </h3>

            @for (job of resume.experiences(); track job.company; let first = $first) {
            <div
              class="mb-4 ps-3 border-start border-3"
              [class.border-success]="first"
              [class.border-primary]="!first"
            >
              <div class="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h5 class="fw-bold mb-1">
                    {{ job.role }}
                    @if (first) { <span class="badge bg-success ms-2 small">Current</span> }
                  </h5>
                  <p class="text-primary fw-medium mb-2">{{ job.company }}</p>
                </div>
                <span class="badge bg-light text-dark border">{{ job.period }}</span>
              </div>

              <ul class="small text-muted">
                @for (h of job.highlights; track h) {
                <li>{{ h }}</li>
                }
              </ul>
            </div>
            }
          </div>

          <div class="mb-5">
            <h3 class="h4 mb-4 border-bottom pb-2 text-uppercase fw-semibold">
              <i class="bi bi-cpu me-2 text-primary"></i> Key Projects
            </h3>
            <div class="row g-3">
              @for (item of resume.projects(); track item.name) {
              <div class="col-md-6">
                <app-project-card [project]="item" />
              </div>
              }
            </div>
          </div>

          <div class="card border-0 shadow-sm mb-4 bg-gradient-qa">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="icon-box bg-success text-white rounded-circle me-3">
                  <i class="bi bi-shield-check"></i>
                </div>
                <h6 class="fw-bold mb-0">Enterprise Quality Assurance</h6>
              </div>

              <p class="small text-muted mb-3">
                Ensuring high-performance standards at <strong>Cognizant</strong> through modern
                engineering practices:
              </p>

              <div class="row g-2">
                <div class="col-md-6">
                  <div class="d-flex align-items-center p-2 bg-white rounded border border-light">
                    <i class="bi bi-layers text-primary me-2"></i>
                    <span class="extra-small fw-medium">NX Monorepo Architecture</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center p-2 bg-white rounded border border-light">
                    <i class="bi bi-check2-all text-success me-2"></i>
                    <span class="extra-small fw-medium">Vitest & Jest Testing</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center p-2 bg-white rounded border border-light">
                    <i class="bi bi-search text-warning me-2"></i>
                    <span class="extra-small fw-medium">SonarQube Analysis</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center p-2 bg-white rounded border border-light">
                    <i class="bi bi-lightning-charge text-danger me-2"></i>
                    <span class="extra-small fw-medium">Angular 21 Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
              <h6 class="text-uppercase fw-bold small text-secondary border-bottom pb-1 mb-3">
                Skill Mastery
              </h6>
              @for (skill of resume.skillMetrics(); track skill.name) {
              <div class="mb-3">
                <div class="d-flex justify-content-between mb-1">
                  <span class="small fw-medium">{{ skill.name }}</span>
                  <span class="extra-small text-muted">{{ skill.level }}%</span>
                </div>
                <div class="progress" style="height: 6px;">
                  <div
                    class="progress-bar bg-primary rounded-pill"
                    role="progressbar"
                    [style.width.%]="skill.level"
                    aria-valuenow="skill.level"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      /* 1. Typography & Colors */
      .text-gradient {
        background: linear-gradient(90deg, #0d6efd, #0dcaf0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .extra-small {
        font-size: 0.75rem;
      }

      /* 2. Professional Timeline Logic */
      .border-start {
        position: relative;
        transition: all 0.3s ease;
      }

      /* The Timeline Dot */
      .border-start::before {
        content: '';
        position: absolute;
        left: -9px; /* Centered on the 3px border */
        top: 5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        border: 3px solid;
        z-index: 1;
      }

      /* Color-coding the Dot based on the border class */
      .border-success::before {
        border-color: #198754;
      }
      .border-primary::before {
        border-color: #0d6efd;
      }

      /* 3. Sidebar & Navigation */
      .sticky-top {
        top: 2rem;
        z-index: 100;
      }

      /* 4. QA Card & Items */
      .bg-gradient-qa {
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border: 1px solid rgba(0, 0, 0, 0.05) !important;
      }

      .icon-box {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        box-shadow: 0 4px 10px rgba(25, 135, 84, 0.2);
      }

      .qa-item {
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .qa-item:hover {
        background-color: #fff !important;
        border-color: #0d6efd !important;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
      }

      /* 5. Clean Card Styles */
      .card {
        border-radius: 12px;
      }

      .badge {
        font-weight: 500;
        letter-spacing: 0.3px;
      }

      /* 6. Utility Gap for Icons */
      i.bi {
        vertical-align: middle;
        line-height: 1;
      }
    `,
  ],
})
export class ExperienceComponent {
  protected readonly resume = inject(ResumeService);
}
