import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public userName: string = '';
  public nameLower: string = '';
  public nameUpper: string = '';
  public fullName: string = '';
  public fecha: Date = new Date();
  public customDate: Date = new Date();
  public selectedDate: Date = new Date();

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeInput() {
    const sanitizedValue = this.sanitizer.sanitize(5, this.userName);
    this.userName = sanitizedValue !== null ? sanitizedValue : '';
  }
}
