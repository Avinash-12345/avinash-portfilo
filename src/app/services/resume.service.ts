// src/app/services/resume.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Project, Experience, Education, Certification } from '../models/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  // 1. Define the State using Signals
  readonly name = signal('Avinash Gara');
  readonly role = signal('Senior Front-End Developer');

  readonly experienceYears = computed(() => {
    const startDate = new Date(2018, 0, 1); // Jan 2018
    const now = new Date();
    const diffInMs = now.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return parseFloat(diffInYears.toFixed(1)); // e.g., 8.1
  });

  readonly personalInfo = signal({
    location: 'Hyderabad',
    dob: 'Jan 10, 1993',
    gender: 'Male',
    mobile: '+91-9618038333',
    email: 'avinash.gara@gmail.com',
    socials: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/avinashgara' },
      { platform: 'GitHub', url: 'https://github.com/avinashgara' },
    ],
    languages: ['English', 'Telugu', 'Hindi'],
  });

  // Skills with proficiency levels for progress bars
  readonly skillMetrics = signal([
    { name: 'Angular 21 / TypeScript', level: 95 },
    { name: 'NX Monorepo', level: 90 },
    { name: 'Data Visualization (Parquet)', level: 85 },
    { name: 'Testing (Vitest/Jest)', level: 80 },
    { name: 'Mobile (Ionic/React Native)', level: 75 }
  ]);

  readonly education = signal<Education[]>([
    {
      degree: 'B.Tech (Computer Science)',
      institution: 'JNTU Kakinada',
      year: '2015',
    },
  ]);
  // Certifications
  readonly certifications = signal<Certification[]>([
    { name: 'Angular Advanced Certification', provider: 'Udemy' },
    { name: 'Full Stack Web Development', provider: 'Coursera' },
  ]);
  
  readonly projects = signal<Project[]>([
    {
      name: 'Big Data Workflow Engine',
      duration: 'Ongoing',
      description:
        'Developed an end-to-end analytics platform by engineering a comprehensive workflow engine for analytical pipelines, including an intuitive GUI for event template modeling and interactive line charts for Parquet signal data.',
      technologies: ['Angular 21', 'TypeScript', 'NX Monorepo', 'Vitest', 'SonarQube'],
    },
    {
      name: 'Revolutiones',
      duration: '3 Months',
      description:
        'Web-based entertainment payroll and production finance tools for digital on-boarding and paperless payroll.',
      technologies: ['Angular', 'TypeScript', 'Sass'],
    },
    {
      name: 'BOTSFUSION',
      duration: '12 Months',
      description:
        'AI application using WebSockets to create chatbots and web scraping for data retrieval.',
      technologies: ['Angular', 'TypeScript', 'WebSockets'],
    },
    {
      name: 'PAYROLL',
      duration: '12 Months',
      description:
        'Real-time tracking for production accounting, taxes, and health insurance with PDF and Excel exporting.',
      technologies: ['Angular', 'TypeScript'],
    },
    {
      name: 'Happy Visitor',
      duration: '12 Months',
      description:
        'Cloud-based visitor management system replacing paper trails with digital collection.',
      technologies: ['Angular', 'TypeScript', 'Ionic Framework'],
    },
  ]);

  readonly experiences = signal<Experience[]>([
    {
      company: 'Cognizant Technology Services',
      role: 'Senior Associate',
      period: 'April 11, 2025 – Till Now',
      highlights: [
        'Engineering end-to-end big data analytics workflows.',
        'Developing high-performance signal data visualization tools.',
        'Maintaining an NX Monorepo architecture for scalable enterprise applications.',
        'Ensuring code quality via SonarQube and comprehensive Vitest/Jest suites.',
      ],
    },
    {
      company: 'Revolution Entertainment Services',
      role: 'Senior Front End Developer',
      period: 'Feb 2022 – Feb 2025',
      highlights: ['Developing payroll tools', 'UI development with Angular/TypeScript'],
    },
    {
      company: 'Inspiron Info Solutions',
      role: 'Front End Developer',
      period: 'Dec 2019 – Jan 2022',
      highlights: ['Web application UI development', 'React Native Android development'],
    },
    {
      company: 'Kellton',
      role: 'Front End Developer',
      period: 'May 2019 – Dec 2019',
      highlights: ['Automotive application development', 'RESTful API integration'],
    },
    {
      company: 'Cognate IT Services',
      role: 'Front End Developer',
      period: 'Jan 2018 – Jan 2019',
      highlights: ['Automotive application development', 'RESTful API integration'],
    },
  ]);

  readonly skills = signal([
    'Angular (6, 8, 11, 18, 21)',
    'JavaScript',
    'TypeScript',
    'Ionic Framework',
    'React Native',
    'Vue.js',
    'Bootstrap 5',
    'Sass',
    'Nx Monorepo',
    'Node Js',
    'Vitest',
    'Jest',
    'SonarQube',
    'RxJS',
  ]);

  // 2. Use Computed Signals for derived data (e.g., filtering)
  readonly totalProjects = computed(() => this.projects().length);
  readonly topSkills = computed(() => this.skills().slice(0, 5));
}
