import { Component, signal } from '@angular/core';
import { ThemeToggleComponent } from "./components/experience/theme/themetoggle.component";
import { ExperienceComponent } from "./components/experience/experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [ThemeToggleComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('avinash-portfolio');
}
