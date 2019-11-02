import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {

  pageBanner: any = [];
  pageBannerLoaded: boolean = false;
  featuredItems: any =[];

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService
     ) { }

  ngOnInit() {
 this.commonService.getPageBanner('entertainment')
    .subscribe(banner => {
      this.pageBanner = banner.data;
      this.pageBannerLoaded = true;
    });

    this.loadFeaturedItems();
  }

  loadFeaturedItems()
  {
    this.genericService.getFeaturedEntertainments(localStorage.getItem('lang'))
      .subscribe( featuredItem => {
          this.featuredItems = featuredItem.data;
      });
  }  
}
