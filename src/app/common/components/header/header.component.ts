import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  topMenu: any [] = [];
  topMenuLoaded: boolean = false;
  language: string = 'en';
  currentLanguages = [
    'en', 'ar'
  ];
  activeLanguage = '';

  constructor(private commonService: CommonService) { }

  ngOnInit() {

    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', 'en');
    }

    this.commonService.getMainMenu(localStorage.getItem('lang'))
    .subscribe(menu => {
      this.topMenu = menu.data;
      this.topMenuLoaded = true;
    });


    this.activeLanguage = localStorage.getItem('lang');

  }

  changeLang( lang: string){
    localStorage.setItem('lang', lang);
    window.location = window.location;
  }

}
