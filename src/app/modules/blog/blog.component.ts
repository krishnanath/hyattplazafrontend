import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  blog = [
    {
      des:'Labore sanctus takimata et amet stet dolores voluptua. ',
      img:'assets/hyattplaza-images/blog/fet1.png'
    },
    {
      des:'Labore sanctus takimata et amet stet dolores voluptua. ',
      img:'assets/hyattplaza-images/blog/fet2.png'
  

    }
  ]
  blogs = [
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',
      time: '3 Jan 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam. Lorem ea consetetur dolor duo rebum. Stet sed lorem sanctus rebum lorem lorem eos. Sit tempor.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: '3 May 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam. Lorem ea consetetur dolor duo rebum. Stet sed lorem sanctus rebum lorem lorem eos. Sit tempor.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat1.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam. Lorem ea consetetur dolor duo rebum. Stet sed lorem sanctus rebum lorem lorem eos. Sit tempor.'
    },
    {
      img:'assets/hyattplaza-images/6.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam. Lorem ea consetetur dolor duo rebum. Stet sed lorem sanctus rebum lorem lorem eos. Sit tempor.'
    },
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam. Lorem ea consetetur dolor duo rebum. Stet sed lorem sanctus rebum lorem lorem eos. Sit tempor.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: '22 Jan 2019',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam. Lorem ea consetetur dolor duo rebum. Stet sed lorem sanctus rebum lorem lorem eos. Sit tempor.'
    },
    
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
