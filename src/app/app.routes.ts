// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/experience/project-card/project-card.component.js').then(m => m.ProjectCardComponent),
    title: 'Avinash Gara | Portfolio'
  },
  {
    path: 'projects',
    loadComponent: () => import('./components/experience/project-gallery/project-gallery.component.js').then(m => m.ProjectGalleryComponent),
    title: 'My Work'
  },
  {
    path: 'experience',
    loadComponent: () => import('./components/experience/experience/experience.component.js').then(m => m.ExperienceComponent),
    title: '7 Years Experience'
  },
  { path: '**', redirectTo: '' }
];
