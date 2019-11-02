import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  pageBanner: any = [];
  dropDownCategories: any = [];
  pageBannerLoaded: boolean = false;
  selectedCategory = '';
  categoryBlock: boolean = true;
  brandBlock: boolean = false;
  featuredItems: any = [];
  brandLogs: any = [];

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
 this.commonService.getPageBanner('shopping')
    .subscribe(banner => {
      this.pageBanner = banner.data;
      this.pageBannerLoaded = true;
    });

    this.loadCategories();
    this.loadFeaturedItems();
    this.loadBrands();
  }

  loadCategories()
  {
    this.genericService.getInnerPageCategories(1, localStorage.getItem('lang'))
      .subscribe( category =>{
          this.dropDownCategories = category;
    });
  }

  loadFeaturedItems()
  {
    this.genericService.getFeaturedShopOrDine('shopping', localStorage.getItem('lang'))
      .subscribe( featuredItem => {
          this.featuredItems = featuredItem.data;
      });
  }

  loadBrands()
  {
    this.genericService.getBrands('shopping', localStorage.getItem('lang'))
      .subscribe( brandLogoItems => {
        console.log(brandLogoItems.data);
          this.brandLogs = brandLogoItems.data;
      });
  }

  toggleBlock( section: string)
  {
      if(section == 'category-block'){
        this.brandBlock = false;
        this.categoryBlock = true;
      }
      else {        
        this.categoryBlock = false;
        this.brandBlock = true;
        
      }
  }

}
