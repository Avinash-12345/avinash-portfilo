// src/app/components/experience/experience.component.ts
import { Component, inject, signal } from '@angular/core';
import { ResumeService } from '../../../services/resume.service';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { GithubService } from '../../../services/github.service.js';

// src/app/components/experience/experience.component.ts
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="portfolio-wrapper container">
      <section class="container py-5 mt-5 mb-5">
        <div class="row align-items-center">
          <div class="col-md-7">
            <h4 class="text-accent fw-bold mb-2">Hello! I'm</h4>
            <h1 class="display-3 fw-bolder mb-3">{{ resume.name() }}</h1>
            <p class="text-muted">
              <i class="bi bi-linkedin me-2"><a href="https://www.linkedin.com/in/adityadomle"></a></i>
              <i class="bi bi-github me-2"><a href="https://www.linkedin.com/in/adityadomle"></a></i>
              <i class="bi bi-geo-alt"></i> {{ resume.personalInfo().location }}, India
            </p>

            <p class="lead text-muted mb-4" style="max-width: 600px;">
              A <span class="text-dark fw-bold">{{ resume.role() }}</span> with
              <span class="text-dark fw-bold">{{ resume.experienceYears() }} years</span> of
              experience building scalable enterprise solutions and big data visualizations.
            </p>
            <div class="d-flex gap-3">
              <button class="btn btn-accent px-4 py-2">
                <i class="bi bi-calendar2"></i>
                <a class="text-decoration-none text-white ps-3" href="mailto:avinash.gara@gmail.com"
                  >Schedule a call</a
                >
              </button>
              <button class="btn btn-outline-dark px-4 py-2">Resume</button>
            </div>
          </div>
          <div class="col-md-5 text-center d-none d-md-block">
            <div
              class="hero-image-container shadow-lg rounded-4 mx-auto overflow-hidden mt-5"
              style="width: 300px; height: 350px;"
            >
              @if (profile()) {
              <img
                [src]="profile()!.avatar_url"
                alt="Avinash Gara - Senior Front-End Developer"
                class="img-fluid w-100 h-100 object-fit-cover shadow-glow"
              />
              }
            </div>
          </div>
        </div>
      </section>

      <section class="container py-5 border-top" id="about">
        <h2 class="section-title">About Me</h2>
        <div class="row">
          <div class="col-lg-12">
            <p class="text-secondary mb-4" style="font-size: 1.1rem; line-height: 1.8;">
              I am a dedicated <strong>Senior Front-End Developer</strong> based in
              {{ resume.personalInfo().location }}, India, with over
              <strong>{{ resume.experienceYears() }} years</strong> of professional experience in
              crafting scalable, enterprise-grade web applications. My journey in software
              engineering began with a <strong>B.Tech from JNTU Kakinada</strong>, and has evolved
              into a deep specialization in the <strong>Angular ecosystem</strong>.
            </p>

            <p class="text-secondary mb-4" style="font-size: 1.1rem; line-height: 1.8;">
              Currently, at <strong>Cognizant Technology Services</strong>, I am driving innovation
              in <strong>Big Data Analytics</strong>. I architect comprehensive workflow engines and
              engineer high-performance visualization tools to render complex signal data from
              <strong>Parquet files</strong> into interactive, real-time line charts.
            </p>

            <p class="text-secondary mb-4" style="font-size: 1.1rem; line-height: 1.8;">
              I am a strong advocate for modern engineering standards, utilizing
              <strong>NX Monorepos</strong> for architectural scalability and ensuring
              uncompromising code quality through <strong>SonarQube</strong> and advanced testing
              suites like <strong>Vitest and Jest</strong>. My goal is to continuously push the
              boundaries of what's possible on the web by blending performance-driven engineering
              with intuitive UI/UX design.
            </p>

            <div class="row mt-5 g-4">
              <div class="col-6 col-md-3">
                <div class="p-3 border rounded text-center bg-light">
                  <h3 class="fw-bold text-accent mb-1">{{ resume.experienceYears() }}+</h3>
                  <span class="extra-small text-uppercase text-muted fw-bold">Years Exp.</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="p-3 border rounded text-center bg-light">
                  <h3 class="fw-bold text-accent mb-1">{{ resume.totalProjects() }}</h3>
                  <span class="extra-small text-uppercase text-muted fw-bold">Key Projects</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="p-3 border rounded text-center bg-light">
                  <h3 class="fw-bold text-accent mb-1">5+</h3>
                  <span class="extra-small text-uppercase text-muted fw-bold">Companies</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="p-3 border rounded text-center bg-light">
                  <h3 class="fw-bold text-accent mb-1">21</h3>
                  <span class="extra-small text-uppercase text-muted fw-bold">Angular Version</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container py-5 border-top" id="services">
        <div class="text-center mb-5">
          <h6 class="text-accent fw-bold text-uppercase">Services</h6>
          <h2 class="display-5 fw-bolder">
            Code that solves problems,<br />
            one product at a time.
          </h2>
        </div>

        <div class="row g-5">
          <!-- Column 1 -->
          <div class="col-md-4">
            <div class="service-card h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-code-slash fs-1 text-accent"></i>
              </div>
              <h5 class="fw-bold mb-3">What I can do for you</h5>
              <p class="text-muted">Deliver faster, better products that users love.</p>
              <ul class="list-unstyled small">
                <li>• Design Strategy</li>
                <li>• Web & Mobile App Design</li>
                <li>• Front-end Development</li>
                <li>• Back-end Development</li>
                <li>• Fullstack Development</li>
              </ul>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="col-md-4">
            <div class="service-card h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-layers fs-1 text-accent"></i>
              </div>
              <h5 class="fw-bold mb-3">Applications I'm fluent in</h5>
              <ul class="list-unstyled small">
                <li>• Sketch</li>
                <li>• Webflow</li>
                <li>• Figma</li>
                <li>• Angular Ecosystem</li>
                <li>• NX Monorepo</li>
              </ul>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="col-md-4">
            <div class="service-card h-100">
              <div class="service-icon mb-3">
                <i class="bi bi-person-check fs-1 text-accent"></i>
              </div>
              <h5 class="fw-bold mb-3">What you can expect</h5>
              <ul class="list-unstyled small">
                <li><strong>Clean & Functional:</strong> Intuitive design.</li>
                <li><strong>Device Friendly:</strong> Seamless UX across devices.</li>
                <li><strong>Maintainable:</strong> Scalable enterprise code.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="container py-5 border-top" id="skills">
        <h2 class="section-title">Skills</h2>
        <div class="row">
          @for (skill of resume.skillMetrics(); track skill.name) {
          <div class="col-md-6 mb-4">
            <div class="d-flex justify-content-between mb-1">
              <span class="fw-bold">{{ skill.name }}</span>
              <span class="text-muted">{{ skill.level }}%</span>
            </div>
            <div class="progress custom-progress">
              <div class="progress-bar" [style.width.%]="skill.level"></div>
            </div>
          </div>
          }
        </div>
      </section>

      <section class="container py-5 border-top" id="experience">
        <h2 class="section-title">Experience</h2>
        <div class="timeline">
          @for (job of resume.experiences(); track job.company; let first = $first) {
          <div class="timeline-item pb-5">
            <div class="timeline-marker" [class.current]="first"></div>
            <div class="timeline-content ps-4">
              <h5 class="fw-bold mb-1 text-accent">{{ job.role }}</h5>
              <h6 class="fw-bold mb-1">{{ job.company }}</h6>
              <small class="text-muted d-block mb-3">{{ job.period }}</small>
              <ul class="text-secondary small">
                @for (h of job.highlights; track h) {
                <li>{{ h }}</li>
                }
              </ul>
            </div>
          </div>
          }
        </div>
      </section>

      <section class="container py-5 border-top" id="tech-stack">
        <div class="text-center mb-5">
          <h2 class="section-title mb-2">Tech Stack</h2>
          <p class="text-muted">These are the technologies I work with to bring ideas to life.</p>
        </div>

        <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4 g-4 justify-content-center">
          <div class="col">
            <div class="tech-card">
              <i class="bi bi-patch-check text-accent fs-1"></i>
              <span class="mt-2 fw-bold">Angular 21</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-boxes text-accent fs-1"></i>
              <span class="mt-2 fw-bold">NX Monorepo</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-braces text-accent fs-1"></i>
              <span class="mt-2 fw-bold">Node.js</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-terminal text-accent fs-1"></i>
              <span class="mt-2 fw-bold">Python</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-palette text-accent fs-1"></i>
              <span class="mt-2 fw-bold">Figma</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-code-square text-accent fs-1"></i>
              <span class="mt-2 fw-bold">VS Code</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-lightning-charge text-accent fs-1"></i>
              <span class="mt-2 fw-bold">Vercel</span>
            </div>
          </div>

          <div class="col">
            <div class="tech-card">
              <i class="bi bi-shield-check text-accent fs-1"></i>
              <span class="mt-2 fw-bold">Vitest / Jest</span>
            </div>
          </div>
        </div>
      </section>

      <section class="container py-5 border-top" id="projects">
        <h2 class="section-title">Projects</h2>
        <div class="row g-4">
          @for (item of resume.projects(); track item.name) {
          <div class="col-md-6 col-lg-4">
            <app-project-card [project]="item" />
          </div>
          }
        </div>
      </section>

      <section class="container py-5 border-top mb-5" id="github">
        <div class="row">
          <div class="col-md-12">
            <div class="github-wrapper">
              <h1>GitHub Contributions</h1>
              <div class="legend">
                <span>Less</span>
                <div class="box" style="background:#ebedf0"></div>
                <div class="box" style="background:#9be9a8"></div>
                <div class="box" style="background:#40c463"></div>
                <div class="box" style="background:#30a14e"></div>
                <div class="box" style="background:#216e39"></div>
                <span>More</span>
              </div>
              <div class="heatmap-container">
                <div class="months">
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                  <span>Jan</span>
                  <span>Feb</span>
                </div>
                <div class="heatmap">
                  @for (week of contributionWeeks(); track $index) { @for (day of week; track
                  $index) {
                  <div
                    class="day"
                    [style.background]="getColor(day?.count ?? 0)"
                    [title]="day?.date + ' — ' + day?.count + ' contributions'"
                  ></div>
                  } }
                </div>
              </div>

              @if (totalContributions()) {
              <p class="total">{{ totalContributions() }} contributions in the last year</p>
              } @if (profile()) {
              <div class="stats">
                <div class="github-card">
                  <i class="bi bi-people me-2"></i>
                  <p>Followers</p>
                  <p>{{ profile().followers }}</p>
                </div>

                <div class="github-card">
                  <i class="bi bi-person-check me-2"></i>
                  <p>Following</p>
                  <p>{{ profile().following }}</p>
                </div>

                <div class="github-card">
                  <i class="bi bi-flag me-2"></i>
                  <p>Repos</p>
                  <p>{{ profile().public_repos }}</p>
                </div>
                <div class="github-card">
                  <i class="bi bi-heart mb-0"></i>
                  <p>Love Count</p>
                  <p>{{ profile().public_repos }}</p>
                </div>
                <div class="github-card">
                  <i class="bi bi-eye me-2"></i>
                  <p>Views</p>
                  <p>{{ profile().public_repos }}</p>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="container py-5 border-top mb-5" id="contact">
        <h2 class="section-title">Contact</h2>
        <div class="row">
          <div class="col-md-5">
            <h5 class="fw-bold mb-3">Get in Touch</h5>
            <p class="text-muted-foreground mb-6">
              Feel free to reach out if you have any questions or if you'd like to work together on
              a project. I typically respond within 30 hours.
            </p>
            <p class="text-muted">
              <i class="bi bi-envelope me-2"></i> {{ resume.personalInfo().email }}
            </p>
            <p class="text-muted">
              <i class="bi bi-phone me-2"></i> {{ resume.personalInfo().mobile }}
            </p>
            <p class="text-muted">
              <i class="bi bi-geo-alt me-2"></i> {{ resume.personalInfo().location }}
            </p>
          </div>
          <div class="col-md-7">
            <form class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="col-12">
                <textarea class="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-accent w-100 py-2">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section> -->
    </div>
  `,
  styles: [
    `
      :root {
        --accent-color: #20c997;
      } /* Teal color from UI capture */
      .text-accent {
        color: #20c997;
      }

      .github-wrapper {
        background: #ffffff;
        border: 1px solid #d0d7de;
        border-radius: 6px;
        padding: 20px;
        color: #24292f;
      }
      .legend {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        margin-top: 10px;
        color: #57606a;
      }

      .box {
        width: 14px;
        height: 14px;
        border-radius: 3px;
      }

      .heatmap-container {
        overflow-x: auto;
      }
      .heatmap {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 14px;
        grid-template-rows: repeat(7, 14px);
        gap: 4px;
      }

      .heatmap::-webkit-scrollbar {
        height: 6px;
      }

      .heatmap::-webkit-scrollbar-thumb {
        background: #30363d;
        border-radius: 10px;
      }

      .week {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 12px;
      }

      .day {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        background: #ebedf0;
      }

      @media (max-width: 768px) {
        .day {
          width: 8px;
          height: 8px;
        }
      }

      .stats {
        display: flex;
        gap: 20px;
        margin-top: 40px;
      }
      .months {
        display: grid;
        grid-auto-flow: column;
        font-size: 12px;
        margin-bottom: 8px;
        color: #57606a;
      }
      .github-card {
        background: white;
        padding: 15px;
        border-radius: 16px;
        border: 0.001px solid #1f2937;
        text-align: center;
        width: 20%;
      }
      .github-card p {
        margin-bottom: 0px;
      }
      .portfolio-wrapper {
        background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 0);
        background-size: 24px 24px;
        background-position: 0 0;
      }
      .btn-accent {
        background-color: #20c997;
        color: white;
        border: none;
      }
      .btn-accent:hover {
        background-color: #1ba87e;
        color: white;
      }

      .section-title {
        font-weight: 800;
        font-size: 2rem;
        margin-bottom: 2.5rem;
        text-transform: capitalize;
      }

      /* Timeline Styling */
      .timeline {
        border-left: 2px solid #e9ecef;
        position: relative;
        margin-left: 10px;
      }
      .timeline-item {
        position: relative;
      }
      .timeline-marker {
        position: absolute;
        left: -9px;
        top: 0;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #dee2e6;
        border: 3px solid white;
      }
      .timeline-marker.current {
        background: #20c997;
      }

      .hero-image-container {
        border: 2px solid rgba(32, 201, 151, 0.2); /* Subtle teal border */
        position: relative;
        transition: transform 0.3s ease;
      }

      .hero-image-container:hover {
        transform: scale(1.02);
      }

      .shadow-glow {
        /* Creates that 'illuminated' look from the laptop screen */
        filter: brightness(1.1) contrast(1.05);
      }

      .hero-image-container::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
        pointer-events: none;
      }

      /* Progress Bars */
      .custom-progress {
        height: 8px;
        background-color: #f1f3f5;
        border-radius: 10px;
      }
      .custom-progress .progress-bar {
        background-color: #20c997;
        border-radius: 10px;
      }

      .service-card {
        padding: 2rem;
        border-radius: 16px;
        transition: all 0.3s ease;
        background: white;
        border: 1px solid #f1f3f5;
      }

      .service-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      }

      .service-icon {
        width: 60px;
        height: 60px;
        background: rgba(32, 201, 151, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      :host-context([data-bs-theme='dark']) .service-card {
        background: #1e1e1e;
        border-color: #2a2a2a;
      }

      :host-context([data-bs-theme='dark']) .service-card:hover {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }

      /* Forms */
      .form-control {
        border: 1px solid #dee2e6;
        padding: 0.75rem;
      }
      .form-control:focus {
        border-color: #20c997;
        box-shadow: none;
      }

      .tech-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 12px;
        transition: all 0.3s ease;
      }

      .tech-card:hover {
        background: #f8f9fa; /* Light grey background on hover */
        border-color: #e9ecef;
        transform: translateY(-5px);
      }

      .tech-card span {
        font-size: 0.9rem;
        color: #495057;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Dark mode support for tech cards */
      :host-context([data-bs-theme='dark']) .tech-card:hover {
        background: #2b3035;
        border-color: #373b3e;
      }

      :host-context([data-bs-theme='dark']) .tech-card span {
        color: #dee2e6;
      }
    `,
  ],
})
export class ExperienceComponent {
  private github = inject(GithubService);
  profile = signal<any>(null);
  totalContributions = signal<number>(0);
  contributions = signal<any | null>(null);
  contributionWeeks = signal<any[][]>([]);

  protected readonly resume = inject(ResumeService);
  getColor(count: number): string {
    if (count === 0) return '#ebedf0';
    if (count < 3) return '#9be9a8';
    if (count < 6) return '#40c463';
    if (count < 10) return '#30a14e';
    return '#216e39';
  }
  constructor() {
    this.github.getProfile().subscribe({
      next: (data) => this.profile.set(data),
      error: () => this.profile.set(null),
    });

    this.github.getContributions().subscribe({
      next: (data) => {
        if (!data?.contributions) return;

        const days = data.contributions;

        // 🔥 Convert flat array into weeks (7 days each)
        const weeks: any[][] = [];
        for (let i = 0; i < days.length; i += 7) {
          weeks.push(days.slice(i, i + 7));
        }

        this.contributionWeeks.set(weeks);

        // total
        if (data?.total) {
          const firstYear = Object.keys(data.total)[0];
          this.totalContributions.set(data.total[firstYear] ?? 0);
        }
      },
      error: () => {
        this.contributionWeeks.set([]);
        this.totalContributions.set(0);
      },
    });
  }
}
