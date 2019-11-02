import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  pageBanner: any = [];
  pageBannerLoaded: boolean = false;
  featuredItems: any =[];

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService
     ) { }

  ngOnInit() {
 this.commonService.getPageBanner('events')
    .subscribe(banner => {
      this.pageBanner = banner.data;
      this.pageBannerLoaded = true;
    });

    this.loadFeaturedItems();
  }

  loadFeaturedItems()
  {
    this.genericService.getFeaturedEvents( 0, 5, localStorage.getItem('lang'))
      .subscribe( featuredItem => {
          this.featuredItems = featuredItem.data;
      });
  }  
}
