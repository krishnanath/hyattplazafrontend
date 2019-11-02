import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-03.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-04.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-05.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-06.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-03.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-04.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-05.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/cat-06.png'
    }
  ];
  stories = [
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-07.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-08.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-09.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-10.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-12.png'
    },
    {
      tag: 'LOREM IPSUM',
      title: 'LOREM IPSUM<br>DOLOR SIT',
      image: '/assets/images/cat-11.png'
    }
  ];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  constructor() { }

  ngOnInit() {
  }

}
