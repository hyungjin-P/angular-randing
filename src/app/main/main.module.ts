import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { RandingHeaderComponent } from './components/randing-header/randing-header.component';
import { DownloadCircleComponent } from './components/download-circle/download-circle.component';
import { SlidingTextBeltComponent } from './components/sliding-text-belt/sliding-text-belt.component';
import { TitleTextComponent } from './components/title-text/title-text.component';
import { SlidingBeltOutlineColorComponent } from './components/sliding-belt-outline-color/sliding-belt-outline-color.component';
import { StarDecorateComponent } from './components/star-decorate/star-decorate.component';
import { ChevronRightComponent } from './components/icons/chevron-right/chevron-right.component';
import { StarOutlineComponent } from './components/icons/star-outline/star-outline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlusComponent } from './components/icons/plus/plus.component';
import { DownloadBtnComponent } from './components/icons/download-btn/download-btn.component';
import { FacebookComponent } from './components/icons/facebook/facebook.component';
import { InstargramComponent } from './components/icons/instargram/instargram.component';
import { TestComponent } from './components/test/test.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { MobileRandingHeaderComponent } from './components/mobile-randing-header/mobile-randing-header.component';
import { UnderscoreComponent } from './components/icons/underscore/underscore.component';
import { FlashingComponent } from './components/icons/flashing/flashing.component';
import { DiamondComponent } from './components/icons/diamond/diamond.component';
import { CosmosComponent } from './components/icons/cosmos/cosmos.component';
import { ViewsComponent } from './views/views.component';
import { MobileComponent } from './mobile/mobile.component';
import { ServiceStrategyComponent } from './components/service-strategy/service-strategy.component';
import { SwiperModule } from 'swiper/angular';
import { StarOutlineSmallComponent } from './components/icons/star-outline-small/star-outline-small.component';
import { ArtistSliderComponent } from './components/artist-slider/artist-slider.component';
import { DownloadBtnSmallComponent } from './components/icons/download-btn-small/download-btn-small.component';

const routes: Routes = [
  { path: '', component: ViewsComponent },
  { path: 'test', component: TestComponent },
  { path: 'm', component: MobileComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    MainComponent,
    RandingHeaderComponent,
    DownloadCircleComponent,
    SlidingTextBeltComponent,
    TitleTextComponent,
    SlidingBeltOutlineColorComponent,
    StarDecorateComponent,
    ChevronRightComponent,
    StarOutlineComponent,
    PlusComponent,
    DownloadBtnComponent,
    FacebookComponent,
    InstargramComponent,
    TestComponent,
    HamburgerMenuComponent,
    MobileRandingHeaderComponent,
    UnderscoreComponent,
    FlashingComponent,
    DiamondComponent,
    CosmosComponent,
    ViewsComponent,
    MobileComponent,
    ServiceStrategyComponent,
    StarOutlineSmallComponent,
    ArtistSliderComponent,
    DownloadBtnSmallComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    SwiperModule,
    RouterModule.forChild([...routes])
  ]
})
export class MainModule { }

// DeadLock 발생 조건
// Mutual exclusion
// Hold and wait
// No preemption
// Circular wait
// Timed wait
// Read lock
// Write lock
// Shared lock
// Extreme lock
// Kernel Object Lock
// Kernel Spin Lock
// File locking
// Futex and futex
// Semaphores
// Semaphores
// Message queues
