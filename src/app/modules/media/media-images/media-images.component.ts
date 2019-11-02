import { Component, OnInit, Injectable, ɵConsole } from '@angular/core';
import { CommonService, GenericPageService, HomeService } from '../../../core';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-media-images',
  templateUrl: './media-images.component.html',
  styleUrls: ['./media-images.component.scss']
})
export class MediaImagesComponent implements OnInit {

  pageBanner: any = [];
  pageBannerLoaded: boolean = false;
  albumImages: any = [];
  albumImagesLoaded: boolean = false;
  albumId: number;

  constructor(
     private commonService: CommonService,
     private genericService: GenericPageService,
     private homeService: HomeService,
     private activatedRoute: ActivatedRoute,
     private _lightbox: Lightbox
     ) { }

  ngOnInit() {

    this.commonService.getPageBanner('media')
        .subscribe( banner  => {
          this.pageBanner = banner.data;
          this.pageBannerLoaded = true;
        }
    );

    this.activatedRoute.params.subscribe(routeParams => {
        this.albumId = routeParams.id;
        this.loadAlbumImages();
    });

  }

  loadAlbumImages()
  {
    this.genericService.getAlbumImages(this.albumId)
    .subscribe( images => {
      this.albumImages = images;
      this.albumImagesLoaded = true;
    });

  }

  open(index: number): void {
    // open lightbox
    console.log(this.albumImages.data);
    console.log(index);
    this._lightbox.open(this.albumImages.data, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
