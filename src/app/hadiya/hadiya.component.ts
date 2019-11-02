import { PageService } from './../core/services/page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hadiya',
  templateUrl: './hadiya.component.html',
  styleUrls: ['./hadiya.component.scss']
})
export class HadiyaComponent implements OnInit {

  banner = '';
  pageTitle = '';
  stores: Array<string> = [];
  constructor(private pageService: PageService) { }

  ngOnInit() {

    this.pageService.getPageBanner('giftvoucher', localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });

    this.pageService.getHadiyaStores(localStorage.getItem('lang'))
      .subscribe(responsehadiya => {
        // console.log(response);
        this.stores = responsehadiya.data;
      });
  }

  switchVisible() {
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }

    window.scrollTo(0,0);
 
}


}
