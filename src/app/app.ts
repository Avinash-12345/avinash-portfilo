import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from "./components/experience/theme/themetoggle.component";
import { ExperienceComponent } from "./components/experience/experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('avinash-portfolio');
}
