import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss']
})
export class LeasingComponent implements OnInit {

  banner = '';
  pageTitle = '';
  currentJustify = 'fill';
  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.pageService.getPageBanner('leasing', localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });
  }

}
