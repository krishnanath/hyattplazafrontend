import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {
  categories = [
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    },
    {
      title: 'Lrem Ipsum',
      image: '/assets/images/relsh.png'
    }
  ];

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  constructor() { }

  ngOnInit() {
  }

}
