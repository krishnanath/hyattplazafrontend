import { Router } from '@angular/router';
import { PageService } from './../core/services/page.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-body">
    <div class="card">
    <div class="image-div">
      <img
        src="{{offerImage}}"
        class="card-img-top img-height"
        alt="..."
      />
      <span class="name-shade">{{offerTitle}}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{offerSubtitle}}</h5>
      <hr class="m-0" />
      <p class="card-text">
        {{offerDescription}}
      </p>
      <div class="crd_btn">
      <a class="view_store" (click)="gotoStore(offerStore)" >View Store</a>
      </div>
    </div>
  </div>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  @Input() offerImage;
  @Input() offerSubtitle;
  @Input() offerTitle;
@Input() offerStore;
  @Input() offerDescription;




  constructor(public activeModal: NgbActiveModal, private router: Router) {}
  gotoStore(store) {
    this.activeModal.close();
    this.router.navigate(['/shopping/detail', store]);
  }
}

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(private pageService: PageService,
    private modalService: NgbModal) { }
  offers: any = [];
  banner = '';
  pageTitle = '';
  ngOnInit() {

    this.pageService.getPageBanner('offers', localStorage.getItem('lang'))
      .subscribe(response => {
        console.log(response);
        this.banner = response.data.cover;
        this.pageTitle = response.data.title;
      });

    this.pageService.getOffers(localStorage.getItem('lang'))
      .subscribe(response => {
        // console.log(response);
        this.offers = response.data;
      });
  }

  open(image, title, subTitle, desc, store) {
    console.log(image);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.offerTitle  = title;
    modalRef.componentInstance.offerSubtitle = subTitle;
    modalRef.componentInstance.offerImage  = image;
    modalRef.componentInstance.offerDescription = desc;
    modalRef.componentInstance.offerStore = store;
  }

}
