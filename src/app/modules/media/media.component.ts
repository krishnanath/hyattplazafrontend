import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService, GenericPageService, HomeService } from '../../core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  blogs = [
    {
      img:'assets/hyattplaza-images/9.png',
      time: '3 Jan 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/3.png',

      time: '3 May 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/10.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/9.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat3.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    {
      img:'assets/hyattplaza-images/10.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, Diam duo et sit sit dolores.'
    },
    
  ]
  




  pageBanner: any = [];
  pageBannerLoaded: boolean = false;
  galleryData: any = [];
  galleryDataLoaded: boolean = false;
  newsData: any = [];
  newsDataLoaded: boolean = false;

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService,
     private homeService: HomeService
     ) { }

  ngOnInit() {

    this.commonService.getPageBanner('media')
        .subscribe(banner => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        }
    );

    this.loadGalleryAlbums();
    this.loadNews();

  }
  showTab = 1;
  tabToggle(index) {
    this.showTab = index;
  }

  loadGalleryAlbums()
  {
    this.homeService.getGallery(localStorage.getItem('lang'), 'gallery')
    .subscribe(gallery => {
      this.galleryData = gallery;
      this.galleryDataLoaded = true;
    });

  }
  loadNews()
  {
    this.homeService.getNewsAndEvents(localStorage.getItem('lang'), 0, 15, 'news')
    .subscribe(res => {
      this.newsData = res.data;
      console.log(this.newsData);
      this.newsDataLoaded = true;
    });

  }

}
