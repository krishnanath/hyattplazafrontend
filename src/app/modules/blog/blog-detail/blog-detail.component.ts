import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogs = [
    {
      img:'assets/hyattplaza-images/shopping/cat2.png',
      time: '3 Jan 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam.'
    },
    {
      img:'assets/hyattplaza-images/7.png',

      time: '3 May 1998',
      des: 'Enjoy 20% off discount on all purchases. Gubergren sed vero ea duo labore no labore stet et eos, stet nonumy dolore amet aliquyam diam.'
    },
  ]

  main_blog = [
    {
      title: 'No magna nonumy takimata stet ipsum diam et aliquyam nonumy est,.',
      author:'Author, 03 Jan 2019',
blog_des: ' Dolore amet vero dolores ipsum ipsum amet amet magna at est, sit justo kasd eos no, et sit sanctus dolores ipsum sit elitr dolor dolor ut. Et stet dolor voluptua ut. Elitr sed nonumy dolore dolores, consetetur kasd sed consetetur dolor eos dolor dolores. Tempor ea takimata ipsum lorem dolore magna diam nonumy, aliquyam sit eos et no accusam nonumy sit. Eos et duo ipsum elitr est labore amet et sed. Diam clita lorem no ea ipsum, consetetur ipsum no nonumy kasd. No sit et consetetur vero consetetur sadipscing, tempor sed ipsum magna diam dolor no. Rebum sit ut sanctus amet lorem stet. Stet sadipscing ipsum et nonumy eirmod nonumy, lorem vero sadipscing amet diam erat sadipscing at et amet, sit et clita sit dolores ea. At dolor magna nonumy sadipscing erat duo, elitr amet takimata ea sea sanctus rebum at sadipscing. Amet diam ea voluptua sea dolor magna duo invidunt, et duo aliquyam elitr.  Amet et stet elitr et stet kasd dolor, lorem labore sit vero gubergren no gubergren lorem dolor eirmod, magna ipsum kasd ipsum erat amet et et, et at consetetur nonumy stet et. Vero clita tempor gubergren et sit ut diam sadipscing dolore, et elitr diam elitr vero rebum. Lorem amet <br /> lorem clita invidunt ipsum invidunt lorem, gubergren kasd et justo magna elitr. Sanctus magna magna vero sed gubergren sed sit sadipscing, dolor no amet nonumy rebum. Clita voluptua gubergren rebum et dolore takimata sed. Clita labore et ut nonumy nonumy dolor dolores ut justo, gubergren dolores clita est justo justo. Clita sanctus ipsum duo consetetur dolore, rebum gubergren amet ipsum sit stet, nonumy gubergren tempor rebum sit sanctus ipsum amet dolor sit, justo aliquyam sed sed diam et vero. Sanctus magna nonumy invidunt.'
    }
 ]

 categories = [
  {
     
    image: 'assets/hyattplaza-images/blog/blogd.png'
  },
  {
    
    image: 'assets/hyattplaza-images/blog/fet2.png'
  }
  // {
    
  //   image: '/assets/hyattplaza-images/shopping/cat3.png'
  // },
  // {
    
  //   image: '../../assets/hyattplaza-images/shopping/cat4.png'
  // },
  // {
     
  //   image: '../../assets/hyattplaza-images/shopping/cat1.png'
  // },
  // {
     
  //   image: '../../assets/hyattplaza-images/shopping/cat3.png'
  // },
  // {
     
  //   image: '../../assets/hyattplaza-images/shopping/cat4.png'
  // },
  // {
     
  //   image: '../../assets/hyattplaza-images/shopping/cat2.png'
  // }
];


slideConfig = {
  dots: false,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};



  constructor() { }

  ngOnInit() {
  }

}
