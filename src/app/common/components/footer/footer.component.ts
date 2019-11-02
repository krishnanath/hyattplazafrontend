import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialIcons: Array<string> = [];
  footerLinks: Array<string> = [];
  footerColOne: Array<string> = [];
  footerColTwo: Array<string> = [];
  footerContact: Array<string> = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getFooterSocialIcons()
    .subscribe(icons => {
      this.socialIcons = icons;
    });

    this.commonService.getFooterLinks(localStorage.getItem('lang'))
      .subscribe(links => {
       this.footerLinks = links['data'].links;
       this.footerContact = links['data'].contact; 
       this.formatLinks();
    });

  }

  formatLinks()
  {
    this.footerColOne = this.footerLinks.filter( col => col['itemColumn'] == 1);
    this.footerColTwo = this.footerLinks.filter( col => col['itemColumn'] == 2);
  }

}
