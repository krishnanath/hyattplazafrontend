import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, HyattShopService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss']
})
export class ShoppingDetailComponent implements OnInit {

  pageBanner: Array<string> = [];
  pageBannerLoaded: boolean = true;
  shopId: number;
  shopDetail:any = [];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3
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
     private shopService: HyattShopService,
     private router: Router,
     private activatedRoute: ActivatedRoute
     ) { }

  ngOnInit() {

        this.activatedRoute.params.subscribe(routeParams => {
            this.shopId = routeParams.id;
            this.loadShopDetail();
        });

        this.commonService.getPageBanner('shopping')
            .subscribe(banner => {
            this.pageBanner = banner.data;
            this.pageBannerLoaded = true;
        });
  }

  loadShopDetail()
  {
    this.shopService.getShopDetail( this.shopId, localStorage.getItem('lang'))
        .subscribe( shop => {
            this.shopDetail = shop.data;
        });
  }
}
