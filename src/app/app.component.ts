import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hyatt Plaza';

  constructor(private renderer: Renderer2) {

    const selectedLanguage = localStorage.getItem('lang');
    this.renderer.addClass(document.body, 'switch_'+ selectedLanguage);
   }
}
