import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {


  events = [
    {
      event_date:'01/04/2019- 05/05/2019',
      event_time:'10:00 AM - 05:00 PM',
      event_location:'Lorem Ipsum',
      events_heading:'EVENT DETAIL PAGE',
      events_details:"Et eirmod ea sea lorem sea aliquyam sed sea sea, invidunt magna sed et dolores et, amet sed stet takimata sadipscing stet. Sanctus magna invidunt dolor dolor kasd sit lorem. Ipsum amet diam ipsum eirmod sed dolor sea justo accusam, sit erat sit labore."
      
    }
  ]
  events_images = [
    {
      event_img:'assets/events/797.png',
      event_map:'assets/events/MAP.png',
    }
  ]

  categories = [
    {
       
      image: 'assets/hyattplaza-images/events/1.png'
    },
    {
      
      image: 'assets/hyattplaza-images/events/2.png'
    },
    {
      
      image: 'assets/hyattplaza-images/events/3.png'
    },
    {
      
      image: 'assets/hyattplaza-images/events/4.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/1.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/4.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/3.png'
    },
    {
       
      image: 'assets/hyattplaza-images/events/2.png'
    }
  ];
 

 

  slideConfig = {
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
  };


  constructor() { }

  ngOnInit() {
  }

}
