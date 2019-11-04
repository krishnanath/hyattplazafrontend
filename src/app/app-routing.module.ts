import { LeasingComponent } from './leasing/leasing.component';
import { HadiyaComponent } from './hadiya/hadiya.component';
import { OffersComponent } from './offers/offers.component';
import { VipcardComponent } from './vipcard/vipcard.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { DiningComponent } from './modules/dining/dining.component';
import { EntertainmentComponent } from './modules/entertainment/entertainment.component';
import { ShoppingDetailComponent } from './modules/shopping/detail/shopping-detail.component';
import { EventsComponent } from './modules/events/events.component';
import { MediaComponent } from './modules/media/media.component';
import { EntertainmentDetailComponent } from './modules/entertainment/entertainment-detail/entertainment-detail.component';
import { EventDetailComponent } from './modules/events/event-detail/event-detail.component';
import { GuestservicesComponent } from './modules/guestservices/guestservices.component';
import { MediaImagesComponent } from './modules/media/media-images/media-images.component';
import { NewsDetailComponent } from './modules/media/news-detail/news-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { TermsComponent } from './modules/terms/terms.component';
import { PrivacyComponent } from './modules/privacy/privacy.component';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: 'dining',
    component: DiningComponent
  },
  {
    path: 'entertainment',
    component: EntertainmentComponent
  },
  {
    path: 'shopping/detail/:id',
    component: ShoppingDetailComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'vipcard',
    component: VipcardComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'gift-voucher',
    component: HadiyaComponent
  },
  {
    path: 'leasing',
    component: LeasingComponent
  },
  {
    path: 'entertainment-detail',
    component: EntertainmentDetailComponent
  },
  {
    path: 'event-detail',
    component: EventDetailComponent
  },
  {
    path: 'guestservices',
    component: GuestservicesComponent
  },
 
  {
    path: 'media/media-images/:id',
    component: MediaImagesComponent
  },
  {
    path: 'media/news-detail/:id',
    component: NewsDetailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'careers',
    component: CareerComponent
  },
  {
    path:'terms',
    component: TermsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-detail',
    component: BlogDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
