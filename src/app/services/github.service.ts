import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);
  private username = 'Avinash-12345';

  getProfile() {
    return this.http.get<any>(
      `https://api.github.com/users/${this.username}`
    );
  }

  getContributions() {
    return this.http.get<any>(
      `https://github-contributions-api.jogruber.de/v4/${this.username}`
    );
  }
}