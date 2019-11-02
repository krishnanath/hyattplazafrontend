import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements OnInit {

  pageBanner: any = [];
  dropDownCategories: any = [];
  pageBannerLoaded: boolean = false;
  selectedCategory = '';
  featuredItems: any =[];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  slideConfigmob = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService,
     private router: Router
     ) { }

  ngOnInit() {
 this.commonService.getPageBanner('dining')
    .subscribe(banner => {
      this.pageBanner = banner.data;
      this.pageBannerLoaded = true;
    });

    this.loadCategories();
    this.loadFeaturedItems();
  }

  loadFeaturedItems()
  {
    this.genericService.getFeaturedShopOrDine('dining', localStorage.getItem('lang'))
      .subscribe( featuredItem => {
          this.featuredItems = featuredItem.data;
      });
  }  

  loadCategories()
  {
    this.genericService.getInnerPageCategories(2, localStorage.getItem('lang'))
      .subscribe( category =>{
          this.dropDownCategories = category;
    });
  }

}
