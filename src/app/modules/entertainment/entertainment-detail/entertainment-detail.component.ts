import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-detail',
  templateUrl: './entertainment-detail.component.html',
  styleUrls: ['./entertainment-detail.component.scss']
})
export class EntertainmentDetailComponent implements OnInit {

  categories = [
    {
      image: "assets/hyattplaza-images/Entertainment/1.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/2.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/3.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/4.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/3.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/4.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/1.png"
    },
    {
      image: "assets/hyattplaza-images/Entertainment/2.png"
    }
  ];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4
  };


  constructor() { }

  ngOnInit() {
  }

}
